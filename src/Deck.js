import React , {Component} from 'react';
import axios from 'axios';
import Card from './Card';

const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";


class Deck extends Component {
    state = {decl : null, cards: []}

    async componentDidMount() {
        let deck = await axios.get(API_URL)
        this.setState({deck: deck.data})
    }

     getCard = async () => {
        let id = this.state.deck.deck_id;
        const url = `https://deckofcardsapi.com/api/deck/${id}/draw/`;
        try {   
            let dataRes = await axios.get(url);
            console.log(dataRes.data);
            if (!dataRes.data.success) {
                throw new Error("No remaining cards")
            }
            let card = dataRes.data.cards[0];
            this.setState(st =>(
                {cards: [...st.cards,
                {
                    id: card.code,
                    image: card.image,
                    name: `${card.value} of ${card.suit}`
                }
                ]}
            ))

        }
        catch (err) {
            alert(err)

        }
    
    }

    render(){
         const createCards = this.state.cards.map(c => (
             <Card key={c.id} image={c.image} name={c.name}/>
         ))
        return(
            <div className="Deck">
                 <h1>Test Deck</h1>
                 <button onClick={this.getCard}> Get a CARD !</button>
                {createCards}
            </div>
           
        )
    }
} 

export default Deck