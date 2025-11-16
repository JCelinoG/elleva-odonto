import React from 'react';
import { motion } from 'framer-motion';
import { servicesData, whatsappInfo } from '../data/content';
import Button from '../ui/Button';

const Section1: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappInfo.phone}?text=${encodeURIComponent(whatsappInfo.message)}`;
    window.open(url, '_blank');
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

 return (
  <section 
    id="areas" 
    className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 lg:pt-0" /* Adicionei pt-20 para mobile */
    style={{ backgroundColor: '#c3c4c4' }}
  >
      {/* Elementos decorativos de luxo */}
      <div className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-luxury-gold opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-luxury-gold opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna do Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            {/* Slogan Principal com fonte luxuosa */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-luxury-dark mb-6 leading-tight"
            >
              Onde o seu sorriso encontra{' '}
              <span className="text-primary-600">confiança</span>,{' '}
              <span className="text-primary-600">cuidado</span> e{' '}
              <span className="text-primary-600">carinho</span>.
            </motion.h1>

            {/* Nome da Clínica com detalhe luxuoso */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6 relative"
            >
              <div className="w-16 h-0.5 bg-luxury-gold mx-auto lg:mx-0 mb-3"></div>
              <h2 className="text-2xl md:text-3xl text-primary-600 font-serif font-semibold">
                Elleva Clínica Odontológica
              </h2>
            </motion.div>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl font-sans"
            >
              Cuidamos da sua saúde bucal em todas as fases da sua vida, com atendimento acolhedor e resultados que transformam sua autoestima.
            </motion.p>

            {/* Botões CTA com toque premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppClick}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary-600 flex items-center space-x-2"
              >
                <span>Agendar consulta</span>
                <span className="text-luxury-gold">✦</span>

              </motion.button>
              
            </motion.div>
          </motion.div>

          {/* Coluna da Imagem com moldura luxuosa */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Imagem Principal */}
              <img 
                src="/images/0G0A3904.jpg" 
                alt="Elleva Clínica Odontológica - Ambiente moderno e acolhedor"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 to-transparent"></div>
            </div>
            
            {/* Elemento decorativo de luxo */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -45 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 w-20 h-20 bg-luxury-gold rounded-lg flex items-center justify-center text-white text-2xl shadow-xl"
            >
              ✦
            </motion.div>
          </motion.div>
        </div>

        {/* Áreas de Atuação com design premium */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 bg-white rounded-3xl shadow-2xl border border-gray-100"
        >
          <div className="px-8">
            <div className="text-center mb-12">
              <div className="w-12 h-0.5 bg-luxury-gold mx-auto mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-600 mb-4">
                Áreas de Atuação
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
                Especialidades que cuidam do seu sorriso com excelência e tecnologia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
              {servicesData.map((service, index) => (
                <motion.div
                  key={service.title}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group hover:border-primary-200 relative overflow-hidden"
                >
                  {/* Linha decorativa */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-luxury-gold"></div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-primary-700 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-sans">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Botão CTA Final com toque premium */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center pb-8"
            >
               <Button variant="primary">
                Agendar consulta
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section1;