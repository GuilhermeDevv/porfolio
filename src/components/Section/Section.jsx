import React, { useState, useContext, useRef, useEffect } from 'react';
import { EffectLeft, EffectRight } from '../Effects/Effects'
import { Contexto } from "../../contexts/ValueMenu"
import AOS from 'aos';
import 'aos/dist/aos.css'

import { ContainerSection, MyPerson, ButtonCv, ContentInfoMy, MyImg } from './style';
import pdf from './CV.pdf'
export function Section() {
    AOS.init();
    const { menu, setMenu } = useContext(Contexto)
    const [textoArray, setTextoArray] = useState('')
    const texto = useRef('');

    function typeWrite() {
        const teste = texto.current.innerText.split('')
        texto.current.innerHTML = ''
        teste.forEach((letra, i) => {
            setTimeout(() => texto.current.innerHTML += letra, 70 * i)
        });

    }
    useEffect(() => { typeWrite() }, [])


    return (


        <ContainerSection style={{ zIndex: menu ? 0 : -1 }}>
            <ContentInfoMy>

                <MyPerson>
                    <h3>Olá, eu sou</h3>
                    <h1>Guilherme Santos</h1>
                    <p ref={texto}>Desenvolvedor Front End Júnior.</p>
                    <ButtonCv>
                        <a href={pdf} download> Download CV</a>
                    </ButtonCv>
                </MyPerson>

                <EffectRight>
                    <MyImg />
                </EffectRight>
            </ContentInfoMy>

        </ContainerSection >


    );
}

