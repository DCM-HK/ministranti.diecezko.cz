export default function ContainerParagraph({ className, children }) {
  return <p className={`${className} my-2 tracking-normal text-lg w-full text-justify`}>{children}</p>;
}
