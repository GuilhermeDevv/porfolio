import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css'

import html from '../../images/html.png'
import react from '../../images/react.png'
import css from '../../images/css.png'
import js from '../../images/jsLogoo.png'
import hookForm from '../../images/hookForm.png'
import reacticon from '../../images/ReactIcon.svg'
import styledComponents from '../../images/styled.png'



import { EffectLeft, EffectRight } from '../Effects/Effects'
import { TextPage } from '../TextPage/TextPage';
import { MyTech } from '../MyTech/MyTech'
import { ContainerTecnologia, ContentTecnologia, Techh } from './styles';

export function Tech() {
    AOS.init()
    return (
        <ContainerTecnologia id='Tech'>

            <ContentTecnologia>
                <EffectLeft>
                    <TextPage namePage='TECNOLOGIAS' />
                </EffectLeft>
                <EffectRight>
                    <Techh>
                        <div>
                            <MyTech src={html} alt='HTML' name='HTML' color="rgb(241 101 41)" />
                        </div>
                        <div>
                            <MyTech src={css} alt='CSS' name='CSS' color='#0277bd' />
                        </div>
                        <div >
                            <MyTech src={js} alt='JAVASCRIPT' name='JAVASCRIPT' color='#ffd600' />
                        </div>
                        <div>
                            <MyTech src={react} alt='REACT' name='REACT' color='#01d7fe' />
                        </div>
                        <div >
                            <MyTech src={reacticon} alt='REACT ICONS' name='REACT ICONS' color='#e91e63' />
                        </div>
                        <div>
                            <MyTech src={hookForm} alt='REACT HOOK FORM' name='HOOK FORM' color='#ec5990' />
                        </div>
                        <div>
                            <MyTech src={styledComponents} alt='STYLED COMPONENTS' name='STYLED COMPONENTS' color='#e8b6e9' />
                        </div>
                    </Techh>
                </EffectRight>
            </ContentTecnologia>

        </ContainerTecnologia>
    );
}

