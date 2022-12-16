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
                        Olá me chamo Guilherme, tenho 17 anos sou do Rio de Janeiro/RJ. Estudo constantemente pois minha única competição é comigo mesmo, tento ser melhor todos os dias. Desenvolvo na parte do Front-end a +- 1 ano e 3 meses.
                    </p>
                </EffectRight>
            </ContentSobre>

        </ContainerSobre >

    );
}

