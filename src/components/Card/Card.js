import { useState, useEffect } from "react";
import axios from "axios";
import './Card.scss';

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setData(response.data);
            })

            .catch((error) => {
                console.error('error fetching data:', error);
            });
    }, []);

    return (
        <div className="card">
            <div className="card__content">
                <h2 className="card__title">{data.value}</h2>
            </div>
        </div>
    );
}

export default Card;