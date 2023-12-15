import {Component} from "react";
import style from "./PersonCard.module.css";

class PersonCard extends Component {
    render() {

        const {firstName, lastName, age, hairColor} = this.props;

        return(
            <div className={style.card}>
                <h1>{lastName}, {firstName}</h1>
                <p>Edad: {age}</p>
                <p>Color Cabello: {hairColor}</p>
            </div>
        )
    }
}

export default PersonCard;