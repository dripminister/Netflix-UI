import Featured from "./components/Featured"
import Section from "./components/Section"

function App() {

  const APIUrls = {
    //Get your API KEY and URL on https://www.themoviedb.org/
    popular: ,
    trending: ,
    topRated: ,
    upcoming: ,
    horror: 
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
