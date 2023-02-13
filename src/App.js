import styled from 'styled-components';

const Father = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
  `;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
  `;

const Text = styled.span`
  color: #fff;
  `;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text>Text</Text>
      </BoxOne>
      <BoxTwo />
    </Father>
  );
}

export default App;
