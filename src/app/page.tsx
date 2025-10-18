'use client';
import ContactModalForm from "@/components/Contact-modal-form";
import CreditsFeatures from "@/components/home/CreditsFeatures";
import CreditsModel from "@/components/home/CreditsModel";
import InvestorsHub from "@/components/home/InvestorsHub";
import OurProcess from "@/components/home/OurProcess";
import ResearchCalls from "@/components/home/ResearchCalls";
import TeamSpace from "@/components/home/TeamSpace";
import WhyDalalStreet from "@/components/home/WhyDalalStreet";
import { Contact } from "lucide-react";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
   useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    <Head>
        <title>Dalal Street: SEBI Registered Research Recommendations | The Dalal Street Hub</title>
        <meta
          name="description"
          content="Research Calls For Every Trader. India’s first SEBI-registered credits-based subscription model. Pay only for successful research calls."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://thedalalstreethub.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thedalalstreethub.com/" />
        <meta property="og:title" content="Dalal Street: SEBI Registered Research Recommendations" />
        <meta
          property="og:description"
          content="Research Calls For Every Trader. India’s first SEBI-registered credits-based subscription model. Pay only for successful research calls."
        />
        <meta property="og:image" content="/path-to-social-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://thedalalstreethub.com/" />
        <meta name="twitter:title" content="Dalal Street: SEBI Registered Research Recommendations" />
        <meta
          name="twitter:description"
          content="Research Calls For Every Trader. India’s first SEBI-registered credits-based subscription model. Pay only for successful research calls."
        />
        <meta name="twitter:image" content="/path-to-social-image.jpg" />
      </Head>
      <ContactModalForm open={open} onClose={() => setOpen(false)}/>
    <ResearchCalls/>
    <CreditsModel/>
    <CreditsFeatures/>
    {/* <DownloadApp/> */}
    <WhyDalalStreet/>
    <OurProcess/>
    <InvestorsHub/>
    <TeamSpace/>
    {/* <AiFillCodeSandboxSquare/> */}
    </>

  );
}
