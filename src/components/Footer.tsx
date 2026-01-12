import React from "react";
import { footerLinks } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="info">
        <p>
          {" "}
          Etsi Apple Store tai muu jälleenmyyjä läheltäsi. Tai soita meille.
        </p>
        <img src="/logo.svg" alt="Apple Logo" />
      </div>

      <hr />

      <div className="links">
        <p>Tekijänoikeudet © 2024 Apple Inc. Kaikki oikeudet pidätetään.</p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
