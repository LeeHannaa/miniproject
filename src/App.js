import styled from "styled-components";
import MultiActionAreaCard from "./components/MultiActionAreaCard";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;

function App() {
  return (
    <Div>
      메인페이지
      <MultiActionAreaCard />
    </Div>
  );
}

export default App;
