import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Leaf, TrendingDown, ArrowRight, Battery, Home as HomeIcon, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Optimisez votre consommation électrique
            </h1>
            <p className="hero-slogan">
              "Économisez l'énergie aujourd'hui, préservez demain"
            </p>
            <p className="hero-description">
              Découvrez comment réduire votre facture d'électricité tout en contribuant 
              à la protection de l'environnement grâce à nos conseils d'experts et outils interactifs.
            </p>
            <div className="hero-buttons">
              <Link to="/quiz" className="btn btn-primary">
                Testez vos connaissances
                <ArrowRight className="btn-icon" />
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="energy-icon">
              <Zap className="main-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Pourquoi optimiser sa consommation ?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <TrendingDown />
              </div>
              <h3>Réduisez vos factures</h3>
              <p>Diminuez jusqu'à 30% de votre consommation électrique avec nos conseils pratiques.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Leaf />
              </div>
              <h3>Protégez l'environnement</h3>
              <p>Contribuez à la réduction des émissions de CO2 en adoptant des gestes éco-responsables.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Lightbulb />
              </div>
              <h3>Apprenez les bonnes pratiques</h3>
              <p>Découvrez les techniques d'optimisation énergétique adaptées à votre logement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="tips">
        <div className="container">
          <h2 className="section-title">Conseils rapides</h2>
          <div className="tips-grid">
            <div className="tip-item">
              <HomeIcon className="tip-icon" />
              <span>Isolez correctement votre logement</span>
            </div>
            <div className="tip-item">
              <Battery className="tip-icon" />
              <span>Débranchez les appareils en veille</span>
            </div>
            <div className="tip-item">
              <Lightbulb className="tip-icon" />
              <span>Utilisez des ampoules LED</span>
            </div>
            <div className="tip-item">
              <Zap className="tip-icon" />
              <span>Optimisez le chauffage électrique</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à devenir un expert en économie d'énergie ?</h2>
            <p>Testez vos connaissances avec notre quiz interactif de 10 questions</p>
            <Link to="/quiz" className="btn btn-secondary">
              Commencer le quiz
              <ArrowRight className="btn-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;