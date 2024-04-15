import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import InfiniteScroll from "./components/InfiniteScroll"
import { Search } from "./components/Search"

function page() {
  return (
    <div>
      <HeroSection />
      <InfiniteScroll />
      <FeatureSection />
    </div>
  )
}

export default page