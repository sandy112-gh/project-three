const Country = ({ Thailand }) => {
  return (
    <div>
      <h4>Important Facts:</h4>
      <ul>
        <li>Country: {Thailand.countryName}</li>
        <li>Capital: {Thailand.capital}</li>
        <li>Language: {Thailand.language}</li>
        <li>Currency: {Thailand.currency}</li>
      </ul>
    </div>
  )
}

export default Country
