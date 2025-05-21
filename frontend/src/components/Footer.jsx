function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f8f8',
      padding: '1.5rem',
      textAlign: 'center',
      borderTop: '1px solid #ddd',
      marginTop: '2rem'
    }}>
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} DoubleAuto. Tous droits réservés.
      </p>
      <p style={{ margin: '0.5rem 0 0' }}>
        Contactez-nous : <a href="mailto:contact@doubleauto.fr">contact@doubleauto.fr</a>
      </p>
    </footer>
  );
}

export default Footer;