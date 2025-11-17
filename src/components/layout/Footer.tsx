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
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-300"
  >
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  </motion.a>
  
  <motion.button
    whileHover={{ scale: 1.1, y: -2 }}
    onClick={handleWhatsAppClick}
    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
  >
    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.452"/>
    </svg>
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