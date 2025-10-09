import CuratedPortfolioSection from '@/components/streetfolios/CuratedPortfolioSection'
import FAQ from '@/components/streetfolios/FAQ'
import InvestmentSteps from '@/components/streetfolios/InvestmentSteps'
import ModelPortfolios from '@/components/streetfolios/ModelPortfolios'
import WhyChoosePortfolios from '@/components/streetfolios/WhyChoose'


export default function page() {
   const canonicalUrl = `https://thedalalstreethub.com${pagePath}`;
  return (
    <>
    
      <CuratedPortfolioSection/>
      <WhyChoosePortfolios/>
      <InvestmentSteps/>
      <ModelPortfolios/>
      {/* <Testimonials/> */}
      <FAQ/>
    </>
  )
}
