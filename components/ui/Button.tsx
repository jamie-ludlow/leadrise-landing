import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-[10px] transition-all duration-150 focus-ring cursor-pointer text-center';
  
  const variantStyles = {
    primary: 'px-8 py-3.5 text-base hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50',
    secondary: 'bg-transparent px-8 py-3.5 text-base border active:bg-opacity-10',
    ghost: 'bg-transparent px-4 py-2 text-sm hover:bg-opacity-10 rounded-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const variantInlineStyles = {
    primary: {
      backgroundColor: 'var(--color-primary-teal)',
      color: 'var(--color-bg-page)',
    } as React.CSSProperties,
    secondary: {
      color: 'var(--color-text-body)',
      borderColor: 'var(--color-border-default)',
    } as React.CSSProperties,
    ghost: {
      color: 'var(--color-text-muted)',
    } as React.CSSProperties,
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClassName}
        style={variantInlineStyles[variant]}
        onMouseEnter={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.backgroundColor = 'var(--color-primary-teal-hover)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(42,191,171,0.25)';
          } else if (variant === 'secondary') {
            e.currentTarget.style.borderColor = 'var(--color-primary-teal)';
            e.currentTarget.style.color = 'var(--color-primary-teal)';
            e.currentTarget.style.backgroundColor = 'rgba(42,191,171,0.04)';
          } else if (variant === 'ghost') {
            e.currentTarget.style.color = 'var(--color-text-heading)';
            e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)';
          }
        }}
        onMouseLeave={(e) => {
          if (variant === 'primary') {
            e.currentTarget.style.backgroundColor = 'var(--color-primary-teal)';
            e.currentTarget.style.boxShadow = 'none';
          } else if (variant === 'secondary') {
            e.currentTarget.style.borderColor = 'var(--color-border-default)';
            e.currentTarget.style.color = 'var(--color-text-body)';
            e.currentTarget.style.backgroundColor = 'transparent';
          } else if (variant === 'ghost') {
            e.currentTarget.style.color = 'var(--color-text-muted)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName} 
      style={variantInlineStyles[variant]}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--color-primary-teal-hover)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(42,191,171,0.25)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--color-primary-teal)';
          e.currentTarget.style.color = 'var(--color-primary-teal)';
          e.currentTarget.style.backgroundColor = 'rgba(42,191,171,0.04)';
        } else if (variant === 'ghost') {
          e.currentTarget.style.color = 'var(--color-text-heading)';
          e.currentTarget.style.backgroundColor = 'var(--color-bg-elevated)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = 'var(--color-primary-teal)';
          e.currentTarget.style.boxShadow = 'none';
        } else if (variant === 'secondary') {
          e.currentTarget.style.borderColor = 'var(--color-border-default)';
          e.currentTarget.style.color = 'var(--color-text-body)';
          e.currentTarget.style.backgroundColor = 'transparent';
        } else if (variant === 'ghost') {
          e.currentTarget.style.color = 'var(--color-text-muted)';
          e.currentTarget.style.backgroundColor = 'transparent';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
