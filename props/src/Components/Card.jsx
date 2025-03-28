function Card({id, productName, price, description}) {
    return (
        <div key={id}>
            <h1>{productName}</h1>
            <p>{description}</p>
            <h3>{price}</h3>
        </div>
    )
}

export default Card