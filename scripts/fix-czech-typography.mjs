import { createRequire } from "node:module";
import { readFile, writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
const { parse } = require("@babel/parser");
const fastGlob = require("fast-glob");

const NBSP_ENTITY = "&nbsp;";
const TEXT_FILE_PATTERNS = ["app/**/*.{js,jsx}", "components/**/*.{js,jsx}"];
const TARGET_NATIVE_TAGS = new Set(["h1", "h2", "h3", "h4", "h5", "h6", "p", "li"]);
const TARGET_CONTAINER_TAGS = new Set([
  "ContainerTitle",
  "ContainerDescription",
  "ContainerParagraph",
  "ContainerH2",
  "ContainerH3",
  "ContainerUl",
  "ContainerOl",
  "ContainerLi",
]);

function getJsxName(node) {
  if (!node) {
    return "";
  }

  if (node.type === "JSXIdentifier") {
    return node.name;
  }

  if (node.type === "JSXMemberExpression") {
    return `${getJsxName(node.object)}.${getJsxName(node.property)}`;
  }

  return "";
}

function isTextScopeTag(name) {
  return TARGET_NATIVE_TAGS.has(name) || TARGET_CONTAINER_TAGS.has(name);
}

function fixCzechTypography(text) {
  let fixed = text.replace(/\u00a0/g, NBSP_ENTITY);

  fixed = fixed.replace(
    /(^|[\s([{"'`„“‚‘»›])([AaIiKkOoSsUuVvZz]) ([^\s<>{}])/gu,
    `$1$2${NBSP_ENTITY}$3`,
  );

  fixed = fixed.replace(
    new RegExp(
      String.raw`(\d) ((?:\u00b0C|%|\u2030|K\u010d|km|m|cm|mm|kg|g|mg|l|ml|hod\.?|min\.?|s|h))(?=$|[^\p{L}\p{N}_])`,
      "gu",
    ),
    `$1${NBSP_ENTITY}$2`,
  );

  fixed = fixed.replace(/(\p{Lu}\.) ([\p{Lu}])/gu, `$1${NBSP_ENTITY}$2`);

  return fixed;
}

function collectTextEdits(source) {
  const ast = parse(source, {
    sourceType: "module",
    plugins: ["jsx"],
    errorRecovery: false,
  });

  const edits = [];

  function addTextEdit(node) {
    const raw = source.slice(node.start, node.end);
    const fixed = fixCzechTypography(raw);

    if (fixed !== raw) {
      edits.push({
        start: node.start,
        end: node.end,
        text: fixed,
      });
    }
  }

  function visit(node, inTextScope = false) {
    if (!node || typeof node !== "object") {
      return;
    }

    if (Array.isArray(node)) {
      for (const child of node) {
        visit(child, inTextScope);
      }

      return;
    }

    if (node.type === "JSXElement") {
      const tagName = getJsxName(node.openingElement.name);
      const childTextScope = inTextScope || isTextScopeTag(tagName);

      for (const child of node.children) {
        visit(child, childTextScope);
      }

      return;
    }

    if (node.type === "JSXFragment") {
      for (const child of node.children) {
        visit(child, inTextScope);
      }

      return;
    }

    if (node.type === "JSXText") {
      if (inTextScope) {
        addTextEdit(node);
      }

      return;
    }

    for (const [key, value] of Object.entries(node)) {
      if (
        key === "loc" ||
        key === "start" ||
        key === "end" ||
        key === "extra" ||
        key === "leadingComments" ||
        key === "trailingComments" ||
        key === "innerComments"
      ) {
        continue;
      }

      visit(value, inTextScope);
    }
  }

  visit(ast);
  return edits;
}

function applyEdits(source, edits) {
  return edits
    .sort((a, b) => b.start - a.start)
    .reduce((nextSource, edit) => {
      return `${nextSource.slice(0, edit.start)}${edit.text}${nextSource.slice(edit.end)}`;
    }, source);
}

async function processFile(filePath, writeChanges) {
  const source = await readFile(filePath, "utf8");
  const edits = collectTextEdits(source);

  if (edits.length === 0) {
    return { changed: false, edits: 0 };
  }

  if (writeChanges) {
    await writeFile(filePath, applyEdits(source, edits), "utf8");
  }

  return { changed: true, edits: edits.length };
}

async function runOnProject(writeChanges) {
  const files = await fastGlob(TEXT_FILE_PATTERNS, {
    ignore: ["node_modules/**", ".next/**"],
    onlyFiles: true,
  });
  const changedFiles = [];

  for (const file of files) {
    const result = await processFile(file, writeChanges);

    if (result.changed) {
      changedFiles.push({ file, edits: result.edits });
    }
  }

  if (changedFiles.length === 0) {
    console.log("Czech typography is already normalized.");
    return true;
  }

  const mode = writeChanges ? "Updated" : "Would update";
  console.log(`${mode} Czech typography in ${changedFiles.length} file(s):`);

  for (const { file, edits } of changedFiles) {
    console.log(`- ${file} (${edits} text node${edits === 1 ? "" : "s"})`);
  }

  return writeChanges;
}

function runValidation() {
  const input = `export default function Validation() {
  return (
    <main>
      <ContainerTitle>Kdo je v domě</ContainerTitle>
      <ContainerDescription>A od 5 km k domu</ContainerDescription>
      <ContainerParagraph>Text v domě a 30 °C.</ContainerParagraph>
      <ContainerH2>Seznam s titulkem</ContainerH2>
      <ContainerH3>J. Novák v Hradci</ContainerH3>
      <ContainerUl>
        <ContainerLi>Jdeme z domu</ContainerLi>
      </ContainerUl>
      <ContainerOl>
        <ContainerLi>Modlitba za 20 % lidí</ContainerLi>
      </ContainerOl>
      <h1>Nadpis s textem</h1>
      <h2>Další o setkání</h2>
      <p>Otec v kostele</p>
      <ul>
        <li>Jdeme u vody</li>
      </ul>
      <ol>
        <li>Jdeme k oltáři</li>
      </ol>
      <ContainerImage alt="v attribute should stay untouched" />
    </main>
  );
}
`;

  const expected = `export default function Validation() {
  return (
    <main>
      <ContainerTitle>Kdo je v&nbsp;domě</ContainerTitle>
      <ContainerDescription>A&nbsp;od 5&nbsp;km k&nbsp;domu</ContainerDescription>
      <ContainerParagraph>Text v&nbsp;domě a&nbsp;30&nbsp;°C.</ContainerParagraph>
      <ContainerH2>Seznam s&nbsp;titulkem</ContainerH2>
      <ContainerH3>J.&nbsp;Novák v&nbsp;Hradci</ContainerH3>
      <ContainerUl>
        <ContainerLi>Jdeme z&nbsp;domu</ContainerLi>
      </ContainerUl>
      <ContainerOl>
        <ContainerLi>Modlitba za 20&nbsp;% lidí</ContainerLi>
      </ContainerOl>
      <h1>Nadpis s&nbsp;textem</h1>
      <h2>Další o&nbsp;setkání</h2>
      <p>Otec v&nbsp;kostele</p>
      <ul>
        <li>Jdeme u&nbsp;vody</li>
      </ul>
      <ol>
        <li>Jdeme k&nbsp;oltáři</li>
      </ol>
      <ContainerImage alt="v attribute should stay untouched" />
    </main>
  );
}
`;

  const output = applyEdits(input, collectTextEdits(input));

  if (output !== expected) {
    console.error("Typography validation failed.");
    console.error(output);
    process.exitCode = 1;
    return;
  }

  console.log("Typography validation passed.");
}

const args = new Set(process.argv.slice(2));

if (args.has("--validate")) {
  runValidation();
} else {
  const writeChanges = args.has("--write");
  const success = await runOnProject(writeChanges);

  if (!success) {
    process.exitCode = 1;
  }
}
