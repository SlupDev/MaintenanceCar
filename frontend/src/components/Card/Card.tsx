import React from 'react'
import styles from './Card.module.css'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.card} ${className}`.trim()}>
      {children}
    </div>
  )
}

export default Card

