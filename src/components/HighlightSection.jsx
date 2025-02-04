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
      {/* <div>
        {countries.countries.map((country) => (
          <Country
            key={country.countryName}
            countryName={country.countryName}
            capital={country.capital}
            currency={country.currency}
          />
        ))}
      </div> */}
    </div>
  )
}

export default HighlightSection
