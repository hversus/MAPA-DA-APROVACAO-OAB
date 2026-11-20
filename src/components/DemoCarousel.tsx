const DemoCarousel = () => {
  const items = [
    "Diferenças entre conceitos jurídicos parecidos",
    "Classificações, requisitos e elementos essenciais",
    "Artigos de lei organizados por assunto",
    "Súmulas, exceções e pontos de atenção",
    "Fluxos processuais apresentados em etapas",
    "Exemplos jurídicos para aplicar o conteúdo",
  ];

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


      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-5">
        {items.map((item) => (
          <div key={item} className="rounded-[16px] p-5 text-center" style={{ backgroundColor: "hsl(var(--lp-green-pale))" }}>
            <p className="text-[16px] md:text-[20px] leading-[1.35]" style={{ fontFamily: "Montserrat, Inter, Lato, system-ui, sans-serif", fontWeight: 700, color: "hsl(var(--lp-white))" }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DemoCarousel;
