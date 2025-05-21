import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Affiche les pages dynamiques ici */}
      </main>
      <Footer />
    </div>
  )
}

export default App