import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Como recebo o Mapa da Aprovação OAB?",
    answer: "",
  },
  {
    question: "Consigo encontrar rapidamente o assunto que preciso revisar?",
    answer: "",
  },
  {
    question: "O material ensina os assuntos ou traz apenas tópicos?",
    answer: "",
  },
  {
    question: "O material apresenta artigos de lei, súmulas e exceções?",
    answer: "",
  },
  {
    question: "O material mostra as diferenças entre conceitos jurídicos?",
    answer: "",
  },
  {
    question: "Consigo acompanhar os fluxos e procedimentos em etapas?",
    answer: "",
  },
  {
    question: "O material é organizado por disciplinas?",
    answer: "",
  },
  {
    question: "Serve para bacharéis que estão se preparando para a OAB?",
    answer: "",
  },
  {
    question: "Serve para estudantes de Direito?",
    answer: "",
  },
  {
    question: "A apostila esgota o edital ou garante a aprovação?",
    answer: "",
  },
  {
    question: "Quanto tempo leva para receber o material?",
    answer: "",
  },
  {
    question: "Posso imprimir o PDF?",
    answer: "",
  },
  {
    question: "O material possui garantia?",
    answer: "",
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

              {openIndex === index && faq.answer && (
                <div className="px-[16px] md:px-[18px] pb-[16px] md:pb-[18px]">
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
