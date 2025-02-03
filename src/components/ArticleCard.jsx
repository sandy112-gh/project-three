const ArticleCard = ({ image, title, date, summary }) => {
  return (
    <div class="articleCardStyle">
      <img class="articleCardImageStyle" src={image} />
      <h4>{title}</h4>
      <p>{date}</p>
      <p>{summary}</p>
    </div>
  )
}

export default ArticleCard
