import React, { useState, useContext } from 'react';


import { Contexto } from '../../contexts/ValueMenu';

import { IconContext } from "react-icons";
import { HiMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'

import logo from "../../images/logo.png"
import { ContainerHeader, ContentHeader, LogoHeader, MenuHeader, NavHeader } from './styles';
import { MenuMobile } from '../MenuMobile/MenuMobile';


export function Header() {

    const { menu, setMenu } = useContext(Contexto)



    return (
        <ContainerHeader  id='Home'>
            <LogoHeader src={logo} alt="logo" />
            <ContentHeader>
                <NavHeader>
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Sobre">Sobre</a></li>
                        <li><a href="#Tech">Tech</a></li>
                        <li><a href="#Projetos">Projetos</a></li>
                        <li><a href="#Contato">Contato</a></li>
                    </ul>
                </NavHeader>
                <MenuHeader>
                    <div onClick={() => setMenu(!menu)}>
                        <IconContext.Provider value={{ size: '40px' }}>
                            {menu ? <HiMenu /> : <AiOutlineClose />}
                        </IconContext.Provider>
                    </div>
                    {menu === false ? <MenuMobile /> : ''}
                </MenuHeader>
            </ContentHeader>
        </ContainerHeader >
    );
}

