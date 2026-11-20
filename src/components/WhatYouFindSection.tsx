import checkMark from "@/assets/check-mark.svg";

const items = [
  {
    title: "Assuntos organizados para você se localizar",
    description:
      "Abra o índice, encontre a disciplina e vá direto ao tema que precisa estudar. A estrutura relaciona os assuntos às páginas e facilita a localização dos conceitos, artigos, súmulas, exceções e procedimentos necessários para continuar sua preparação.",
  },
  {
    title: "Explicações que você acompanha visualmente",
    description:
      "Entenda conceitos jurídicos com textos curtos, setas, ícones, classificações e comparativos. Veja as diferenças entre temas parecidos e acompanhe as relações entre regras, exceções e aplicações práticas em uma sequência mais fácil de revisar.",
  },
  {
    title: "Exemplos jurídicos em etapas",
    description:
      "Acompanhe como os conceitos aparecem nas situações apresentadas e como identificar a resposta adequada. Refaça os exemplos, observe os elementos do caso e entenda como aplicar os artigos, classificações e procedimentos estudados.",
  },
  {
    title: "Revisão dos pontos que precisam de reforço",
    description:
      "Confira os conteúdos que já revisou, identifique os assuntos que ainda geram dúvidas e organize as próximas retomadas. Use o material para conectar conceitos e revisar de forma mais objetiva.",
  },
];

const WhatYouFindSection = () => {
  return (
    <section
      className="py-[40px] md:py-[70px] px-5 md:px-[60px]"
      style={{ backgroundColor: "hsl(var(--lp-green-pale))" }}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-[30px] md:mb-[50px]">
          <h2
            className="text-[26px] md:text-[38px] leading-tight"
            style={{
              fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif",
              fontWeight: 700,
              color: "hsl(var(--lp-white))",
            }}
          >
            O que você encontra no Mapa da Aprovação OAB
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
          <div
            className="w-full rounded-[16px] overflow-hidden"
            style={{ backgroundColor: "hsl(var(--lp-white))" }}
          >
            <img
              src="/produto-oab/Gemini_Generated_Image_daoac3daoac3daoa-720.webp"
              srcSet="/produto-oab/Gemini_Generated_Image_daoac3daoac3daoa-720.webp 720w, /produto-oab/Gemini_Generated_Image_daoac3daoac3daoa.webp 1109w"
              sizes="(max-width: 767px) calc(100vw - 40px), 50vw"
              alt="Pessoa apresentando o Mapa da Aprovação OAB"
              className="w-full h-auto object-contain"
              width={720}
              height={1396}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-[16px] p-5 md:p-6"
                style={{
                  backgroundColor: "hsl(var(--lp-white))",
                  boxShadow: "0 4px 20px hsl(var(--lp-dark) / 0.08)",
                  border: "1px solid hsl(var(--lp-dark) / 0.06)",
                }}
              >
                <img
                  src={checkMark}
                  alt=""
                  aria-hidden="true"
                  className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3
                    className="text-[16px] md:text-[18px] mb-1.5"
                    style={{
                      fontFamily:
                        "Montserrat, Inter, Lato, system-ui, sans-serif",
                      fontWeight: 700,
                      color: "hsl(var(--lp-dark))",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[15px] md:text-[19px] leading-[1.5]"
                    style={{
                      fontFamily:
                        "Montserrat, Inter, Lato, system-ui, sans-serif",
                      fontWeight: 500,
                      color: "hsl(var(--lp-dark) / 0.75)",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouFindSection;

