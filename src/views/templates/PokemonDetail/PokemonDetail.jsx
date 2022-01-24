import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mq_min_width, mq_max_width } from "../../../libs/common/MediaQueris";
import { MdCatchingPokemon } from "react-icons/md";
import PokemonResource from "../../../data/Pokemon-Resource";
import db from "../../../data/Database";
import styled from "@emotion/styled";

const Main = styled.main`
    ${mq_max_width[2]} {
        padding: 12px;
    }
`;
const Section = styled.section`
    padding: 12px;
`;
const Container = styled.div`
    ${mq_min_width[3]} {
        grid-template-columns: 1fr;
    }
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    grid-template-columns: 1fr;
    gap: 18px 16px;
`;
const H1Title = styled.h1`
    ${mq_max_width[0]} {
        margin: 10px;
        font-size: 40px;
    }
    ${mq_min_width[3]} {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    font-size: 80px;
    grid-column-start: 1;
    grid-column-end: 3;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 10px;
    color: #be0000;
`;
const DivPicture = styled.div`
    ${mq_min_width[4]} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 16px;
    }
    ${mq_min_width[6]} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 16px;
    }
`;
const Img = styled.img`
    ${mq_max_width[0]} {
        width: 100%;
        height: 100%;
    }
    width: 100%;
    max-width: 800px;
`;
const ContainerInfo = styled.div`
    ${mq_min_width[4]} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 16px;
    }
    ${mq_min_width[6]} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 16px;
    }
`;
const ContainerType = styled.div`
    ${mq_min_width[3]} {
        grid-template-columns: 1fr;
    }
    margin-bottom: 20px;
`;
const RoundedBoxType = styled.div`
    border-radius: 25px;
    border: 2px solid #be0000;
    padding: 20px; 
    margin: 10px auto 10px auto;
    width: 85px;
    height: 70px;
`;
const ContainerMove = styled.div`
    margin: auto;
`;
const DivMove = styled.div`
    display: flex;
    justify-content: center;
`
const ScrollMoves = styled.div`
    ${mq_max_width[0]} {
        margin: 10px 64px 64px 64px;
    }
    text-align: center;
    border-radius: 10px;
    border: 2px solid #be0000;
    height: 200px;
    width: 200px; 
    overflow-y: auto;
`;
const ButtonCatchPokemon = styled.div`
    font-size: 18px;
    position: fixed;
    bottom: 16px;
    right: 16px;
    background-color: #db0000;
    color: white;
    border: 0;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function PokemonDetails() {
    let { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    const fetchSinglePokemon = async () => {
        let pokemon_detail = await PokemonResource.pokemonDetail(name);
        setPokemon(pokemon_detail);
    }

    async function CatchPokemons() {
        if (Math.random() < 0.5){
            let id_pokemon = pokemon.id;
            let pokemon_name = prompt("Please choose pokemon's name");
            try {
                await db.pokemons.add({
                    pokemon_name,
                    id_pokemon
                });
                alert(`Congratulations, you got the ${pokemon_name} pokemon`);
            } catch (error) {
                console.log('fail to catch pokemon')
            }
        } else {
            alert('Fail to catch Pokemon, please try again!')
        };
    }

    useEffect(() => {
        fetchSinglePokemon();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return(
        <Main>
            <Section>
                <Container>
                    <H1Title>{pokemon.name}</H1Title>
                    {pokemon.sprites !== undefined && (
                        <DivPicture>
                            <Img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                            <Img src={pokemon.sprites.back_default} alt={pokemon.name}/>
                        </DivPicture>
                    )}
                </Container>
                <ContainerInfo>
                    <ContainerType>
                        <H1Title>Types</H1Title>
                            {
                                Array.isArray(pokemon.types) && pokemon.types.length > 0 && pokemon.types !== undefined && pokemon.types.map((item) => {
                                        return (
                                            item.type !== undefined && (
                                                <RoundedBoxType key={item.type.url.split("/")[6]}><h2>{item.type.name}</h2></RoundedBoxType>
                                            )
                                        )
                                    }
                                )
                            }
                    </ContainerType>
                    <ContainerMove>
                        <H1Title>Moves</H1Title>
                        <DivMove>
                            <ScrollMoves>
                                {
                                    Array.isArray(pokemon.moves) && pokemon.moves.length > 0 && pokemon.moves !== undefined && pokemon.moves.map((item) => {
                                            return (
                                                item.move !== undefined && (
                                                    <h1 key={item.move.url.split("/")[6]} style={{margin: '10px'}}>{item.move.name}</h1>
                                                )
                                            )
                                        }
                                    )
                                }
                            </ScrollMoves>
                        </DivMove>
                    </ContainerMove>
                </ContainerInfo>
            </Section>
            <ButtonCatchPokemon onClick={CatchPokemons} id="catchPokemon">
                <MdCatchingPokemon />
            </ButtonCatchPokemon>
        </Main>
    );
}

export default PokemonDetails;