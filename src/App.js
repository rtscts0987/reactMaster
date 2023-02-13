import styled from 'styled-components';

const Father = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
  `;

const Circle = styled(Box)`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  `;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
