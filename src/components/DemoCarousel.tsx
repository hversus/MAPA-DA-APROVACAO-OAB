import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const items = [
  "Diferenças entre conceitos jurídicos parecidos",
  "Classificações, requisitos e elementos essenciais",
  "Artigos de lei organizados por assunto",
  "Súmulas, exceções e pontos de atenção",
  "Fluxos processuais apresentados em etapas",
  "Exemplos jurídicos para aplicar o conteúdo",
];

const DemoCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="py-[50px] md:py-[90px] px-0 overflow-hidden"
      style={{ backgroundColor: "hsl(var(--lp-white))" }}
    >
      <div className="text-center mb-[24px] md:mb-[44px] px-5 max-w-3xl mx-auto">
        <h2
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

      <div className="relative w-full max-w-[560px] mx-auto px-5">
        <div
          className="relative rounded-[22px] p-3 md:p-5"
          style={{
            backgroundColor: "hsl(var(--lp-green-deep))",
            boxShadow: "0 18px 45px hsl(var(--lp-black) / 0.22)",
          }}
        >
          <img
            src={activeSlide.src}
            alt={activeSlide.alt}
            className="block w-full h-auto rounded-[14px]"
          />

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Ver página anterior"
            className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105"
            style={{
              backgroundColor: "hsl(var(--lp-lime))",
              color: "hsl(var(--lp-black))",
              boxShadow: "0 4px 14px hsl(var(--lp-black) / 0.25)",
            }}
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={3} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Ver próxima página"
            className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105"
            style={{
              backgroundColor: "hsl(var(--lp-lime))",
              color: "hsl(var(--lp-black))",
              boxShadow: "0 4px 14px hsl(var(--lp-black) / 0.25)",
            }}
          >
            <ChevronRight className="w-6 h-6" strokeWidth={3} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-5" role="tablist" aria-label="Páginas em destaque">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-label={`Ir para ${slide.alt}`}
              aria-selected={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className="h-2.5 rounded-full transition-all duration-200"
              style={{
                width: activeIndex === index ? "28px" : "10px",
                backgroundColor: activeIndex === index
                  ? "hsl(var(--lp-lime-shadow))"
                  : "hsl(var(--lp-accent) / 0.35)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-5 mt-10 md:mt-14">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[16px] p-5 text-center"
            style={{ backgroundColor: "hsl(var(--lp-green-pale))" }}
          >
            <p
              className="text-[16px] md:text-[20px] leading-[1.35]"
              style={{
                fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                fontWeight: 700,
                color: "hsl(var(--lp-white))",
              }}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoCarousel;
