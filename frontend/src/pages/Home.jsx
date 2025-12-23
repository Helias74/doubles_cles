import AccueilSection from '../components/AccueilSection'
import ServicesSection from '../components/ServicesSection'
import ReservationSection from '../components/ReservationSection'
import ReservationForm from '../components/ReservationForm'
import ContactSection from '../components/ContactSection'

function Home() {
  return (
    <div>
      <section id="accueil"><AccueilSection /></section>
      <section id="services"><ServicesSection /></section>
      <section id="reservationFormulaire"><ReservationForm /></section>
      <section id="contact"><ContactSection /></section>
    </div>
  );
}

export default Home;