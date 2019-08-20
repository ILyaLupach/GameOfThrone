import React, {Component} from 'react';
import Spiner from "../spiner/spiner";
import Error from "../error/error";
import GotService from "../../services/gotServices";
import './randomChar.css';


export default class RandomChar extends Component {
    
    constructor() {
        super();
        this.updateChar();
        /* setInterval(this.onCharLoaded, 5000); */
    }
       
    got = new GotService();
    
    state = {
        char: {},
        loading: true,
        error: false
    }
    
    
    onCharLoaded = async (char) => {
        if (char.born === "") {
            await this.updateChar();}
        this.setState({char, loading: false})
    };
    
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateChar() {
        const id = Math.floor(Math.random()*140+25);
        this.got.getCharacters(id)
        .then(this.onCharLoaded)
        .catch((this.onError))
    }


    render() {

        let {char, loading, error} = this.state;
  
        const content = error ? <Error/> : ((!loading) ? <View char={char}/> : <Spiner />);


        return (
            <div className="random-block rounded">
              {content}
            </div>
        );
    }
}

const View = (state) => {

    let {char: {name, gender, born, died, culture}} = state;

    
    born = (born === "") ? "is unknown" : born;
    died = (died === "") ? "is unknown" : died;
    culture = (culture === "") ? "is unknown" : born;

    return (
        
        <>
          <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}