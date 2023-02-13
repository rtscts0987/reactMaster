import styled from 'styled-components';

const Father = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const Input = styled.input.attrs({required:true})`
  width: 100%;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  margin-bottom: 10px;
  `;

function App() {
  return (
    <Father>
      <Input type="text" placeholder="Digite seu nome" />
      <Input type="text" placeholder="Digite seu e-mail" />
      <Input type="text" placeholder="Digite sua senha" />
      <Input type="text" placeholder="Digite sua idade" />

    </Father>
  );
}

export default App;
