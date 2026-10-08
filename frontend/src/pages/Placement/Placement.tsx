import { useEffect } from 'react'
import { usePageMeta } from '../../hooks/usePageMeta'
import { placementPage } from '../../data/placement'
import PlacementOverview from '../../components/Placement/PlacementOverview'
import PlacementOutcomes from '../../components/Placement/PlacementOutcomes'

export default function Placement() {
  usePageMeta(placementPage.meta.title, placementPage.meta.description)
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="page-placement">
      <PlacementOverview />
      <PlacementOutcomes />
    </div>
  )
}
