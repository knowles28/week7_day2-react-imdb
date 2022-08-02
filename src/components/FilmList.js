import Film from "./Film";

const FilmList = ({films}) => {

    const FilmNodes = films.map(film => {
        return (
            <Film url = {film.url} key ={film.id}>{film.name}</Film>
                
        )
    })

    return (
        <>
        <h3>List</h3>   
        {FilmNodes}
        </>
    )
};

export default FilmList;