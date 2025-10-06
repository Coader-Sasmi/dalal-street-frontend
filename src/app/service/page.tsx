import SmartTradingBanner from '@/components/service/SmartTradingBanner'
import TradingPlansWithFilter from '@/components/service/TradingPlansWithFilter'

export default function page() {
  return (
    <div className='main-container'>
      <SmartTradingBanner/>
      <TradingPlansWithFilter/>
    </div>
  )
}
