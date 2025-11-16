import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navigationItems } from '../data/content';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao clicar em um link
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

return (
  <motion.header
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}
  >
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-3"> {/* Reduzi o padding */}
        {/* Logo Atualizada - apenas a imagem */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="/images/logo-elleva2.png" 
            alt="Elleva Clínica Odontológica"
            className="h-16 w-auto object-contain" /* Ajuste para a nova proporção */
          />
        </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-700 hover:text-accent-300 transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-300 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
            
            {/* Botão CTA */}
              <Button variant="primary" size="md" withIcon={false} center={false}>
  Agendar Consulta
</Button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-lg bg-primary-50 hover:bg-primary-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-primary-600 transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-6 bg-primary-600 transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-6 bg-primary-600 transition-all"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
            >
              <nav className="py-4 space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="block py-2 px-4 text-gray-700 hover:text-accent-300 hover:bg-primary-50 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <Button variant="primary" size="md" withIcon={false} center={false}>
  Agendar Consulta
</Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;