import Country from './Country'
import countries from '../countries.json'

const HighlightSection = () => {
  return (
    <div class="highlightSectionStyle">
      <h2 class="highlightSectionTitle">Spotlight on Thailand:</h2>
      <div>
        {countries.countries.map((country) => (
          <Country
            key={country.countryName}
            countryName={country.countryName}
            capital={country.capital}
          />
        ))}
      </div>
    </div>
  )
}

export default HighlightSection
