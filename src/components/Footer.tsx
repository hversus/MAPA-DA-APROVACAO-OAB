const Footer = () => {
  return (
    <footer 
      className="py-[30px] px-5 md:px-[60px] mt-[40px]"
      style={{ backgroundColor: 'hsl(var(--lp-card-black))' }}
    >
      <div className="w-full max-w-4xl mx-auto text-center space-y-[14px]">
        <p 
          className="text-[14px] leading-[1.8]"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            fontWeight: 400,
            color: 'hsl(var(--lp-subtle))'
          }}
        >
          Copyright © 2026 · Todos os direitos reservados.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          Este é um material educacional independente e não possui vínculo, autorização, parceria ou endosso da Ordem dos Advogados do Brasil, da Fundação Getulio Vargas ou de qualquer outra instituição mencionada.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          A apostila apresenta fundamentos e exemplos selecionados de 7 disciplinas do exame. Não esgota o edital nem garante aprovação. A preparação deve considerar o edital, as normas e os comunicados oficiais da prova.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          Conteúdo elaborado com apoio de inteligência artificial, sem revisão técnica independente. As imagens de pessoas e os mockups são ilustrativos; o produto entregue é digital em PDF.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          Este site não possui qualquer vínculo com Facebook™, Instagram™, Google™ ou qualquer outra plataforma mencionada.
        </p>

        <p 
          className="text-[13px] leading-[1.6] max-w-2xl mx-auto"
          style={{ 
            fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
            color: 'hsl(var(--lp-muted) / 0.7)'
          }}
        >
          A reprodução não autorizada, total ou parcial, por qualquer meio, constitui violação de direitos autorais e pode resultar em sanções civis e criminais, de acordo com a legislação aplicável.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
