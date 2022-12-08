import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Offer from './Offer'
import { Header } from './Header'
import { Services } from './Services'
import { Attribute } from './Attribute'
import { OurClients } from './OurClients'
import "./style.css";
import OfferApi from '../datasets/OfferApi'
import { Price } from './Price'

import { Team } from './Team'
import { Feedback } from './Feedback'
import { Question } from './Question'
import { Footer } from './Footer'

const Digital = () => {
  const [offerData, setOfferData] = useState(OfferApi)


  return (
    <>
      <div className='container' >
        <div className="page-wrapper">
          <Navbar />
          <Header />
          <Offer offerData={offerData} />
          <Services />
          <Attribute />
          <OurClients />
          <Price />
          <Team />
          <Feedback />
          <Question />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Digital