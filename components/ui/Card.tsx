import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  const baseStyles = 'rounded-xl p-8 border';
  const hoverStyles = hover ? 'card-hover-glow' : '';
  
  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={{
        backgroundColor: 'var(--color-bg-elevated)',
        borderColor: 'var(--color-border-default)',
      }}
    >
      {children}
    </div>
  );
};
