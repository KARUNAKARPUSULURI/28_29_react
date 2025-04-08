const Search = ({ searchProps }) => {
    return (
        <>
            <input type={searchProps.type} placeholder={searchProps.placeholder} id={searchProps.id} />
        </>
    )
}

export default Search