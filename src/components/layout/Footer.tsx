import React from 'react';
import { motion } from 'framer-motion';
import { footerData, whatsappInfo } from '../data/content';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappInfo.phone}?text=${encodeURIComponent(whatsappInfo.message)}`;
    window.open(url, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${footerData.contact.email}`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${footerData.contact.phone}`;
  };

  return (
    <footer className="bg-gradient-to-br from-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
               <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        <img 
                          src="/images/logo-elleva3.jpeg" 
                          alt="Elleva Clínica Odontológica"
                          className="h-10 w-auto object-contain" 
                        />
                      </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-5">ELLEVA</span>
                <span className="text-xs text-primary-200 leading-3">CLÍNICA ODONTOLÓGICA</span>
              </div>
            </div>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Cuidando do seu sorriso com excelência, tecnologia e atendimento humanizado em Palmas.
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={footerData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-300 transition-colors duration-300"
              >
                <span className="text-lg">📸</span>
              </motion.a>
              {/*
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={footerData.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent-300 transition-colors duration-300"
              >
                <span className="text-lg">📘</span>
              </motion.a>*/}
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                onClick={handleWhatsAppClick}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
              >
                <span className="text-lg">💬</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-primary-200 hover:text-accent-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Horário de Atendimento</h3>
            <div className="space-y-3 text-primary-200">
              <div className="flex items-start space-x-3">
                <span className="text-accent-400">🕒</span>
                <div>
                  <p className="font-medium">{footerData.hours.weekdays}</p>
                  <p className="text-sm">{footerData.hours.saturday}</p>
                  <p className="text-sm">{footerData.hours.sunday}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">Contato</h3>
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-primary-200 cursor-pointer group"
              >
                <span className="text-accent-400 mt-1">📍</span>
                <div>
                  <a 
                    href="https://maps.google.com/?q=Quadra ARSO 41, Av. LO-9, 30 - SL.03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group-hover:text-white transition-colors duration-300 block"
                  >
                    {footerData.contact.address}
                  </a>
                </div>
              </motion.div>

              <motion.button
                whileHover={{ x: 5 }}
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 text-primary-200 hover:text-white transition-colors duration-300 w-full text-left group"
              >
                <span className="text-accent-400">📞</span>
                <span className="group-hover:text-white">{footerData.contact.phone}</span>
              </motion.button>

              <motion.button
                whileHover={{ x: 5 }}
                onClick={handleEmailClick}
                className="flex items-center space-x-3 text-primary-200 hover:text-white transition-colors duration-300 w-full text-left group"
              >
                <span className="text-accent-400">✉️</span>
                <span className="group-hover:text-white">{footerData.contact.email}</span>
              </motion.button>

             <Button variant="primary">
                Agendar consulta
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-primary-600"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-300 text-sm">
            © {new Date().getFullYear()} Elleva Clínica Odontológica. Todos os direitos reservados.
          </p>
            {/*
            <div className="flex space-x-6 text-sm text-primary-300">
              <a href="#" className="hover:text-accent-400 transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-accent-400 transition-colors duration-300">
                Termos de Uso
              </a>
            </div>*/}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;