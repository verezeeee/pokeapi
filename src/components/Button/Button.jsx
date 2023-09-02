import React from 'react'
import { Button } from "@chakra-ui/react";

const MButton = ({text, func}) => {
  return (
    <Button
    onClick={func}
    w={120}
    h={10}
    p={'4%'}
    borderRadius={5}
    fontSize={"clamp(6px, 5vw, 1rem)"}
    fontWeight={"600"}
    color={"#444"}
    backgroundColor={"#fff"}
    boxShadow={"-2px 3px 0 #888888, -4px 5px 0 #2c2c2c"}
    _active={{
        backgroundColor: "#353535",
        boxShadow: "inset -4px 4px 0 #222",
        fontSize: "0.9rem",
        color: "#fff",
    }}
    >{Object.values(text)}</Button>
  )
}

export default MButton