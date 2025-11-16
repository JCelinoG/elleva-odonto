import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  withIcon?: boolean;
  center?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'lg',
  className = '',
  onClick,
  withIcon = true,
  center = true
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const url = `https://wa.me/${whatsappInfo.phone}?text=${encodeURIComponent(whatsappInfo.message)}`;
      window.open(url, '_blank');
    }
  };

  const baseClasses = "font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2";
  
  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 border-2 border-primary-600",
    secondary: "border-2 border-luxury-gold text-luxury-dark hover:bg-luxury-gold hover:text-white",
    accent: "bg-accent-500 text-white hover:bg-accent-600 border-2 border-accent-500"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 text-base rounded-lg", 
    lg: "px-8 py-4 text-lg rounded-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${center ? 'mx-auto' : ''}
        ${className}
      `}
    >
      <span className="text-inherit">{children}</span>
      {withIcon && (
        <span className={variant === 'secondary' ? 'text-inherit' : 'text-luxury-gold'}>
          {variant === 'secondary' ? '→' : '✦'}
        </span>
      )}
    </motion.button>
  );
};

export default Button;