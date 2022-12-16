import React from 'react';
import { Sobre } from '../components/About/About';
import { Contato } from '../components/Contato/Contato';


import { Header } from '../components/Header/Header';
import { Projetos } from '../components/Projetos/Projetos';
import { Section } from '../components/Section/Section';

import { Social } from '../components/Social/Social';
import { Tech } from '../components/Tecnologia/Tecnologia';

export function Home() {

    return (
        <>

            <Header />
            <Social />
            <Section />
            <Sobre />
            <Tech />
            <Projetos />
            <Contato /> 

        </>
    );
}

