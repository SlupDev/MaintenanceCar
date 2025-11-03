import React from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  fullWidth?: boolean
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  className = '',
  children,
  ...props
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${
    fullWidth ? styles.fullWidth : ''
  } ${className}`.trim()

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button

