import { useGSAP } from "@gsap/react";
import React from "react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

const Showcase: React.FC = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  });

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" autoPlay muted loop playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Raketti siru</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Esittelyssä{" "}
                <span className="text-white">
                  M4, seuraavan sukupolven Apple-siru.
                </span>
              </p>
              <p>
                M4 ohjaa Applen älykkyyttä Macbook Pro mallissa, joten voit
                kirjoittaa, luoda ja saada enemmän aikaan vaivattomasti. Kaikki
                tämä uskomattoman ohuessa, kevyessä ja tehokkaassa laitteessa.
              </p>
              <p>
                Uusi näyttömoottori tarjoaa henkeäsalpaavan tarkkuuden, värien
                todenmukaisuuden ja kirkkauden. Ja seuraavan sukupolven
                näytönohjain laitteistokiihdytetyllä säteenseurantatekniikalla
                tuo konsolitason grafiikan sormenpäidesi ulottuville.
              </p>
              <p className="text-primary">Lue lisää</p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Jopa</p>
              <h3> 4x kertaa nopeampi</h3>
              <p> ammattilaiskäsittely teho verrattuna M2 siruun</p>
            </div>
            <div className="space-y-2">
              <p>Jopa</p>
              <h3> 1.5x kertaa nopeampi</h3>
              <p> laskentateho verrattuna M2 siruun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
