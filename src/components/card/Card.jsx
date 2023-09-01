//make a card component that will display the pokemon name and image using the chakra ui card component

import React from "react";
import { useState } from "react";
import { Box, Image, Text, Flex, Button as CButton } from "@chakra-ui/react";

const Card = () => {
    //gambiarra da porra pq o primeiro pokemon da api, tava retornando como undefined
    const firstPokemon = [
        {
            name: "Giratina",
            category: "Ghost/Dragon",
            image_url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9d02b215-7ba2-4a4c-a882-39f19faf9b8e/dannnt3-30109784-9ad7-4ed7-bd7a-da55e9869df0.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlkMDJiMjE1LTdiYTItNGE0Yy1hODgyLTM5ZjE5ZmFmOWI4ZVwvZGFubm50My0zMDEwOTc4NC05YWQ3LTRlZDctYmQ3YS1kYTU1ZTk4NjlkZjAuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Grfqa_OwJoJTLD-zRA8rJ3uIvlli3UxUqwU4YP1RmTs'
        }
    ]
    
    const [pokemon, setPokemon] = useState(firstPokemon)
    const [index, setIndex] = useState(0)
    function nextPokemon() {
        fetch('https://dev-api-teste.mandarin.com.br/pokemons')
        .then(response => response.json())
        //seta a variavel pokemon com o array de pokemons da api
        .then(data => setPokemon(data))
        //se o index for menor que o tamanho do array, ele soma 1 no index, se não, ele volta pro primeiro pokemon
        console.log(pokemon)    
        if (index < pokemon.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#3b6eac",
            height: "100vh",
            flexDirection: "column",
        }}>
            <Box
            maxW="sm"
            w={380}
            h={450}
            placeItems={"center"}
            borderWidth="1px"
            borderRadius="10"
            overflow="hidden"
            boxShadow="10px 10px 75px 0px rgba(0,0,0,0.75)"
            bg="white"
            m="1rem"
            backgroundColor={"#0a203b"}
            >
            <Flex justify="center" align="center" direction="column">
                <Text fontSize="xl" fontWeight="bold" color={"white"} p="1rem">
                {pokemon[index].name}
                </Text>
                <Text fontSize="md" fontWeight="bold" color={"white"} p="1rem">
                {pokemon[index].category}
                </Text>
                <Image
                fit={"contain"}
                src={pokemon[index].background_image_url}
                alt='coisas'
                boxSize="250px"
                borderRadius={'1rem'}
                />
                <Image
                fit={"contain"}
                src={pokemon[index].image_url}
                alt='coisas'
                boxSize="100px"
                position='absolute'
                //center this
                top={230}
                />
            </Flex>
            </Box>
            <CButton onClick={nextPokemon} bg='#c3c3c3' variant='outline'>Next Pokemon</CButton>
        </div>
    );
    }

export default Card;