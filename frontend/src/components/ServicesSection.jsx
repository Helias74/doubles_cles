import './ServicesSection.css';

function Services() {
  return (
    <section className="blocs-section">
      <div className="bloc">
        <h2 className="bloc-titre">Fiabilité</h2>
        <p className="bloc-slogan">Un service fiable, assuré par des professionnels qualifiés.</p>
        <p className="bloc-description">
          Chaque copie est effectuée avec précision à l’aide d’équipements certifiés, 
          pour assurer la compatibilité parfaite de votre double de clé. Vous repartez l’esprit tranquille, 
          avec une clé fonctionnelle et durable.
        </p>
      </div>

      <div className="bloc">
        <h2 className="bloc-titre">Rapidité</h2>
        <p className="bloc-slogan">Un rendez-vous simple, une copie rapide, et vous voilà reparti.</p>
        <p className="bloc-description">
          Nous savons que votre temps est précieux. C’est pourquoi nos points de service sont organisés pour limiter l’attente. 
          En moins de 30 minutes, 
          votre nouvelle clé est prête, sans compromis sur la qualité.
        </p>
      </div>

      <div className="bloc">
        <h2 className="bloc-titre">Proximité</h2>
        <p className="bloc-slogan">Un service accessible, proche de chez vous.</p>
        <p className="bloc-description">
          Grâce à nos nombreux points partenaires répartis sur le territoire, il y a toujours un lieu proche de chez vous 
          pour prendre rendez-vous. 
          Notre objectif : vous simplifier la vie en vous évitant les longues démarches.
        </p>
      </div>
    </section>
  );
}

export default Services;