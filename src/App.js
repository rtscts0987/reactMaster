import styled, {keyframes} from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
`;

const animation = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Emoji = styled.span`
  font-size: 100px;
`;


const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  background-color: tomato;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  animation: ${animation} 1s ease-in-out infinite;
  ${Emoji} {
    font-size: 100px;
    animation: ${rotationAnimation} 1s ease-in-out infinite;
    &:hover {
      font-size: 200px;
      animation-play-state: paused;
    }
    &:active {
      opacity: 0;
    }
  }
  
`;

function App() {
  return (
    <Wrapper>
      <Title>Ha hahahah</Title>

    </Wrapper>
  );
}

export default App;
