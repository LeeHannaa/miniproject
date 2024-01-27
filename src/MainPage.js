import styled from "styled-components";
import MultiActionAreaCard from "./components/MultiActionAreaCard";
import axios from "axios";
import { useState, useEffect } from "react";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-items: center;
`;
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100vh;
  width: 70%;
  align-items: center;
`;

function MainPage() {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setInfos(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Div>
      <Main>
        {infos.map((info) => (
          <MultiActionAreaCard key={info.id} info={info} />
        ))}
      </Main>
    </Div>
  );
}

export default MainPage;
