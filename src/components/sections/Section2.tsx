import React from 'react';
import { motion } from 'framer-motion';
import { proceduresData, whatsappInfo } from '../data/content';
import Button from '../ui/Button';

const Section2: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappInfo.phone}?text=${encodeURIComponent(whatsappInfo.message)}`;
    window.open(url, '_blank');
  };

  // Animação para os cards - diferente da seção 1
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="procedimentos" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção com estilo diferente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary-500 to-luxury-gold mx-auto mb-6 rounded-full"
          />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-700 mb-4">
            Procedimentos Especializados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Técnicas avançadas e tratamentos personalizados para cada necessidade
          </p>
        </motion.div>

        {/* Grid de Procedimentos - Layout Circular/Destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {proceduresData.map((procedure, index) => (
            <motion.div
              key={procedure.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Principal */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent group-hover:border-primary-200 relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-2xl text-white shadow-lg mb-6 mx-auto group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300 relative z-10"
                >
                  {procedure.icon}
                </motion.div>
                
                {/* Conteúdo */}
                <div className="text-center relative z-10">
                  <h3 className="text-xl font-serif font-bold text-primary-800 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {procedure.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-sans">
                    {procedure.description}
                  </p>
                </div>

                {/* Linha decorativa inferior */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-primary-400 to-luxury-gold rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </div>

              {/* Efeito de brilho no hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400/10 to-luxury-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Design Diferente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background com padrão */}
          <div className="absolute inset-0 bg-primary-600">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          </div>
          
          {/* Conteúdo */}
          <div className="relative z-10 text-center p-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-serif font-bold text-white mb-4"
            >
              Pronto para transformar seu sorriso?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-primary-100 mb-8 max-w-2xl mx-auto font-sans"
            >
              Agende sua avaliação e descubra o tratamento ideal para você
            </motion.p>
            <Button variant="primary">
                Agendar consulta
              </Button>
          </div>

          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-gold/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;