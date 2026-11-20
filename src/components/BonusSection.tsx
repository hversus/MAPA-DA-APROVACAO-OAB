import { Check } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";



const bonuses = [
  {
    number: 1,
    title: "Guia de Artigos, Súmulas e Prazos OAB",
    description:
      "Referências importantes reunidas por assunto para consultar durante a revisão. Localize o artigo, a súmula ou o prazo relacionado ao tema estudado e confira os principais pontos de atenção.",
    value: "R$17,90",
  },
  {
    number: 2,
    title: "Treino de Questões Comentadas",
    description:
      "Questões para colocar os conceitos em prática e conferir o raciocínio. Resolva antes de olhar a resposta, acompanhe a explicação e identifique se sua dificuldade está na interpretação, no conceito ou na aplicação da norma.",
    value: "R$19,90",
  },
  {
    number: 3,
    title: "Plano de Estudo de 25 Dias",
    description:
      "Uma sequência de estudo para distribuir os assuntos na reta final, alternando leitura, resolução de questões e retomada dos erros. Adapte as sessões à sua rotina e acompanhe as tarefas concluídas até o dia da prova.",
    value: "R$17,90",
  },
  {
    number: 4,
    title: "Registro de Erros e Revisões",
    description:
      "Fichas para anotar a questão, o assunto, o motivo do erro e o raciocínio correto. Organize as próximas revisões e acompanhe se conseguiu resolver novamente sem consultar a resposta.",
    value: "R$14,90",
  },
];

const BonusSection = () => {
  return (
    <section
      className="py-[40px] md:py-[70px] px-5 md:px-[60px]"
      style={{ backgroundColor: "hsl(var(--lp-green-pale))" }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-10">
          <p
            className="text-[18px] md:text-[24px] mb-3"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 500,
              color: "hsl(var(--lp-white) / 0.95)",
            }}
          >
            E não para por aí… você também recebe 4 bônus especiais
          </p>

          <p
            className="text-[18px] md:text-[24px] underline mb-4 md:mb-5"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 600,
              color: "hsl(var(--lp-danger))",
            }}
          >
            Inclusos na escolha do plano completo
          </p>

          <h2
            className="text-[28px] md:text-[40px] leading-[1.05]"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 800,
              color: "hsl(var(--lp-white))",
            }}
          >
            BÔNUS DISPONÍVEIS SOMENTE
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            <span style={{ color: "hsl(var(--lp-lime))" }}>NO PLANO COMPLETO</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {bonuses.map((bonus) => (
            <div
              key={bonus.number}
              className="rounded-[18px] overflow-hidden flex flex-col"
              style={{
                backgroundColor: "hsl(var(--lp-white))",
                boxShadow: "0 18px 50px hsl(var(--lp-black) / 0.4)",
                border: "1px solid hsl(var(--lp-white) / 0.08)",
              }}
            >
              <div
                className="aspect-[4/3] relative flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: "hsl(var(--lp-accent-light))" }}
              >
                <ImagePlaceholder label={`Mockup do Bônus #${bonus.number}`} className="w-full h-full" />




                <div
                  className="absolute top-3 left-3 inline-flex items-center justify-center rounded-full px-3.5 h-[28px]"
                  style={{ backgroundColor: "hsl(var(--lp-lime))" }}
                >
                  <span
                    className="text-[14px] md:text-[16px] font-extrabold"
                    style={{
                      fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                      color: "hsl(var(--lp-black))",
                    }}
                  >
                    BÔNUS #{bonus.number}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow text-left">
                <h3
                  className="text-[17px] md:text-[18px] leading-[1.15] mb-2"
                  style={{
                    fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                    fontWeight: 700,
                    color: "hsl(var(--lp-black))",
                  }}
                >
                  {bonus.title}
                </h3>

                <div className="flex items-start gap-2 mb-3">
                  <Check
                    className="w-[18px] h-[18px] flex-shrink-0 mt-0.5"
                    style={{ color: "hsl(var(--lp-check))" }}
                    strokeWidth={3}
                  />
                  <p
                    className="text-[15px] md:text-[18px] leading-[1.5]"
                    style={{
                      fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                      fontWeight: 500,
                      color: "hsl(var(--lp-black) / 0.75)",
                    }}
                  >
                    {bonus.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div
                    className="inline-flex items-center justify-center rounded-full px-4 h-[34px]"
                    style={{ backgroundColor: "hsl(var(--lp-lime))" }}
                  >
                    <span
                      className="text-[14px] md:text-[17px] font-extrabold"
                      style={{
                        fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                        color: "hsl(var(--lp-black))",
                      }}
                    >
                      Valor: {bonus.value} - GRÁTIS
                    </span>
                  </div>

                  <p
                    className="text-[14px] md:text-[16px] mt-3 leading-[1.3]"
                    style={{
                      fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
                      fontWeight: 700,
                      color: "hsl(var(--lp-danger))",
                    }}
                  >
                    BÔNUS INCLUSO APENAS
                    <br />
                    NO PLANO COMPLETO
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
