import { useEffect } from 'react'
import { useReveal } from './hooks/useReveal'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import CausaAnimal from './components/CausaAnimal'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import Kit from './components/Kit'
import ConcursoPet from './components/ConcursoPet'
import RegrasRapidas from './components/RegrasRapidas'
import Inscricoes from './components/Inscricoes'
import Apoio from './components/Apoio'
import Contato from './components/Contato'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <CausaAnimal />
        <Programacao />
        <Atracoes />
        <Kit />
        <ConcursoPet />
        <RegrasRapidas />
        <Inscricoes />
        <Apoio />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
