import CuratedPortfolioSection from '@/components/streetfolios/CuratedPortfolioSection'
import FAQ from '@/components/streetfolios/FAQ'
import InvestmentSteps from '@/components/streetfolios/InvestmentSteps'
import ModelPortfolios from '@/components/streetfolios/ModelPortfolios'
import Testimonials from '@/components/streetfolios/Testimonials'
import WhyChoosePortfolios from '@/components/streetfolios/WhyChoose'
import React from 'react'

export default function page() {
  return (
    <div>
      <CuratedPortfolioSection/>
      <WhyChoosePortfolios/>
      <InvestmentSteps/>
      <ModelPortfolios/>
      <Testimonials/>
      <FAQ/>
    </div>
  )
}
