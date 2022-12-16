import React, { useContext } from 'react';
import { ContentMenuMobile, ListMobile } from './styles';

import { Contexto } from "../../contexts/ValueMenu"

export function MenuMobile() {
    const { menu, setMenu } = useContext(Contexto)

    return (
        <ContentMenuMobile>
            <ListMobile>
                <ul onClick={() => { setMenu(!menu) }}>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Sobre">Sobre</a></li>
                    <li><a href="#Tech">Tech</a></li>
                    <li><a href="#Projetos">Projetos</a></li>
                    <li><a href="#Contato">Contato</a></li>
                </ul>
            </ListMobile>
        </ContentMenuMobile>

    );
}

