import ContainerImageBase from "./container-image-base";
import { resolvePublicAssetPath } from "./resolve-public-asset-path";

const PLACEHOLDER_WEBP_PATH = "/assets/images/profile-placeholder.webp";
const PLACEHOLDER_JPG_PATH = "/assets/images/profile-placeholder.jpg";
const IMAGE_EXTENSION_PATTERN = /\.(?:jpg|jpeg|png|JPG|JPEG|PNG)$/;

function inferWebpPath(assetPath) {
  if (!assetPath || !IMAGE_EXTENSION_PATTERN.test(assetPath)) {
    return undefined;
  }

  return assetPath.replace(IMAGE_EXTENSION_PATTERN, ".webp");
}

export function resolveAvatarImagePaths({ jpgPath, pngPath, webpPath }) {
  const resolvedWebpPath = resolvePublicAssetPath(
    webpPath ?? inferWebpPath(pngPath ?? jpgPath),
  );
  const resolvedJpgPath = jpgPath ? resolvePublicAssetPath(jpgPath) : undefined;
  const resolvedPngPath = pngPath ? resolvePublicAssetPath(pngPath) : undefined;

  if (resolvedWebpPath || resolvedJpgPath || resolvedPngPath) {
    return {
      webpPath: resolvedWebpPath,
      jpgPath: resolvedJpgPath,
      pngPath: resolvedPngPath,
    };
  }

  return {
    webpPath: PLACEHOLDER_WEBP_PATH,
    jpgPath: PLACEHOLDER_JPG_PATH,
    pngPath: undefined,
  };
}

export default function AvatarImage({
  className,
  jpgPath,
  pngPath,
  webpPath,
  altText,
}) {
  const resolvedPaths = resolveAvatarImagePaths({ jpgPath, pngPath, webpPath });

  return (
    <ContainerImageBase
      className={className}
      pngPath={resolvedPaths.pngPath}
      jpgPath={resolvedPaths.jpgPath}
      webpPath={resolvedPaths.webpPath}
      altText={altText}
    />
  );
}
