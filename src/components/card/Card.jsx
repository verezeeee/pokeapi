import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import pokedex_1 from "../../assets/pokedex_1.png";
import { Button as BC } from "@chakra-ui/react";
import MButton from "../Button/Button";

const Card = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const botao1 = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const botao2 = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(data.length - 1);
    }
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
    <div style={{
      width: "100%",
      height: "100%",
      margin: 0,
      padding: 0,
      background: "linear-gradient(to bottom, rgb(148, 241, 148), #fff)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "25px",
    }}>
      <box
        style={{
          display: "grid",
          placeItems: "center",
          bg: "white",
          position: "relative",
          padding: "15px",
          marginTop: "2%",
          height: "100%",
          width: "415px",
        }}
      >
        <img
          style={{
            maxWidth: "415px",
            width: "100%",
            height: "100%",
          }}
          src={pokedex_1}
          alt="pokedex"
        />
        <h1 style={{
          position: "absolute",
          top: "54%",
          fontWeight: "600",
          left: "30%",
          texttransform: "capitalize",
          fontFamily: "Oxanium, cursive",
          fontSize: "clamp(9px, 5vw, 25px)",
        }}>
          <span
            style={{
              color: '#aaa',
            }} class="pokemon__data">
            {data[index] ? data[index].id - 15 : ""} - {/* Subtrai 15 para que a lista comece em 1 */}
          </span>
          <span
            style={{
              color: "#3a444d",
            }}
          >
            {data[index]?.name}
          </span>
        </h1>
        <div style={{
          objectFit: 'fill',
        }}>
          <img
            style={{
              position: "absolute",
              bottom: "55%",
              left: "50%",
              transform: "translate(-63%, 20%)",
              height: "16%",
              zIndex: '2',
            }}
            src={data[index]?.image_url}
          />
          <img
            style={{
              position: "absolute",
              bottom: "51.5%",
              borderRadius: "5%",
              left: "53.2%",
              width: "55.9%",
              transform: "translate(-63%, 20%)",
              height: "25.7%",
              display: 'flex',
              zIndex: '1',
              border: '1px solid #000',
            }}
            src={data[index]?.background_image_url}
          />
        </div>
        <div style={{
          position: 'absolute',
          bottom: '11%',
          left: '50%',
          width: '60%',
          transform: 'translate(-57%, 0)',
          display: 'flex',
          gap: '20px',
        }}>
          <MButton text={'Prev'} func={botao2}></MButton>
          <MButton text={'Next'} func={botao1}></MButton>
        </div>
        <BC
          position={"absolute"}
          w={"20px"}
          h={"40px"}
          borderRadius={"50%"}
          left={"80px"}
          bottom={"170px"}
          backgroundColor={"#888888"}
          _active={{
            backgroundColor: "#353535",
            boxShadow: "inset -4px 4px 0 #222",
            fontSize: "0.9rem",
          }}
          boxShadow={"-2px 3px 0 #13151a"}
        ></BC>
      </box>
    </div >
  );
};
export default Card;