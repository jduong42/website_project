import React from "react";
import { navItems } from "../constants/";

const NavBar: React.FC = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" />

        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
