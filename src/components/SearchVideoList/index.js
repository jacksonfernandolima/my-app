import styles from "./SearchVideoList.module.css";
import VideoList from "../../components/VideoList";
import { useState } from "react";

// filtrando videos por categoria ou titulo
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}


function SearchVideoList({ videos }) {

    const [ searchText, setSearchText ] = useState('Lançamentos')
    const foundVideos = filterVideos(videos, searchText)


    return (
        <section className={styles.container}>
            <input
               type="search"
               placeholder="pesquisar..." 
               value={searchText}
               onChange={event => setSearchText(event.target.value)}
            />
            <VideoList 
            videos={foundVideos}
            emptyHeading={`Sem vídeos sobre "${searchText}"`}
             />

        </section>
    );
}

export default SearchVideoList;