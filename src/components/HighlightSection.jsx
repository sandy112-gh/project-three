import Country from './Country'
import countries from '../countries.json'

const HighlightSection = () => {
  const Thailand = countries.countries[0]
  return (
    <div class="highlightSectionStyle">
      <h2 class="highlightSectionTitle">Spotlight on Thailand:</h2>
      <div>
        <Country Thailand={Thailand} />
      </div>
    </div>
  )
}

export default HighlightSection
