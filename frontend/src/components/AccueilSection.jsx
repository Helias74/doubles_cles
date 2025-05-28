import './AccueilSection.css';

function AccueilSection() {
  return (
    <section id="accueil" className="accueil-section">
      <div className="accueil-container">
        <div className="accueil-contenu">
          <h1>
            <span className="ligne-haut-slogan">Doublez vos clés,</span><br />
            <span className="ligne-bas-slogan">pas vos efforts</span>
            <span className="point-slogan">.</span>
          </h1>
          <p>
            Réservez en ligne et faites copier votre clé de voiture dans l’un de nos points de service.
            <span className="hilight-description"> Sans attente inutile.</span>
          </p>
          <a href="#reservation" className="btn-rdv">Prendre un RDV</a>
          <a href="#services" className="en-savoir-plus">En savoir plus</a>
        </div>
        <div className="trapeze">
          <h2>Contenu du trapèze</h2>
        </div>
      </div>
    </section>
  );
}

export default AccueilSection;