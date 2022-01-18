import React, { useState, useEffect } from "react";
import { mq_min_width, mq_max_width } from "../../../libs/common/MediaQueris";
import PokemonResource from "../../../data/pokemon-resources";
import CardTemplate from "../../../components/PokemonCards";
import HeaderTitle from "../../../components/HeaderTitle";
import styled from '@emotion/styled';

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
`

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
    }
    display: grid;
    grid-row-gap: 16px;
`

function PokemonList() {
    const [data, setData] = useState({});
    const fetchData = async () => {
        const pokemon = await PokemonResource.pokemonList();
        setData(pokemon);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const list = Array.isArray(data) && data.length > 0 && data.map((item) => {
        const id = item.url.split("/")[6];
        return (
            <CardTemplate key={id} name={item.name} url={id} /> 
        );  
    })
    
    return(
        <Main>
            <Section>
                <Div>
                    <HeaderTitle name='List All Pokemon' size='40px'></HeaderTitle>
                    <DivList>
                        {list}
                    </DivList>
                </Div>
            </Section>
        </Main>
    );
}

export default PokemonList;