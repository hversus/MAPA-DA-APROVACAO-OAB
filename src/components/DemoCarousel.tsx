const slides = [
  {
    src: "/oab-destaques-webp/01-pagina-001-poder-constituinte.webp",
    alt: "Página 1 — Poder Constituinte",
  },
  {
    src: "/oab-destaques-webp/02-pagina-004-direito-igualdade.webp",
    alt: "Página 4 — Direito à Igualdade",
  },
  {
    src: "/oab-destaques-webp/03-pagina-008-direitos-politicos.webp",
    alt: "Página 8 — Direitos Políticos",
  },
  {
    src: "/oab-destaques-webp/04-pagina-035-aviso-previo.webp",
    alt: "Página 35 — Aviso Prévio",
  },
  {
    src: "/oab-destaques-webp/05-pagina-047-erro-proibicao.webp",
    alt: "Página 47 — Erro de Proibição",
  },
  {
    src: "/oab-destaques-webp/06-pagina-067-suspensao-credito-tributario.webp",
    alt: "Página 67 — Suspensão da Exigibilidade do Crédito Tributário",
  },
  {
    src: "/oab-destaques-webp/07-pagina-083-inscricao-oab.webp",
    alt: "Página 83 — Inscrição na OAB",
  },
  {
    src: "/oab-destaques-webp/08-pagina-092-prerrogativas-advogado.webp",
    alt: "Página 92 — Direitos e Prerrogativas do Advogado",
  },
  {
    src: "/oab-destaques-webp/09-pagina-107-processo-conhecimento-trabalhista.webp",
    alt: "Página 107 — Processo de Conhecimento do Trabalho",
  },
  {
    src: "/oab-destaques-webp/10-pagina-138-procedimento-comum-sumario.webp",
    alt: "Página 138 — Procedimento Comum Sumário",
  },
];

const DemoCarousel = () => {
  const renderGroup = (duplicate = false) => (
    <div className="oab-carousel-group" aria-hidden={duplicate}>
      {slides.map((slide) => (
        <div className="oab-carousel-card" key={`${duplicate ? "duplicate-" : ""}${slide.src}`}>
          <img
            src={slide.src}
            alt={duplicate ? "" : slide.alt}
            className="block w-full h-auto rounded-[16px]"
            loading={duplicate ? "lazy" : "eager"}
            decoding="async"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section
      className="oab-carousel-section py-[50px] md:py-[90px] px-0 overflow-hidden"
      style={{ backgroundColor: "hsl(var(--lp-white))" }}
      aria-labelledby="oab-carousel-title"
    >
      <style>{`
        .oab-carousel-section {
          --oab-carousel-gap: 0px;
          --oab-carousel-card-width: 95vw;
        }

        .oab-carousel-viewport {
          width: 100%;
          overflow: hidden;
        }

        .oab-carousel-track {
          display: flex;
          width: max-content;
          animation: oab-carousel-marquee 48s linear infinite;
          will-change: transform;
        }

        .oab-carousel-group {
          display: flex;
          flex: 0 0 calc((var(--oab-carousel-card-width) * 10) + (var(--oab-carousel-gap) * 9));
          gap: var(--oab-carousel-gap);
          align-items: center;
        }

        .oab-carousel-card {
          flex: 0 0 var(--oab-carousel-card-width);
          min-width: 0;
          padding: 0 8px;
          box-sizing: border-box;
          scroll-snap-align: center;
        }

        .oab-carousel-card img {
          box-shadow: 0 12px 30px hsl(var(--lp-black) / 0.14);
        }

        @keyframes oab-carousel-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @media (min-width: 640px) {
          .oab-carousel-section { --oab-carousel-card-width: 70vw; }
        }

        @media (min-width: 768px) {
          .oab-carousel-section { --oab-carousel-card-width: 55vw; }
        }

        @media (min-width: 1024px) {
          .oab-carousel-section { --oab-carousel-card-width: 40vw; }
        }

        @media (max-width: 639px) {
          .oab-carousel-viewport {
            overflow-x: hidden;
            overflow-y: hidden;
          }

          .oab-carousel-section { --oab-carousel-card-width: 92vw; }

          .oab-carousel-track {
            width: max-content;
            animation: oab-carousel-marquee 48s linear infinite;
          }

          .oab-carousel-group {
            flex: 0 0 calc((var(--oab-carousel-card-width) * 10) + (var(--oab-carousel-gap) * 9));
          }

          .oab-carousel-group[aria-hidden="true"] {
            display: flex;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .oab-carousel-track {
            animation-play-state: paused;
          }
        }
      `}</style>

      <div className="text-center mb-[24px] md:mb-[44px] px-5 max-w-3xl mx-auto">
        <h2
          id="oab-carousel-title"
          className="text-[26px] md:text-[40px] leading-[1.15] mb-4"
          style={{
            fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
            fontWeight: 800,
            color: "hsl(var(--lp-black))",
          }}
        >
          Veja como estudar os assuntos da OAB com explicações visuais e exemplos jurídicos
        </h2>
      </div>

      <div
        className="oab-carousel-viewport"
        role="region"
        aria-label="Páginas de demonstração do Mapa da Aprovação OAB"
      >
        <div className="oab-carousel-track">
          {renderGroup()}
          {renderGroup(true)}
        </div>
      </div>
    </section>
  );
};

export default DemoCarousel;

