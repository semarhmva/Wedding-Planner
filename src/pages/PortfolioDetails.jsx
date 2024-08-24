import React from 'react'
import Footer from '../components/Footer'
import PoDetails from '../components/details/PoDetails'
import AboutPortfolio from '../components/about/AboutPortfolio'
import Memories from '../components/home/Memories'
import Planning from '../components/details/Planning'
import ClientRequest from '../components/details/ClientRequest'
import Execution from '../components/details/Execution'

const PortfolioDetails= () => {
    return (
      <section>
      <PoDetails/>
      <ClientRequest/>
      <Execution/>
      <Planning/>
      <Memories/>
      <AboutPortfolio/>
      <Footer/>
    </section>
    )
  }

export default PortfolioDetails