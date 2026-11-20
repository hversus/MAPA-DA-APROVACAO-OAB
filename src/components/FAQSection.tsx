import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como recebo o Mapa da Aprovação OAB?",
    answer: "O acesso é enviado logo após a confirmação do pagamento, diretamente no seu WhatsApp e no seu e-mail. O material é digital em PDF e você poderá baixar e visualizar a apostila.",
  },
  {
    question: "Consigo encontrar rapidamente o assunto que preciso revisar?",
    answer: "Sim. A apostila possui um índice para localizar rapidamente os temas, com unidades organizadas por disciplina e assunto para você ir direto ao conteúdo que precisa revisar.",
  },
  {
    question: "O material ensina os assuntos ou traz apenas tópicos?",
    answer: "O material apresenta explicações visuais, textos curtos, comparativos, classificações, fluxos e exemplos jurídicos. Portanto, você acompanha o raciocínio e não recebe apenas uma lista de tópicos.",
  },
  {
    question: "O material apresenta artigos de lei, súmulas e exceções?",
    answer: "Sim. Os artigos de lei são organizados por assunto, com súmulas, entendimentos importantes, exceções e pontos de atenção para facilitar a revisão.",
  },
  {
    question: "O material mostra as diferenças entre conceitos jurídicos?",
    answer: "Sim. A apostila traz comparativos e explicações visuais para ajudar você a diferenciar conceitos jurídicos parecidos e entender como aplicar cada conteúdo.",
  },
  {
    question: "Consigo acompanhar os fluxos e procedimentos em etapas?",
    answer: "Sim. Os fluxos e procedimentos são apresentados em etapas, com setas, classificações e exemplos jurídicos para acompanhar a sequência e revisar de forma mais objetiva.",
  },
  {
    question: "O material é organizado por disciplinas?",
    answer: "Sim. O conteúdo reúne fundamentos de 7 disciplinas do exame e organiza os assuntos em unidades curtas para facilitar a localização e a revisão.",
  },
  {
    question: "Serve para bacharéis que estão se preparando para a OAB?",
    answer: "Sim. O material foi desenvolvido para estudantes de Direito, bacharéis e candidatos à OAB que querem organizar a revisão e entender os assuntos da prova.",
  },
  {
    question: "Serve para estudantes de Direito?",
    answer: "Sim. As explicações visuais, os comparativos e os exemplos jurídicos ajudam estudantes de Direito a compreender, revisar e aplicar os principais conteúdos apresentados.",
  },
  {
    question: "A apostila esgota o edital ou garante a aprovação?",
    answer: "Não. A apostila apresenta fundamentos e exemplos selecionados de 7 disciplinas, mas não esgota o edital nem garante aprovação. A preparação deve considerar o edital, as normas e os comunicados oficiais da prova.",
  },
  {
    question: "Quanto tempo leva para receber o material?",
    answer: "O acesso é imediato. Assim que o pagamento for confirmado, você recebe o material diretamente no seu WhatsApp e no seu e-mail.",
  },
  {
    question: "Posso imprimir o PDF?",
    answer: "Sim. Você poderá imprimir as páginas que desejar e estudar ou revisar os assuntos no formato que for mais conveniente para você.",
  },
  {
    question: "O material possui garantia?",
    answer: "Sim. Você terá 15 dias para acessar e avaliar o material. Caso a apostila não ajude você a localizar os assuntos, compreender as explicações e revisar os conteúdos apresentados, basta solicitar o reembolso dentro do prazo da garantia.",
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      className="py-[25px] md:py-[50px] px-5 md:px-[60px]"
      style={{ backgroundColor: 'hsl(var(--lp-light))' }}
    >
      <div className="w-full max-w-[800px] mx-auto">
        <div className="text-center mb-[30px] md:mb-[40px]">
          <h2 
            className="text-[28px] md:text-[42px]"
            style={{ 
              fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
              fontWeight: 700,
              color: 'hsl(var(--lp-black))'
            }}
          >
            Perguntas Frequentes
          </h2>
          <p
            className="mt-3 text-[16px] md:text-[20px]"
            style={{
              fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
              fontWeight: 400,
              color: 'hsl(var(--lp-muted))'
            }}
          >
            Tire suas dúvidas antes de garantir o seu material
          </p>
        </div>
        
        <div className="space-y-[10px]">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-[14px] overflow-hidden transition-all duration-300"
              style={{ 
                backgroundColor: 'hsl(var(--lp-white))',
                boxShadow: openIndex === index 
                  ? '0 8px 25px hsl(var(--lp-dark) / 0.12)' 
                  : '0 2px 10px hsl(var(--lp-dark) / 0.06)',
                border: '1px solid hsl(var(--lp-accent) / 0.12)'
              }}
            >
              <button
                type="button"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-[16px] md:p-[18px] text-left cursor-pointer"
              >
                <span 
                  className="text-[16px] md:text-[20px] pr-4"
                  style={{ 
                    fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
                    fontWeight: 600,
                    color: 'hsl(var(--lp-black))'
                  }}
                >
                  {faq.question}
                </span>
                
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: openIndex === index ? 'hsl(var(--lp-lime))' : 'hsl(var(--lp-accent) / 0.1)',
                  }}
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" style={{ color: 'hsl(var(--lp-black))' }} strokeWidth={3} />
                  ) : (
                    <Plus className="w-4 h-4" style={{ color: 'hsl(var(--lp-accent))' }} strokeWidth={3} />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-[16px] md:px-[18px] pb-[16px] md:pb-[18px]">
                  <p
                    className="text-[15px] md:text-[17px] leading-relaxed"
                    style={{
                      fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
                      fontWeight: 400,
                      color: 'hsl(var(--lp-muted))'
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-[40px]">
          <button
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center justify-center gap-3 px-8 md:px-10 h-[55px] md:h-[60px] rounded-full transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'hsl(var(--lp-lime))',
              fontFamily: 'Montserrat, Inter, Lato, system-ui, sans-serif',
              fontWeight: 700,
              color: 'hsl(var(--lp-black))',
              boxShadow: '0 4px 0 hsl(var(--lp-lime-shadow)), 0 8px 25px hsl(0 0% 0% / 0.15)',
            }}
          >
            <span className="text-[16px] md:text-[20px]">SIM, QUERO MEU MAPA DA APROVAÇÃO AGORA! →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
