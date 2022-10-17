import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="nav-header">
        <div className="nav-bounds">
          <a className="nav-logo">
            Mercado Libre Chile - Donde comprar y vender de todo
          </a>

          <form className="nav-search">
            <input
              type="text"
              className="nav-search-input"
              placeholder="Buscar productos, marcas y más…"
              maxLength="120"
            />
          </form>

          <nav id="nav-header-menu">
            <Link to="/profile">Perfil</Link>
            <Link to="/">Mis compras</Link>
          </nav>
        </div>
      </header>
    </>
  );
};
