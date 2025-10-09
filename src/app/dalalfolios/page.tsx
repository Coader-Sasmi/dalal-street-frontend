import CuratedPortfolioSection from '@/components/streetfolios/CuratedPortfolioSection'
import FAQ from '@/components/streetfolios/FAQ'
import InvestmentSteps from '@/components/streetfolios/InvestmentSteps'
import ModelPortfolios from '@/components/streetfolios/ModelPortfolios'
import WhyChoosePortfolios from '@/components/streetfolios/WhyChoose'
import Head from 'next/head'

export default function page({
  pageTitle,
  pageDescription,
  pagePath,
  ogImage,
}: {
  pageTitle: string;
  pageDescription: string;
  pagePath: string;
  ogImage?: string;
}) {
   const canonicalUrl = `https://thedalalstreethub.com${pagePath}`;
  return (
    <>
    <Head>
        <title>{pageTitle} | The Dalal Street Hub</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {ogImage && <meta property="og:image" content={ogImage} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Head>
      <CuratedPortfolioSection/>
      <WhyChoosePortfolios/>
      <InvestmentSteps/>
      <ModelPortfolios/>
      {/* <Testimonials/> */}
      <FAQ/>
    </>
  )
}
