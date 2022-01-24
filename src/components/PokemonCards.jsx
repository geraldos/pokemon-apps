import React from "react";
import { NavLink } from "react-router-dom";
import { mq_min_width, mq_max_width } from"../libs/common/MediaQueris";
import CONFIG from "../config/Config";
import styled from '@emotion/styled'

const Card = styled.article`
    margin: 16px 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    height: ${props => props.height};
`;

const Div = styled.div`
    ${mq_min_width[3]} {
        padding: 16px 32px 32px 32px;
    }
    padding: 16px 32px 32px 32px;
`;

const H1 = styled.h1`
    ${mq_max_width[1]} {
        font-size: 32px;
    }
    ${mq_min_width[0]} {
        font-size: 32px;
    }

    font-weight: 400;
    transition: 0.3s opacity;
    font-size: 22px;
    hover {
        opacity: 0.5;
    }
    a {
        text-decoration: none;
        color: #be0000;
    }
    color: #be0000;
`;

function CardTemplate(props) {
    return(
        <NavLink to={`pokemon_detail/${props.name}`} style={{ textDecoration: 'none' }}>
            <Card>
                <Img
                    src={`${CONFIG.base_url_image}/${props.url}.png`}
                    alt={props.name}
                    height='100%'/>
                <Div>
                    <H1>{props.name}</H1>
                </Div>    
            </Card>
        </NavLink>
    );
};

export default CardTemplate;