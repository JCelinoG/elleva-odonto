import React from 'react';
import { motion } from 'framer-motion';
import { proceduresData, whatsappInfo } from '../data/content';

const Section2: React.FC = () => {
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

  // Animação para o container principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="procedimentos" className="py-20 bg-white">
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
            Procedimentos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tratamentos especializados com tecnologia de ponta e cuidado humanizado para transformar seu sorriso
          </p>
        </motion.div>

        {/* Grid de Procedimentos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {proceduresData.map((procedure, index) => (
            <motion.div
              key={procedure.title}
              custom={index}
              variants={cardVariants}
              className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 group"
            >
              <div className="flex items-start space-x-6">
                {/* Ícone */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl group-hover:bg-accent-50 transition-colors duration-300"
                >
                  {procedure.icon}
                </motion.div>
                
                {/* Conteúdo */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-700 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                    {procedure.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {procedure.description}
                  </p>
                </div>
              </div>
              
              {/* Linha decorativa */}
              <motion.div
                className="h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mt-4"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para transformar seu sorriso?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Agende sua avaliação e descubra o tratamento ideal para você
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#E53E3E"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppClick}
            className="bg-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white"
          >
            Agendar consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;