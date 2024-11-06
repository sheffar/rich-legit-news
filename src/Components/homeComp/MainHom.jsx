
import { Catgory } from '../CategoryCOmp/Catgory.jsx'
import { Featured } from '../FeaturedComp/Featured.jsx'
import { TrendnewsComp } from '../TrendingNews/TrendnewsComp.jsx'
import { Gridsection } from './Gridsection.jsx'
import { Hero } from './Hero.jsx'


export const MainHom = () => {
  return (
    <div>
        <Hero/>
        <TrendnewsComp/>
        <Featured/>
        <Catgory/>
        <Gridsection/>
    </div>
  )
}
