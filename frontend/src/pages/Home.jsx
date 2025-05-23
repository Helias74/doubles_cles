import ServicesSection from '../components/ServicesSection'
import ReservationSection from '../components/ReservationSection'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <div>
      <section id="accueil">...</section>
      <section id="services"><ServicesSection /></section>
      <section id="reservation"><ReservationSection /></section>
      <section id="contact"><ContactSection /></section>
    </div>
  );
}

export default Home;