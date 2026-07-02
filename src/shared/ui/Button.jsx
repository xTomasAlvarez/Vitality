import React from 'react';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md';
  
  const variants = {
    primary: 'bg-accent hover:bg-accent-light text-white px-8 py-3.5',
    secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3.5',
    white: 'bg-white text-primary hover:bg-gray-50 px-8 py-3.5'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
