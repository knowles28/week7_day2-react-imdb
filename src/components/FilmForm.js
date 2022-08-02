import { useState } from "react";

const FilmForm = ({onFilmSubmit}) => {

    const [name, setName] = useState("");
    const [url, setUrl] = useState("");


    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleUrlChange = (e) => {
        setUrl(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const nameToSubmit = name.trim();
        const urlToSubmit = url.trim();

        if (!nameToSubmit || !urlToSubmit){
            return
        }
    
        onFilmSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        });

        setName("");
        setUrl("");
    }
    
    return (
        <form className="film-form" onSubmit={handleFormSubmit}>
        <input 
        type="text" 
        placeholder="Film Title" 
        value={name}
        onChange={handleNameChange}
        required
        />
        <input 
        type="url" 
        placeholder="Copy URL here" 
        value={url}
        onChange={handleUrlChange}
        required
        />
        <input type="submit" value = "Submit" />
    </form>


    )
}

export default FilmForm;