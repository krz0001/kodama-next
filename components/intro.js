import { WEBSITE_NAME } from '../lib/constants'

export default function Intro() {
  return (
    <section className="text-center mt-16 mb-16 md:mb-12">
      <h1 className="text-7xl py-8 grow">
        { WEBSITE_NAME }
      </h1>
    </section>
  )
}
