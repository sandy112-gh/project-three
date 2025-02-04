import TopCountryList from './TopCountryList'
import countries from '../countries.json'

const TopCountrySection = () => {
  return (
    <div class="topCountrySectionStyle">
      <h2 class="topCountrySectionTitle">Top 25 Countries to Visit:</h2>
      {countries.countries.map((country) => (
        <TopCountryList
          key={country.countryName}
          countryName={country.countryName}
          flag={country.flag}
        />
      ))}
    </div>
  )
}

export default TopCountrySection
