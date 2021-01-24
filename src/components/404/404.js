import React from "react";

const NotFound = () => (
    <section className="notFound">
        <h2 className="title-404">404</h2>
        <p className="text-404">Pagina nao encontrada.Desculpa pelo incômodo.</p>
        <svg className="blob-404" viewBox="-70 -90 150 150" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lgrad" x1="50%" y1="100%" x2="50%" y2="0%" >
              <stop offset="0%" stopColor="rgb(255, 161, 238)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(189, 161, 255)" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path fill="url(#lgrad)"/>
        </svg>
    </section>
);

export default NotFound;