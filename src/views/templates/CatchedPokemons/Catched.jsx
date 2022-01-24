import React from "react";
import { mq_min_width, mq_max_width } from "../../../libs/common/MediaQueris";
import db from "../../../data/Database";
import CardTemplateCatched from "../../../components/PokemonCatched";
import HeaderTitle from "../../../components/HeaderTitle";
import styled from '@emotion/styled';
import { useLiveQuery } from "dexie-react-hooks";

const Main = styled.main`
    ${mq_max_width[2]} {
        padding: 12px;
    }
`;

const Section = styled.section`
    padding: 30px;
`;

const Div = styled.div`
    width: 100%;
    margin: 60px auto;
    text-align: center;
`;

const H1NoData = styled.h1`
    font-size: 40px;
    margin-top: 200px;
    color: #be0000;
`;

const DivList = styled.div`
    ${mq_min_width[4]} {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 10px;
        grid-row-gap: 16px;
    }
    ${mq_min_width[6]} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-row-gap: 32px;
    }
    display: grid;
    grid-row-gap: 16px;
`;

function PokemonCatchedList() {
    const allItems = useLiveQuery(() => db.pokemons.toArray() , []);
    if(!allItems) return null;
    
    const list = Array.isArray(allItems) && allItems.length > 0 && allItems.map((item) => {
        return (
            <CardTemplateCatched key={item.id} id={item.id} name={item.pokemon_name} url={item.id_pokemon} /> 
        );  
    });
    
    return(
        <Main>
            <Section>
                <Div>
                    <HeaderTitle name='List Catched Pokemon' size='40px'></HeaderTitle>
                    {
                        allItems.length === 0 
                        ? <H1NoData> You don't have pokemon </H1NoData>
                        : <DivList>
                            {list}
                        </DivList>
                    }
                </Div>
            </Section>
        </Main>
    );
}

export default PokemonCatchedList;