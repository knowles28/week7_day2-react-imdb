const Film = ({children, url}) => {
    
    return (
        <>
        <li>
        <a href={url} target="_blank">
            {children}
        </a>

        </li>

        </>
    )
}

export default Film;