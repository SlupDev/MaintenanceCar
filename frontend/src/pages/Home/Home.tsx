import React from 'react'
import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>🚗 Maintenance Car</h1>
          <p className={styles.subtitle}>Bienvenue sur votre tableau de bord</p>
        </div>

        <div className={styles.welcomeCard}>
          <h2 className={styles.welcomeTitle}>Connexion réussie !</h2>
          <p className={styles.welcomeText}>
            Vous êtes maintenant connecté à votre compte Maintenance Car.
          </p>
          <p className={styles.welcomeText}>
            Cette page sera remplacée par votre tableau de bord principal.
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📋</div>
            <h3 className={styles.featureTitle}>Gestion des véhicules</h3>
            <p className={styles.featureDescription}>
              Gérez vos véhicules et leur maintenance
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔧</div>
            <h3 className={styles.featureTitle}>Suivi des entretiens</h3>
            <p className={styles.featureDescription}>
              Suivez l'historique des réparations
            </p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3 className={styles.featureTitle}>Statistiques</h3>
            <p className={styles.featureDescription}>
              Visualisez vos données et analyses
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

