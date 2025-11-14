import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, whatsappInfo } from '../data/content';

const Section4: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappInfo.phone}?text=${encodeURIComponent(whatsappInfo.message)}`;
    window.open(url, '_blank');
  };

  // Animação para os cards
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
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">
            {aboutData.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {aboutData.description}
          </p>
        </motion.div>

        {/* Missão */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData.mission}
            </p>
          </div>
        </motion.div>

        {/* Nossos Dentistas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary-600 mb-12">
            Nossa Equipe
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aboutData.dentists.map((dentist, index) => (
              <motion.div
                key={dentist.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                {/* Avatar Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {dentist.name.split(' ')[1].charAt(0)}
                </div>
                
                <h4 className="text-xl font-bold text-primary-700 mb-2">
                  {dentist.name}
                </h4>
                <p className="text-accent-600 font-semibold mb-4">
                  {dentist.specialty}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {dentist.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nossos Valores */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-primary-600 mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((value, index) => (
              <motion.div
                key={value.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-primary-50 rounded-2xl p-6 text-center hover:bg-primary-100 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-primary-700 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Começar Sua Jornada?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Agende sua consulta e dê o primeiro passo em direção ao sorriso dos seus sonhos
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#ffffff",
              color: "#2D3748"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="bg-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white"
          >
            Agendar consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;