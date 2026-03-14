import ContainerImageBase from "./container-image-base";
import { resolvePublicAssetPath } from "./resolve-public-asset-path";

export default function ContainerImage({
  className,
  pngPath,
  jpgPath,
  webpPath,
  altText,
}) {
  const resolvedWebpPath = resolvePublicAssetPath(webpPath);
  const resolvedJpgPath = resolvedWebpPath
    ? undefined
    : resolvePublicAssetPath(jpgPath);
  const resolvedPngPath =
    resolvedWebpPath || !pngPath
      ? undefined
      : resolvePublicAssetPath(pngPath, resolvedJpgPath);

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
