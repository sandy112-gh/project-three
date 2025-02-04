import './App.css'
import Navigation from './components/Navigation'
import HeaderBanner from './components/HeaderBanner'
import ArticleSection from './components/ArticleSection'
import HighlightSection from './components/HighlightSection'
import TopCountrySection from './components/TopCountrySection'

const App = () => {
  return (
    <div>
      <Navigation />
      <HeaderBanner />
      <ArticleSection />
      <HighlightSection />
      <TopCountrySection />
    </div>
  )
}

export default App
