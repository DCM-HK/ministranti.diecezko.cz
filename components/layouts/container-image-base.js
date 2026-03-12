// use this on client side only, for server side use ContainerImage.js

export default function ContainerImageBase({
  className,
  pngPath,
  jpgPath,
  webpPath,
  altText,
}) {
  return (
    <picture>
      {webpPath ? <source srcSet={webpPath} type="image/webp" /> : null}
      {jpgPath ? <source srcSet={jpgPath} type="image/jpeg" /> : null}
      <img
        alt={altText}
        loading="lazy"
        src={
          pngPath !== undefined
            ? pngPath
            : jpgPath !== undefined
            ? jpgPath
            : webpPath
        }
        className={`rounded-xl ${className}`}
      />
    </picture>
  );
}
