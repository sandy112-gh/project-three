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
      <h4>Best Destinations to Visit:</h4>
      <ul>
        <li>{Thailand.landmarks[1]}</li>
        <li>{Thailand.landmarks[2]}</li>
        <li>{Thailand.landmarks[3]}</li>
        <li>{Thailand.landmarks[4]}</li>
        <li>{Thailand.landmarks[5]}</li>
      </ul>
    </div>
  )
}

export default Country
