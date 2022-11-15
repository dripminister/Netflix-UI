import Featured from "./components/Featured"
import Section from "./components/Section"

function App() {

  const APIUrls = {
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=a38cc71f7352583dc61fce6d872eaf66&language=en-US&page=1`,
    trending: `https://api.themoviedb.org/3/movie/popular?api_key=a38cc71f7352583dc61fce6d872eaf66&language=en-US&page=2`,
    topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=a38cc71f7352583dc61fce6d872eaf66&language=en-US&page=1`,
    upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=a38cc71f7352583dc61fce6d872eaf66&language=en-US&page=1`,
    horror: `https://api.themoviedb.org/3/search/movie?api_key=a38cc71f7352583dc61fce6d872eaf66&language=en-US&query=horror&page=1&include_adult=false`
  }

  return (
    <div className="App">
      <Featured />
      <Section title="Popular" APIUrl={APIUrls.popular}/>
      <Section title="Trending" APIUrl={APIUrls.trending}/>
      <Section title="Top Rated" APIUrl={APIUrls.topRated}/>
      <Section title="Upcoming" APIUrl={APIUrls.upcoming}/>
      <Section title="Horror" APIUrl={APIUrls.horror}/>
    </div>
  )
}

export default App
