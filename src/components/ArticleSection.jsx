import ArticleCard from './ArticleCard'

const ArticleSection = () => {
  const cardsData = [
    {
      title: 'Greece for a Week',
      date: '02-01-2025',
      summary: 'What can you do with a week in Greece? Explore the islands.',
      image:
        'https://images.trailfinders.com/asset/191932/TF1644849/Depositphotos_22999984_xl-2015_960x960.jpg?width=300'
    },
    {
      title: 'Japanese Temples',
      date: '01-30-2025',
      summary: 'Explore the stunning shrines and temples of Japan.',
      image:
        'https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg'
    },
    {
      title: 'Top 10 Things to Do in Brazil',
      date: '01-28-2025',
      summary: 'The highlights of traveling through Brazil.',
      image:
        'https://destinationlesstravel.com/wp-content/uploads/2020/04/DSC_0976.jpg.webp'
    },
    {
      title: '20 Best Beaches',
      date: '01-26-2025',
      summary: 'Tired of the snow? Plan to hit the best beaches this summer.',
      image:
        'https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2021/09/most-beautiful-beaches-in-the-world.jpeg?fit=678%2C381&ssl=1'
    },
    {
      title: 'Luxury Ski Resorts in Switzerland',
      date: '01-25-2025',
      summary: 'Visit the best ski resort in Switzerland.',
      image:
        'https://static.independent.co.uk/2023/07/13/16/iStock-467335200.jpg'
    },
    {
      title: 'Where to Celebrate Lunar New Year in China',
      date: '01-21-2025',
      summary:
        'Traveling to China for Lunar New Year? These are the best places to celebrate the new year.',
      image:
        'https://people.com/thmb/VP_KVCLQ9quXpga7Fm-byP4G8Wc=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/lunar-new-year-8-79db07041a3547ed8f3ba616a48e28c6.jpg'
    }
  ]

  return (
    <div class="articleSectionStyle">
      <h2 class="articleSectionTitle">Discover the Wonders of the World:</h2>
      {cardsData.map((card, index) => (
        <ArticleCard
          key={index}
          image={card.image}
          title={card.title}
          date={card.date}
          summary={card.summary}
        />
      ))}
    </div>
  )
}

export default ArticleSection
