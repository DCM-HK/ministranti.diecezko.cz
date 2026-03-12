import fs from "node:fs";
import path from "node:path";

export function resolvePublicAssetPath(assetPath, fallbackPath) {
  if (!assetPath) {
    return fallbackPath;
  }

  if (!assetPath.startsWith("/")) {
    return assetPath;
  }

  const publicAssetPath = path.join(process.cwd(), "public", assetPath.slice(1));

  return fs.existsSync(publicAssetPath) ? assetPath : fallbackPath;
}
