import { Zap, Smartphone } from "lucide-react";

const HeroSection = () => {
  const fontFamily = "Montserrat, Inter, Lato, system-ui, sans-serif";

  return (
    <section
      className="relative py-[30px] md:py-[50px] px-5 md:px-[60px] lg:px-[80px]"
      style={{ backgroundColor: "hsl(214 52% 30%)" }}
    >
      <div className="relative max-w-[920px] mx-auto z-10 flex flex-col items-center text-center">
        <h1
          className="text-[24px] xs:text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] leading-[1.08] mb-4"
          style={{
            fontFamily,
            fontWeight: 800,
            color: "hsl(var(--lp-white))",
          }}
        >
          MAPA DA APROVAÇÃO OAB
        </h1>

        <p
          className="max-w-[760px] text-[17px] md:text-[24px] lg:text-[27px] leading-[1.2] mb-4"
          style={{
            fontFamily,
            fontWeight: 800,
            color: "hsl(var(--lp-lime))",
          }}
        >
          ENCONTRE O ASSUNTO, ENTENDA A EXPLICAÇÃO E VEJA COMO APLICAR NOS EXEMPLOS PARA A PROVA
        </p>

        <div className="w-full flex items-center justify-center mb-6">
          <img
            src="/produto-oab/mockup-plano-completo-oab-2027-1-v2-700.webp"
            srcSet="/produto-oab/mockup-plano-completo-oab-2027-1-v2-700.webp 700w, /produto-oab/mockup-plano-completo-oab-2027-1-v2.webp 1254w"
            sizes="(max-width: 640px) calc(100vw - 40px), 600px"
            alt="Mapa da Aprovação OAB — Plano Completo com bônus"
            className="w-full max-w-[600px] h-auto object-contain"
            width={1254}
            height={1254}
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <p
          className="max-w-[700px] mb-6 text-[17px] md:text-[21px] lg:text-[23px] leading-[1.5]"
          style={{
            fontFamily,
            fontWeight: 500,
            color: "hsl(var(--lp-white) / 0.9)",
          }}
        >
          Os fundamentos de 7 disciplinas organizados em uma apostila visual de 140 páginas, com explicações por assunto, mapas mentais, comparativos, artigos de lei, súmulas, exceções, fluxos processuais e exemplos jurídicos. Você abre no celular, localiza o tema que precisa estudar e acompanha o raciocínio com setas, classificações e explicações em etapas. Edição OAB 48, para a prova de 10 de janeiro.
        </p>


        <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 h-[36px]"
            style={{
              backgroundColor: "hsl(var(--lp-white))",
              color: "hsl(var(--lp-black))",
              fontFamily,
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            <Zap className="w-[16px] h-[16px]" fill="currentColor" />
            Acesso imediato
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 h-[36px]"
            style={{
              backgroundColor: "hsl(var(--lp-white))",
              color: "hsl(var(--lp-black))",
              fontFamily,
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            <Smartphone className="w-[16px] h-[16px]" />
            100% digital
          </span>
        </div>

        <p
          className="text-[14px] md:text-[17px] text-center flex items-center justify-center flex-wrap gap-x-2 gap-y-1 mb-5"
          style={{
            fontFamily,
            fontWeight: 700,
            color: "hsl(var(--lp-white))",
          }}
        >
          <span className="w-full md:w-auto">Você recebe tudo na hora, direto no seu</span>
          <img src="/assets/icon-whatsapp.webp" alt="WhatsApp" className="w-[20px] h-[20px] inline-block" width={64} height={64} />
          <span>WhatsApp e no seu</span>
          <img src="/assets/icon-gmail.webp" alt="E-mail" className="w-[20px] h-[20px] inline-block" width={64} height={64} />
          <span>e-mail</span>
        </p>

        <button
          className="group inline-flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 px-8 h-[55px] md:h-[62px] mb-4"
          style={{
            backgroundColor: "hsl(var(--lp-lime))",
            borderRadius: "10px",
            fontFamily,
            fontWeight: 700,
            color: "hsl(var(--lp-black))",
            letterSpacing: "0.5px",
            boxShadow: "0 4px 0 hsl(var(--lp-lime-shadow)), 0 8px 25px hsl(0 0% 0% / 0.3)",
          }}
          onClick={() =>
            document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-[15px] md:text-[20px]">QUERO ACESSAR MEU MAPA DA APROVAÇÃO</span>
          <span className="text-[18px] md:text-[22px]">→</span>
        </button>

        <div className="flex flex-col items-center gap-2 mt-4">
          <img
            src="/assets/hero-avatars.webp"
            alt="Imagem ilustrativa de pessoas"
            className="h-[48px] md:h-[56px] w-auto object-contain"
            width={437}
            height={146}
          />
          <p
            className="text-[15px] md:text-[18px] text-center"
            style={{
              fontFamily,
              fontWeight: 800,
              color: "hsl(var(--lp-white))",
              letterSpacing: "0.5px",
            }}
          >
            ESTUDANTES DE DIREITO, BACHARÉIS E CANDIDATOS À OAB
          </p>
          <p
            className="text-[15px] md:text-[18px] text-center"
            style={{
              fontFamily,
              fontWeight: 800,
              color: "hsl(var(--lp-lime))",
              letterSpacing: "0.5px",
            }}
          >
            QUE QUEREM ORGANIZAR A REVISÃO E ENTENDER OS ASSUNTOS DA PROVA
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

