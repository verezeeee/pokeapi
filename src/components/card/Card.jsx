import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import pokedex_1 from "../../assets/pokedex_1.png";

const Card = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const botao = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log(data[index]);
  };
  useEffect(() => {
    axios
      .get("https://dev-api-teste.mandarin.com.br/pokemons")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <box
        style={{
          display: "grid",
          placeItems: "center",
          bg: "white",
          position: "relative",
          padding: "15px",
          marginTop: "2%",
        }}
      >
        <img
          style={{
            maxWidth: "415px",
            width: "100%",
            height: "auto",
          }}
          src={pokedex_1}
          alt="pokedex"
        />
        <h1
          style={{
            position: "absolute",
            top: "56%",
            left: "48%",
          }}
        >
          Nome:
        </h1>
        <h1
          style={{
            position: "absolute",
            top: "56%",
            left: "52%",
          }}
        >
          {data[index]?.name}
        </h1>
        <div style={{
          objectFit:'fill',
        }}>
          <img
            style={{
              position: "absolute",
              top: "32%",
              left: "45%",
              maxWidth: "150px",
              width: "80px",
              height: "80px",
            }}
            src={data[index]?.image_url}
          />
        </div>
        <button onClick={botao}>Next</button>
      </box>
    </div>
  );
};
export default Card;
