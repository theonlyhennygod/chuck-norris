import { useState, useEffect } fom "react";
import axios from "axios";


const Card = () => {

    const [data, setData] = useState({});

    useEffect(() => {

        axios.get('https://api.chucknorris.io/jokes/random')
            .then((response) => {
                console.log(response);
                console.log(response.data);
                setData(response.data);
            })
            .catch ((error) => {
                console.error('error fetching data:', error);
            });
    }, []);

    return (
        <div className="card">
            <div className="card-content">
                <h2>hello</h2>
                <p>pastime</p>
            </div>
        </div>

    );
}