import styled from 'styled-components';

const Father = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Btn = styled.button`
  color:white;
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  `;

function App() {
  return (
    <Father>
      <Btn bgColor="red">Log in</Btn>
      <Btn as="a" href="/" bgColor="red">sssfdafdsf</Btn>
    </Father>
  );
}

export default App;
