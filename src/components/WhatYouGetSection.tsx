import { Check, Zap } from "lucide-react";

const items = [
  "Mapa da Aprovação OAB • edição 48",
  "Apostila visual em PDF, organizada por disciplina e assunto",
  "140 páginas para estudar, revisar e aplicar",
  "Fundamentos de 7 disciplinas do exame",
  "Índice para localizar rapidamente os temas",
  "Unidades curtas com explicações e exemplos",
  "Mapas mentais dos principais conteúdos jurídicos",
  "Comparativos entre conceitos parecidos",
  "Artigos de lei organizados por assunto",
  "Súmulas e entendimentos importantes",
  "Classificações, requisitos e elementos essenciais",
  "Exceções e pontos de atenção",
  "Fluxos e procedimentos apresentados em etapas",
  "Exemplos jurídicos para facilitar a aplicação",
  "Acesso vitalício para estudar no seu ritmo",
];

const WhatYouGetSection = () => {
  return (
    <section
      className="py-[40px] md:py-[70px] px-5 md:px-[60px]"
      style={{ backgroundColor: "hsl(var(--lp-light))" }}
    >
      <div className="w-full max-w-[680px] mx-auto text-center">
        <h2
          className="text-[30px] md:text-[40px] leading-[1.05] mb-5 md:mb-6"
          style={{
            fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
            fontWeight: 800,
            color: "hsl(var(--lp-green-deep))",
          }}
        >
          TUDO O QUE <span style={{ color: "hsl(var(--lp-title-accent))" }}>VOCÊ VAI RECEBER</span>
        </h2>

        <div
          className="inline-flex items-center gap-2 rounded-full px-5 h-[38px] md:h-[42px] mb-6 md:mb-7"
          style={{ backgroundColor: "hsl(var(--lp-lime))" }}
        >
          <Zap
            className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] flex-shrink-0"
            style={{ color: "hsl(var(--lp-black))" }}
            fill="currentColor"
            aria-hidden="true"
          />
          <span
            className="text-[15px] md:text-[18px] font-extrabold"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              color: "hsl(var(--lp-black))",
            }}
          >
            ACESSO IMEDIATO
          </span>
        </div>

        <div
          className="rounded-[22px] p-5 md:p-7 mb-6 md:mb-8"
          style={{
            backgroundColor: "hsl(var(--lp-green-pale))",
            border: "1px solid hsl(var(--lp-white) / 0.15)",
            boxShadow: "0 12px 30px hsl(var(--lp-black) / 0.22)",
          }}
        >
          <h3
            className="text-[22px] md:text-[28px] leading-[1.1] mb-5 md:mb-6"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 800,
              color: "hsl(var(--lp-white))",
            }}
          >
            Acesso imediato ao material completo
          </h3>

          <div className="mb-6 md:mb-7 flex items-center justify-center rounded-[18px] overflow-hidden">
            <img
              src="/produto-oab/mapa-aprovacao-oab-completo.png"
              alt="Mapa da Aprovação OAB — material completo"
              className="w-full max-w-[520px] h-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="text-left space-y-3 md:space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check
                  className="w-[20px] h-[20px] md:w-[22px] md:h-[22px] flex-shrink-0 mt-0.5"
                  style={{ color: "hsl(var(--lp-lime))" }}
                  strokeWidth={3}
                />
                <span
                  className="text-[16px] md:text-[20px] leading-[1.45]"
                  style={{
                    fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                    fontWeight: 500,
                    color: "hsl(var(--lp-white) / 0.95)",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p
            className="text-[20px] md:text-[24px] font-extrabold mt-6 md:mt-7"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              color: "hsl(var(--lp-lime))",
            }}
          >
            ESTUDE, REVISE E CONFIRA
          </p>

          <button
            className="group w-full mt-6 md:mt-7 inline-flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 px-8 h-[55px] md:h-[62px]"
            style={{
              backgroundColor: "hsl(var(--lp-lime))",
              borderRadius: "50px",
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 700,
              color: "hsl(var(--lp-black))",
              letterSpacing: "0.5px",
              boxShadow: "0 4px 0 hsl(var(--lp-lime-shadow)), 0 8px 25px hsl(0 0% 0% / 0.3)",
            }}
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-[16px] md:text-[21px]">
              QUERO RECEBER MEU MAPA DA APROVAÇÃO
            </span>
            <span className="text-[18px] md:text-[24px]">→</span>
          </button>

          <p
            className="text-[14px] md:text-[17px] mt-4"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 500,
              color: "hsl(var(--lp-white) / 0.8)",
            }}
          >
            Você recebe o acesso após a confirmação do pagamento diretamente no seu WhatsApp e no seu e-mail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;

