import { useState } from "react";
import { categories } from "../Category";
import styles from "./Form.module.css";

function Form() {

    const [url, setUrl] = useState("")
    const [category, setCategory] = useState("")
    const [videos, setVideos] = useState([])
    const [errors, setErrors] = useState("")



    function validerUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be \/)([a-zA-Z0-9\-_]+)$/

        if (!regex.test(url) || url.length < 43) {
            setErrors('ERRRO: URL inválida!')
            return false
        } else {
            return url.substring(32, 43)
        }
    }

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)

        // validar category
        if (!category || category === '-') {

            setErrors('ERRO: Escolha uma categoria!')
            return
        } else {
            setErrors('')
        }

        //validar url
        const urlVideo = validerUrl(url)
        if (urlVideo && category) {
            
            // guardar a url  e a category
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            // Limpar form
            setUrl('')
            setCategory('')
        } else {
            setErrors('ERRO: URL inválida!')
        }

    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de Vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do Vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do Vídeo"
                        required="required"
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        minLength="43"
                        maxLength="43"
                    />
                </div>
                <div>
                    <label>Categoria</label>
                    <select
                        required="required"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        <option value="-">Selecione uma categoria </option>
                        {categories.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>
                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    );
}

export default Form;
