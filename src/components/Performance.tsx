import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { performanceImages, performanceImgPositions } from "../constants/index";
import { useMediaQuery } from "react-responsive";

const Performance: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { ease: "power1.inOut", duration: 2, overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((pos) => {
        if (pos.id === "p5") return;

        const toVars: gsap.TweenVars = { y: 0, autoAlpha: 1 };
        if (pos.left !== undefined) toVars.left = `${pos.left}%`;
        if (pos.right !== undefined) toVars.right = `${pos.right}%`;
        if (pos.bottom !== undefined) toVars.bottom = `${pos.bottom}%`;

        tl.to(`.${pos.id}`, toVars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Grafiikkaa uudella tasolla. Anna pelin viedä.</h2>

      <div className="wrapper">
        {performanceImages.map(({ id, src }) => (
          <img key={id} src={src} className={id} alt={id} />
        ))}
      </div>

      <div className="content">
        <p>
          Hoida graafisesti vaativimmatkin työnkulut reaktiivisuudella, joka
          vastaa luovuutesi nopeuteen. M4-siruperheen näytönohjaimessa on toisen
          sukupolven laitteistokiihdytetty säteenseuranta, joka renderöi kuvat
          entistä nopeammin{" "}
          <span className="text-white">
            tehden pelaamisesta immersiivisempää ja realistisempaa kuin koskaan.
          </span>{" "}
          Dynamic Caching optimoi sirun nopean muistin käytön ja nostaa
          näytönohjaimen keskimääräistä käyttöastetta huomattavasti.
        </p>
      </div>
    </section>
  );
};

export default Performance;
