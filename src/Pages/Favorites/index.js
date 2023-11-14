import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import styles from "./Favorites.module.css";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButton from "../../components/ScrollToTopButton";


function Favorites() {
    const { favorite } = useFavoriteContext()


    return (
        <>
            <ScrollToTopButton />
            <Header />
            <Container>

                <section className={styles.favorites}>
                    <h2>Meus Favoritos</h2>
                    {<VideoList videos={favorite} emptyHeading="Adicione Favoritos aqui!" />}
                </section>
            </Container>
            <Footer />
        </>
    );

}

export default Favorites;