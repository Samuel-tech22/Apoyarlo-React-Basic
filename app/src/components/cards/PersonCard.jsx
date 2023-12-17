import { Component } from "react";
import style from "./PersonCard.module.css";

class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            edad: Number(this.props.age)
        };
    }

    birthday = () => {
        this.setState((prevState) => ({
            edad: prevState.edad += 1
        }));
    }

    render() {

        const { firstName, lastName, hairColor } = this.props;

        const { edad } = this.state;

        return (
            <div className={style.card}>
                <h1>{lastName}, {firstName}</h1>
                <p>Edad: {edad}</p>
                <p>Color Cabello: {hairColor}</p>
                <button onClick= { this.birthday }>Birthday Button For: {lastName}</button>
            </div>
        )
    }
}

export default PersonCard;