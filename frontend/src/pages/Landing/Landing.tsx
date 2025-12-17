import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components'
import styles from './Landing.module.css'

const Landing: React.FC = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/login')
  }

  return (
    <div className={styles.landingContainer}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.navLogo}>
            <div className={styles.logoIcon}>TC</div>
            <span className={styles.logoText}>Ticar</span>
          </div>
          <div className={styles.navActions}>
            <Button variant="outline" onClick={() => navigate('/login')} className={styles.navButton}>
              Connexion
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>Né à l'île de La Réunion</span>
          </div>
          
          <h1 className={styles.heroTitle}>
            Gérez vos véhicules en toute simplicité
          </h1>
          
          <p className={styles.heroSubtitle}>
            Une solution pensée et développée à l'île de La Réunion pour simplifier 
            la gestion et l'entretien de vos véhicules.
          </p>

          <div className={styles.ctaButtons}>
            <Button 
              variant="primary" 
              onClick={handleGetStarted}
              className={styles.ctaButton}
            >
              Commencer
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
              className={styles.ctaButton}
            >
              Notre histoire
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className={styles.story}>
        <div className={styles.storyContent}>
          <div className={styles.storyText}>
            <h2 className={styles.storyTitle}>L'histoire de Ticar</h2>
            <div className={styles.storyParagraphs}>
              <p>
                Née sous le soleil de l'île de La Réunion, Ticar est le fruit d'une observation simple : 
                gérer l'entretien de ses véhicules peut rapidement devenir un casse-tête.
              </p>
              <p>
                Entre les vidanges à ne pas oublier, les contrôles techniques qui approchent, 
                et les historiques de maintenance éparpillés dans des carnets ou des feuilles volantes, 
                nous avons voulu créer une solution claire et accessible à tous.
              </p>
              <p>
                Ticar centralise toutes les informations importantes de vos véhicules : 
                carnet d'entretien numérique, rappels automatiques, suivi des dépenses, 
                et bien plus encore. Le tout dans une interface pensée pour être simple et efficace.
              </p>
            </div>
          </div>
          
          <div className={styles.storyVisual}>
            <div className={styles.mapCard}>
              <div className={styles.mapIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className={styles.mapText}>
                <div className={styles.mapTitle}>La Réunion</div>
                <div className={styles.mapSubtitle}>Océan Indien</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="features" className={styles.howItWorks}>
        <div className={styles.howItWorksHeader}>
          <h2 className={styles.sectionTitle}>Comment ça fonctionne ?</h2>
          <p className={styles.sectionSubtitle}>
            Ticar vous accompagne dans la gestion quotidienne de vos véhicules en 3 étapes simples
          </p>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>01</div>
            <div className={styles.stepIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 17H5C3.89543 17 3 16.1046 3 15V9C3 7.89543 3.89543 7 5 7H19C20.1046 7 21 7.89543 21 9V15C21 16.1046 20.1046 17 19 17Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 11H9M15 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={styles.stepTitle}>Ajoutez vos véhicules</h3>
            <p className={styles.stepDescription}>
              Créez une fiche pour chaque véhicule avec les informations essentielles : 
              marque, modèle, immatriculation, kilométrage actuel. C'est rapide et intuitif.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>02</div>
            <div className={styles.stepIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className={styles.stepTitle}>Enregistrez les entretiens</h3>
            <p className={styles.stepDescription}>
              Notez chaque intervention : vidange, révision, changement de pneus. 
              Conservez les factures, les notes et construisez l'historique complet de chaque véhicule.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>03</div>
            <div className={styles.stepIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 17H20L18.5951 20.5951C18.2141 21.5447 17.2316 22 16.2062 22H7.79377C6.76835 22 5.78586 21.5447 5.40487 20.5951L4 17H9M15 17V7C15 5.67392 15.5268 4.40215 16.4645 3.46447C17.4021 2.52678 18.6739 2 20 2H22V17H15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 17V7C4 5.67392 3.47322 4.40215 2.53553 3.46447C1.59785 2.52678 0.326087 2 -1 2H-3V17H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className={styles.stepTitle}>Recevez des alertes</h3>
            <p className={styles.stepDescription}>
              Ticar vous prévient quand une maintenance approche, que ce soit basé sur le kilométrage 
              ou une date. Plus de risque d'oublier un contrôle technique ou une révision.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle}>Tout ce dont vous avez besoin</h2>
          <p className={styles.sectionSubtitle}>
            Des fonctionnalités pensées pour vous faire gagner du temps
          </p>
        </div>

        <div className={styles.featureList}>
          <div className={styles.featureItem}>
            <div className={styles.featureItemIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.featureItemContent}>
              <h4 className={styles.featureItemTitle}>Carnet d'entretien numérique</h4>
              <p className={styles.featureItemText}>
                Tous vos entretiens au même endroit, accessible depuis n'importe quel appareil
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureItemIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.featureItemContent}>
              <h4 className={styles.featureItemTitle}>Rappels automatiques</h4>
              <p className={styles.featureItemText}>
                Ne manquez plus jamais une échéance importante avec nos notifications intelligentes
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureItemIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.featureItemContent}>
              <h4 className={styles.featureItemTitle}>Suivi des dépenses</h4>
              <p className={styles.featureItemText}>
                Visualisez combien vous coûte chaque véhicule et anticipez les budgets futurs
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureItemIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.featureItemContent}>
              <h4 className={styles.featureItemTitle}>Historique complet</h4>
              <p className={styles.featureItemText}>
                Retrouvez instantanément n'importe quelle intervention passée
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureItemIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.featureItemContent}>
              <h4 className={styles.featureItemTitle}>Interface simple</h4>
              <p className={styles.featureItemText}>
                Pas besoin d'être expert, Ticar est conçu pour être utilisé par tous
              </p>
            </div>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureItemIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className={styles.featureItemContent}>
              <h4 className={styles.featureItemTitle}>Sécurisé</h4>
              <p className={styles.featureItemText}>
                Vos données sont protégées et sauvegardées automatiquement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Prêt à simplifier la gestion de vos véhicules ?
          </h2>
          <p className={styles.ctaText}>
            Rejoignez Ticar et découvrez une nouvelle façon de gérer l'entretien 
            de vos véhicules, plus simple et plus efficace.
          </p>
          <Button 
            variant="primary" 
            onClick={handleGetStarted}
            className={styles.ctaButtonLarge}
          >
            Commencer maintenant
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <div className={styles.logoIcon}>TC</div>
              <span>Ticar</span>
            </div>
            <p className={styles.footerDescription}>
              Solution professionnelle de gestion<br />
              de flotte automobile
            </p>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Produit</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#features">Fonctionnalités</a></li>
              <li><a href="#pricing">Tarifs</a></li>
              <li><a href="#demo">Démonstration</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Entreprise</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#about">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#careers">Carrières</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Légal</h4>
            <ul className={styles.footerLinks}>
              <li><a href="#privacy">Confidentialité</a></li>
              <li><a href="#terms">Conditions</a></li>
              <li><a href="#security">Sécurité</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.footerCopyright}>
            © 2024 Ticar. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Landing

