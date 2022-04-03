export default function ProseContainer({ children, className }) {
  return <section className={"prose md:prose-lg lg:prose-xl prose-invert max-w-none " + className}>{children}</section>
}
