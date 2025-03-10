import React, { useState, useEffect } from 'react';
import { Code2, Rocket, ShoppingCart, CheckCircle, ChevronDown, Github, Linkedin, Twitter, Moon, Sun } from 'lucide-react';

type Plan = {
  title: string;
  price: string;
  features: string[];
  icon: React.ReactNode;
  cta: string;
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Nova Solicitação de Orçamento');
    const body = encodeURIComponent(`
      Nome: ${formData.name}
      Email: ${formData.email}
      Mensagem: ${formData.message}
    `);
    
    window.location.href = `mailto:renan.gcv.contato@gmail.com?subject=${subject}&body=${body}`;
    setIsModalOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const plans: Plan[] = [
    {
      title: "Site Simples",
      price: "R$ 197",
      features: [
        "1 página responsiva",
        "Design otimizado",
        "SEO básico",
        "Entrega em 5 dias",
        "1 revisão gratuita"
      ],
      icon: <Code2 className="w-8 h-8 text-blue-500" />,
      cta: "Começar Projeto Simples"
    },
    {
      title: "Site Moderado",
      price: "R$ 497",
      features: [
        "Até 2 páginas responsivas",
        "Design personalizado",
        "SEO avançado",
        "Entrega em 10 dias",
        "3 revisões gratuitas"
      ],
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      cta: "Escolher Plano Moderado"
    },
    {
      title: "Site Completo",
      price: "R$ 797",
      features: [
        "Site profissional completo",
        "Integração e-commerce",
        "SEO premium",
        "Entrega em 20 dias",
        "5 revisões gratuitas"
      ],
      icon: <ShoppingCart className="w-8 h-8 text-green-500" />,
      cta: "Iniciar Projeto Completo"
    }
  ];

  const faqs = [
    {
      question: "Qual o prazo de entrega?",
      answer: "O prazo varia de acordo com o plano escolhido, sendo 5 dias para sites simples, 10 dias para moderados e 20 dias para completos."
    },
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Iniciamos com uma reunião de briefing, seguida pelo desenvolvimento do layout, implementação e revisões até a aprovação final."
    },
    {
      question: "Posso personalizar os planos?",
      answer: "Sim! Todos os planos podem ser personalizados de acordo com suas necessidades específicas."
    },
    {
      question: "O site será responsivo?",
      answer: "Sim! Todos os sites são desenvolvidos com design responsivo, adaptando-se perfeitamente a diferentes dispositivos."
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "Empresário",
      content: "Superou todas as expectativas! Meu site ficou exatamente como eu imaginava.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    },
    {
      name: "Maria Santos",
      role: "Designer",
      content: "Profissionalismo e qualidade impressionantes. Recomendo totalmente!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors z-50"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">Transforme sua ideia em um site profissional!</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Desenvolvimento de websites modernos, responsivos e otimizados para seus objetivos
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-blue-600 dark:bg-gray-800 dark:text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            Solicitar Orçamento
          </button>
        </div>
      </header>

      {/* Plans Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Escolha o plano ideal para você</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-bold text-center mb-4 dark:text-white">{plan.title}</h3>
              <p className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold dark:text-white">{testimonial.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Perguntas Frequentes</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
              >
                <span className="font-semibold dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform dark:text-white ${
                    activeFaq === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {activeFaq === index && (
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Vamos criar algo incrível juntos?</h3>
              <p className="text-gray-400">Entre em contato e transforme sua ideia em realidade.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/RenanGCV" className="hover:text-blue-400 transition-colors" target='_blank'>
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/renan-teodoro-lopes-gon%C3%A7alves-804014221/" className="hover:text-blue-400 transition-colors" target='_blank'>
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://wa.me/5521999880830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-8">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Solicitar Orçamento</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  rows={4}
                  placeholder="Descreva seu projeto"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;