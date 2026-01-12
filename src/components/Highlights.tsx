import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { gsap } from "gsap";

const Highlights: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top top",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="highlights">
      <h2>Nyt on paras hetki päivittää uuteen.</h2>
      <h3>Tässä on mitä saat uudella MacBook Prolla.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Suoriudu vaativista tehtävistä jopa 9.8 kertaa nopeammin.</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              {" "}
              Upea <br />
              Liquid Retina XDR <br />
              -näyttö.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              {" "}
              Suunniteltu <br />
              <span>Apple Intelligence -ominaisuutta varten. </span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Jopa
              <span className="green-gradient"> 14 tuntia enemmän </span>
              akunkestoa.
              <span className="text-dark-100">(Yhteensä jopa 24 tuntia.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
