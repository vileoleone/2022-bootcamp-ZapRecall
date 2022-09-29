import LISTFORDECK from "./ListForDeck"
import Flashcards from "./Flashcards"

export default function Deck() {

    return(
        <main>
            {LISTFORDECK.map((info, index) => {
                return(
                    <Flashcards
                        key = {index}
                        numberOfQuestion = {info.card}
                        question = {info.FrontQuestion}
                        awnser = {info.BackAnwser}
                    />
                )
            })}

        </main>
            
    )
}