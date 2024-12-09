import React from 'react'
import Pricebanner from '../components/PriceBanner/Pricebanner'
import PricingFaq from '../components/PricingFaq/PricingFaq'
import CtaBanner from '../components/Cta/CtaBanner'

const page = () => {
  return (
    <div>
      <Pricebanner/>
      <PricingFaq/>
      <CtaBanner/>
    </div>
  )
}

export default page
