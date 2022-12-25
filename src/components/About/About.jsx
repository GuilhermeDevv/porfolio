import React from 'react';
import { EffectLeft, EffectRight } from '../Effects/Effects'
import { ContainerSobre, ContentSobre } from './styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TextPage } from '../TextPage/TextPage';
export function Sobre() {
    AOS.init()
    return (

        <ContainerSobre id="Sobre" >

            <ContentSobre>
                <EffectLeft >
                    <TextPage namePage='Sobre' />
                </EffectLeft>

                <EffectRight>
                    <p>
                        Desenvolvedor front-end junior experiente com habilidades em HTML, CSS, JavaScript, React, Node.js, Express e MongoDB. Proativo e dedicado, com uma paixão por aprender novas tecnologias e solucionar problemas.
                        <br />
                        Desenvolvo sites e aplicativos web usando HTML, CSS, JavaScript e outras tecnologias, veja no tópico de <a href="#Projetos">PROJETOS</a>
                    </p>
                </EffectRight>
            </ContentSobre>

        </ContainerSobre >

    );
}

