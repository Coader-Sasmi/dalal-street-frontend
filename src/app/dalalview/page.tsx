import MomentumScanner from '@/components/streetview/MomentumScanner'
import PriceMovers from '@/components/streetview/PriceMovers'
import StreetviewUpdates from '@/components/streetview/StreetviewUpdates'
import React from 'react'

export default function page() {
  return (
    <div>
      <StreetviewUpdates/> 
      <PriceMovers/>
      <MomentumScanner/>
    </div>
  )
}
