import './App.css'
import countries from './countries.json'
import Navigation from './components/Navigation'
import HeaderBanner from './components/HeaderBanner'
import Country from './components/Country'
import ArticleSection from './components/ArticleSection'
import ArticleCard from './components/ArticleCard'
import HighlightSection from './components/HighlightSection'

const App = () => {
  return (
    <div>
      <Navigation />
      <HeaderBanner />
      <ArticleSection />
      <HighlightSection />
    </div>
  )
}

export default App
