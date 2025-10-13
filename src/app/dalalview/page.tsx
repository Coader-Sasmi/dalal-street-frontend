import MomentumScanner from '@/components/streetview/MomentumScanner'
import PriceMovers from '@/components/streetview/PriceMovers'
import StreetviewUpdates from '@/components/streetview/StreetviewUpdates'

export default function Page() {
  return (
    <div>
      <StreetviewUpdates/> 
      <PriceMovers/>
      <MomentumScanner/>
    </div>
  )
}
