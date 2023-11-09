import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from "./json/videos.json";

const categories = [
  "Lançamentos 2023",
  "Video Aula - Boss GT 100",
  "Antigos"
]

function filterCategory(id) {
  return videos.filter( video => video.category === categories[id])
}

function App() {
  return (

    <>
     <Header/>
     <Banner image="home" />
     <Container>
     {/* <h2>Lançamentos 2023</h2>
      <section className="cards">
     {videos.map((videos) => {return <Card id={videos.id} key={videos.id} />})}
     </section>*/}

     <Category category={categories[0]}>
     {filterCategory(0).map((videos) => {return <Card id={videos.id} key={videos.id} />})}
     </Category>

     <Category category={categories[1]}>
     {filterCategory(1).map((videos) => {return <Card id={videos.id} key={videos.id} />})}
     </Category>
     <Category category={categories[2]}>
     {filterCategory(2).map((videos) => {return <Card id={videos.id} key={videos.id} />})}
     </Category>

    </Container>
    <Footer />
   </>
  
  );
}

export default App;
