import Image from "next/image"
import Link from "next/link"
import Meta from "/components/meta"
import KodamaSoftLogo from "/public/assets/logo_white.png";
import StellarSanctuaryLogo from "/public/assets/games/illustrations/kodama-comet-stellar-sanctuary.png"
import SpaceBackground from "/public/assets/big_01_space_g.png"
import SpaceBackgroundStars from "/public/assets/big_01_space_g_stars.png"

export default function StellarSanctuary({ }) {
    return (
        <>
            <Meta />
            <div className="relative overflow-hidden bg-[url('/assets/big_01_space_g.png')] bg-cover bg-center bg-no-repeat">
                <Image src={SpaceBackgroundStars} alt="Space Background Stars" className="absolute top-0 left-0 z-0 object-cover animate-spin-stars blur-sm" />
                <div className="prose prose-lg lg:prose-xl mx-auto pt-12 prose-invert prose-ul:mb-12 pb-12 relative z-10 bg-black/40 px-12 backdrop-blur">

                    <Link href="/"><Image src={KodamaSoftLogo} alt="KodamaSoft" className="w-64 mx-auto" /></Link>
                    <h1><Image src={StellarSanctuaryLogo} alt="KODAMA COMET -Stellar Sanctuary-" /></h1>

                    <p>There are many giant space stations roaming in orbit around earth. Stellar Sanctuary 04 is one of those, and its purpose is to explore the wonders of the dense and mysterious space. The shorthanded staff hires Euphémia, the main character, to become part of the station’s crew. However, it is also on this station that she will make a groundbreaking discovery with the four other members, which might alter the very fate of mankind in the near future…
                    </p>

                    <p>Stellar Sanctuary is planned to be an immersive and atmospheric visual novel, and we aim at making the reader go through tons of different kind of emotions and feelings throughout their read. Be it about the coldness of space, the warmth and fear of being secluded… A personal story, perfumed with a sense of tension.</p>

                    <h2>Features</h2>
                    <ul>
                        <li>A short but dense read below 10 hours written and directed by <a href="https://twitter.com/fivda_">Fivda</a></li>
                        <li>A focus on the five crewmembers, and the first entry in the dense chronology of KODAMA COMET</li>
                        <li>An entirely kinetic experience, switching its narrative style switching between SNL and ADV style depending on the situation, all told and seen through the eyes of Euphémia</li>
                        <li>Five endearing and colorful characters, with their own secrets and fears</li>
                        <li>An in-house, immersive, jamming and experimental soundtrack made by <a href="https://postblankvoid.bandcamp.com/">postblankvoid</a>, Scramel, AIKATYPE, <a href="https://soundcloud.com/malik-oussalah">Kopan</a> and other guests such as <a href="https://soundcloud.com/june_ji/">Juneji</a></li>
                        <li>A multitude of expressive character sprites &amp; backgrounds by <a href="https://twitter.com/Garrrros">Garrrros</a> with an original character design done by <a href="https://twitter.com/i/moments/1049648594549166080">Ree</a></li>
                    </ul>

                    <p>
                        The game is currently set to release in 2025 - A demo of the first two chapters out of six is planned to release one or two months before the final release.
                    </p>
                </div>
            </div>
        </>
    )
}