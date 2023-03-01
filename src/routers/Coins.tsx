import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useState,useEffect} from 'react';
import imsi from './Imsi'


const Container = styled.div`
    padding: 0px 20px;
`;

const Header = styled.header`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
    background-color: white;
    color:${(props) => props.theme.bgColor};
    border-radius: 15px;
    margin-bottom: 10px;
    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: flex;
        align-items: center;
    }
    &:hover {
        a {
            color:${(props) => props.theme.accentColor}
        }
    }
`;


const Title = styled.h1`
    font-size: 50px;
    color:${(props) => props.theme.accentColor};
`;

const Img = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 10px;
`;

const Lodder = styled.span`
    color: red;
    font-size:100px;
    text-align: center;

`;

interface CoinInterface {
    "id": string,
    "name": string,
    "symbol": string,
    "rank": number,
    "is_new": boolean,
    "is_active": boolean,
    "type": string
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loding, setLoding] = useState(true);
    useEffect( () => {
        (async() => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            let json = await response.json();
            setCoins(json.slice(0,100));
            setLoding(false);
        })();
        const json = imsi;
        setCoins(json.slice(0,100));
        setLoding(false);
    },[])
    
    return (
        <>
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            {loding ? <Lodder>Lodding....</Lodder> : (
                <CoinsList>
                    {coins.map(coin => 
                        <Coin key={coin.id}>
                            <Link
                                to={{
                                pathname: `/${coin.id}`,
                                state: { name: coin.name },
                                }}
                            >
                                <Img
                                src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                />
                                {coin.name} &rarr;
                            </Link>
                        </Coin> )}
                    
                </CoinsList>
                )
            }
        </Container>
        </>
    );
};

export default Coins;