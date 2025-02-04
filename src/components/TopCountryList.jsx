const TopCountryList = (props) => {
  return (
    <div>
      <img class="countryFlags" src={props.flag}></img>
      <ul class="countryListItems">
        <li>{props.countryName}</li>
      </ul>
    </div>
  )
}

export default TopCountryList
