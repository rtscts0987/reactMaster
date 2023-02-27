import React from 'react';
import { useParams } from 'react-router-dom';

interface RouteParams {
    coinId: string;
}

const Coin = () => {
    const params = useParams<RouteParams>();
    console.log(params.coinId);

    return (
        <div>
            <h1>Coin : {params.coinId}</h1>
        </div>
    );
};

export default Coin;