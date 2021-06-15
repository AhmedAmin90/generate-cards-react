import React, {Component} from 'react';


class Card extends Component {
    constructor(props){
        super(props);
        let angel = Math.random() * 90;
        let x = Math.random() * 40;
        let y = Math.random() * 40;
        this._transform = `translate(${x}px, ${y}px) rotate(${angel}deg)`
    }
    render(){
        return(
           
            <img className="Card" style={{transform: this._transform}}  src={this.props.image} alt={this.props.name} />
            
        )
    }
}

export default Card