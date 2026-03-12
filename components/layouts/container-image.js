import ContainerImageBase from "./container-image-base";
import { resolvePublicAssetPath } from "./resolve-public-asset-path";

export default function ContainerImage({
  className,
  pngPath,
  jpgPath,
  webpPath,
  altText,
}) {
  const resolvedJpgPath = resolvePublicAssetPath(jpgPath);
  const resolvedWebpPath = resolvePublicAssetPath(webpPath);
  const resolvedPngPath = pngPath
    ? resolvePublicAssetPath(
        pngPath,
        resolvedJpgPath !== undefined ? resolvedJpgPath : resolvedWebpPath,
      )
    : undefined;

  return (
    <ContainerImageBase
      className={className}
      pngPath={resolvedPngPath}
      jpgPath={resolvedJpgPath}
      webpPath={resolvedWebpPath}
      altText={altText}
    />
  );
}
