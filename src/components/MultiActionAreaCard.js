import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Modal from "react-modal";

export default function MultiActionAreaCard(info) {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const [data, setData] = React.useState();

  const getData = async (infoId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${infoId}`
      );
      const post = await response.json();
      setData(post);
      console.log("text", post);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleButton(detail) {
    getData(detail.id);
    setModalIsOpen(true);
    return;
  }

  return (
    <>
      <Card sx={{ width: "420px", height: "280px", margin: "10px" }}>
        <CardActionArea
          sx={{ width: "420px", height: "200px", margin: "10px" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.info.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {info.info.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => handleButton(info.info)}
          >
            Detail
          </Button>
        </CardActions>
      </Card>
      {data && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            content: {
              width: "500px",
              height: "400px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          ariaHideApp={false}
          contentLabel="Pop up Message"
        >
          <h1 style={{ fontSize: "40px", margin: 0, padding: "0px" }}>TITLE</h1>
          <h1 style={{ fontSize: "30px", margin: 0, marginBottom: "30px" }}>
            {data.title}
          </h1>
          <h1 style={{ fontSize: "40px", margin: 0, padding: "0px" }}>
            CONTENT
          </h1>
          <h2 style={{ margin: 0 }}>{data.body}</h2>
        </Modal>
      )}
    </>
  );
}
