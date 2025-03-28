import { cardsData } from "../Data/cardsData"
import Card from "./Card"

function DisplayCards() {
    return (
        <div className="cards-container">
            {cardsData.map((card, index) => {

                // {id : 1, productName : "phone", price : 300, description : "abcd"}
                return (
                    <Card
                        id={card.id}
                        productName={card.productName}
                        price={card.price}
                        description={card.description}
                    />
                )
            })}
        </div>
    )
}

export default DisplayCards