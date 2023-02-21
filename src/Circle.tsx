import styled from "styled-components"
import { useState } from "react";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: ${props => props.bgColor};
    border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

function Circle({bgColor, borderColor}: CircleProps){
    const [value, setValue] = useState(0);
    setValue(1)
    return  <Container bgColor={bgColor} borderColor={borderColor ?? "white" }/>;
}

export default Circle;

interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (player: PlayerShape) => `Hello ${player.name}! You are ${player.age} years old!`;

sayHello({name: "John", age: 20});
sayHello({name: "Kim", age: 21})