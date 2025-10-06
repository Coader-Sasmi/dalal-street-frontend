import CreditsFeatures from "@/components/home/CreditsFeatures";
import CreditsModel from "@/components/home/CreditsModel";
import InvestorsHub from "@/components/home/InvestorsHub";
import OurProcess from "@/components/home/OurProcess";
import ResearchCalls from "@/components/home/ResearchCalls";
import WhyDalalStreet from "@/components/home/WhyDalalStreet";

export default function Home() {
  return (
    <>
    <ResearchCalls/>
    <CreditsModel/>
    <CreditsFeatures/>
    {/* <DownloadApp/> */}
    <WhyDalalStreet/>
    <OurProcess/>
    <InvestorsHub/>
    {/* <AiFillCodeSandboxSquare/> */}
    </>

  );
}
