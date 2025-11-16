import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData, whatsappInfo } from '../data/content';
import Button from '../ui/Button';

const Section3: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappInfo.phone}?text=${encodeURIComponent(whatsappInfo.message)}`;
    window.open(url, '_blank');
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1 mb-3">
        {[...Array(5)].map((_, index) => (
          <motion.svg
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </motion.svg>
        ))}
      </div>
    );
  };

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-600 mb-6">
            O que Nossos Pacientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Confira as experiências reais de quem já transformou seu sorriso na Elleva
          </p>
        </motion.div>

        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {renderStars(testimonial.rating)}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-primary-700">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="text-2xl">😊</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.slice(3, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 3) * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {renderStars(testimonial.rating)}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-primary-700">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {new Date(testimonial.date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="text-2xl">⭐</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                {renderStars(testimonialsData[currentTestimonial].rating)}
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonialsData[currentTestimonial].comment}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-primary-700">
                      {testimonialsData[currentTestimonial].name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {new Date(testimonialsData[currentTestimonial].date).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                  <div className="text-2xl">😊</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
              >
                ‹
              </button>
              <div className="flex items-center space-x-2">
                {testimonialsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
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