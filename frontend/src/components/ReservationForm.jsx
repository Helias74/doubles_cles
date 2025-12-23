import React, { useState } from 'react';
import './ReservationForm.css';

export default function FormulaireReservation() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    date: '',
    lieu: '',
    motif: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }
    
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (!/^[0-9]{10}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Numéro invalide (10 chiffres)';
    }
    
    if (!formData.date) newErrors.date = 'La date est requise';
    if (!formData.lieu.trim()) newErrors.lieu = 'Le lieu est requis';
    if (!formData.motif.trim()) newErrors.motif = 'Le motif est requis';
    
    return newErrors;
  };

  const handleSubmit = async () => {
  const newErrors = validateForm();
  
  if (Object.keys(newErrors).length === 0) {
    try {
      const response = await fetch('http://localhost:8000/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l’envoi de la réservation');
      }

      const data = await response.json();
      console.log('Réservation envoyée :', data);
      setSubmitted(true);

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          date: '',
          lieu: '',
          motif: ''
        });
        setSubmitted(true);
      }, 500);

    } catch (error) {
      console.error(error.message);
      alert('Impossible d’envoyer la réservation. Veuillez réessayer plus tard.');
    }
  } else {
    setErrors(newErrors);
  }
};

  return (
    <div className="reservation-container">
      <div className="reservation-card">
        <h2 className="reservation-title">
          Réservez votre rendez-vous dès maintenant
        </h2>
        <p className="reservation-subtitle">
          Remplissez le formulaire ci-dessous pour prendre rendez-vous
        </p>

        {submitted && (
          <div className="success-message">
            ✓ Votre réservation a été envoyée avec succès ! Nous vous recontacterons bientôt.
          </div>
        )}

        <div className="form-content">
          {/* Informations personnelles */}
          <div className="form-section">
            <h3 className="section-title">
              Vos coordonnées
            </h3>
            
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">
                  Nom *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`form-input ${errors.nom ? 'input-error' : ''}`}
                  placeholder="Votre nom"
                />
                {errors.nom && (
                  <p className="error-message">{errors.nom}</p>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className={`form-input ${errors.prenom ? 'input-error' : ''}`}
                  placeholder="Votre prénom"
                />
                {errors.prenom && (
                  <p className="error-message">{errors.prenom}</p>
                )}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="votre.email@exemple.com"
              />
              {errors.email && (
                <p className="error-message">{errors.email}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Téléphone *
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className={`form-input ${errors.telephone ? 'input-error' : ''}`}
                placeholder="06 12 34 56 78"
              />
              {errors.telephone && (
                <p className="error-message">{errors.telephone}</p>
              )}
            </div>
          </div>

          {/* Détails de la réservation */}
          <div className="form-section">
            <h3 className="section-title">
              Détails de la réservation
            </h3>

            <div className="form-group">
              <label className="form-label">
                Date souhaitée *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className={`form-input ${errors.date ? 'input-error' : ''}`}
              />
              {errors.date && (
                <p className="error-message">{errors.date}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Lieu *
              </label>
              <input
                type="text"
                name="lieu"
                value={formData.lieu}
                onChange={handleChange}
                className={`form-input ${errors.lieu ? 'input-error' : ''}`}
                placeholder="Ex: Cabinet principal, Domicile, Visio..."
              />
              {errors.lieu && (
                <p className="error-message">{errors.lieu}</p>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">
                Motif de la consultation *
              </label>
              <textarea
                name="motif"
                value={formData.motif}
                onChange={handleChange}
                rows="4"
                className={`form-textarea ${errors.motif ? 'input-error' : ''}`}
                placeholder="Décrivez brièvement le motif de votre demande..."
              />
              {errors.motif && (
                <p className="error-message">{errors.motif}</p>
              )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="submit-button"
          >
            Envoyer la demande de réservation
          </button>

          <p className="required-note">
            * Champs obligatoires
          </p>
        </div>
      </div>
    </div>
  );
}