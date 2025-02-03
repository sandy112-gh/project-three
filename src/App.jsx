import './App.css'
import countries from './countries.json'
import Navigation from './components/Navigation'
import HeaderBanner from './components/HeaderBanner'
import Country from './components/Country'
import ArticleSection from './components/ArticleSection'
import ArticleCard from './components/ArticleCard'
import HighlightSection from './components/HighlightSection'

const App = () => {
  const articles = [
    {
      title: 'Post 1',
      date: '01/12/25',
      author: 'John Doe',
      content: 'This is the content of the first blog post.'
    },
    {
      title: 'Post 2',
      date: '01/12/25',
      author: 'John Doe',
      content: 'This is the content of the first blog post.'
    },
    {
      title: 'Post 3',
      date: '01/12/25',
      author: 'John Doe',
      content: 'This is the content of the first blog post.'
    }
  ]

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
