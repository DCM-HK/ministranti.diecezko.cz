import fs from "node:fs";
import path from "node:path";
import ContainerImage from "./container-image";

const PLACEHOLDER_WEBP_PATH = "/assets/images/profile-placeholder.webp";
const PLACEHOLDER_JPG_PATH = "/assets/images/profile-placeholder.jpg";

function resolveAssetPath(assetPath, fallbackPath) {
  if (!assetPath) {
    return fallbackPath;
  }

  if (!assetPath.startsWith("/")) {
    return assetPath;
  }

  const publicAssetPath = path.join(process.cwd(), "public", assetPath.slice(1));

  return fs.existsSync(publicAssetPath) ? assetPath : fallbackPath;
}

export default function ProfileCard({
  className,
  name,
  title,
  jpgPath,
  pngPath,
  webpPath,
  altText,
  description,
}) {
  const resolvedWebpPath = resolveAssetPath(
    webpPath,
    PLACEHOLDER_WEBP_PATH,
  );
  const resolvedJpgPath = resolveAssetPath(jpgPath, PLACEHOLDER_JPG_PATH);
  const resolvedPngPath = pngPath
    ? resolveAssetPath(pngPath, resolvedJpgPath)
    : undefined;

  return (
    <div
      className={`${className} w-full my-4 md:my-0 flex flex-col items-center justify-around border-[#444] border rounded-xl p-4 sm:p-6 transition h-full hover:scale-[1.02] hover:rotate-1`}
    >
      <ContainerImage
        pngPath={resolvedPngPath}
        jpgPath={resolvedJpgPath}
        webpPath={resolvedWebpPath}
        altText={altText}
        className={`!rounded-full h-32 w-32 md:h-36 md:w-36 border-2 border-[#444] bg-[#444]`}
      />
      <div className="w-full">
        <h4 className="font-bold text-xl mb-0 mt-2">{name}</h4>
        <p>{title}</p>
        <p
          className="w-full"
          dangerouslySetInnerHTML={{
            __html: `${description === undefined ? "" : description}`,
          }}
        />
      </div>
    </div>
  );
}
