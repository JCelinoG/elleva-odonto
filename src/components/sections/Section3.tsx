import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappInfo } from '../data/content';
import Button from '../ui/Button';

const Section3: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappInfo.phone}?text=${encodeURIComponent(whatsappInfo.message)}`;
    window.open(url, '_blank');
  };

  // Array com os paths das imagens das avaliações
  const avaliacoes = Array.from({ length: 9 }, (_, i) => 
    `/images/avaliacoes/avaliacao${i + 1}.png`
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === avaliacoes.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? avaliacoes.length - 1 : prev - 1
    );
  };

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying]);

  const slideVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const desktopSlideVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  // Para desktop: mostra 3 imagens por vez
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % avaliacoes.length;
      slides.push(avaliacoes[index]);
    }
    return slides;
  };

  return (
    <section 
      id="depoimentos" 
      className="py-20 bg-gradient-to-br from-primary-50 to-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-700 mb-6">
            Avaliações dos Nossos Pacientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Confira as avaliações reais do Google Meu Negócio de quem já transformou seu sorriso na Elleva
          </p>
        </motion.div>

        {/* Desktop - Carrossel com 3 imagens */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                {getVisibleSlides().map((avaliacao, index) => (
                  <motion.div
                    key={`${avaliacao}-${currentSlide}`}
                    variants={desktopSlideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="aspect-[19/9] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img 
                        src={avaliacao} 
                        alt={`Avaliação ${currentSlide + index + 1}`}
                        className="w-full h-full object-contain max-h-48"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Controles Desktop */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-primary-700 text-white hover:bg-primary-600 transition-colors shadow-lg"
              >
                ‹
              </button>
              <div className="flex items-center space-x-2">
                {avaliacoes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary-700' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-primary-700 text-white hover:bg-primary-600 transition-colors shadow-lg"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Mobile - Carrossel com 1 imagem */}
        <div className="lg:hidden">
          <div className="relative max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="aspect-[19/9] rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                  <img 
                    src={avaliacoes[currentSlide]} 
                    alt={`Avaliação ${currentSlide + 1}`}
                    className="w-full h-full object-contain max-h-40"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controles Mobile */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg"
              >
                ‹
              </button>
              <div className="flex items-center space-x-2">
                {avaliacoes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-primary-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors shadow-lg"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
            Junte-se aos nossos pacientes satisfeitos e descubra a experiência Elleva
          </p>
          <Button variant="primary">
            Agendar consulta
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;