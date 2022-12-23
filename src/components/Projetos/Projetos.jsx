import React from 'react';
import { TextPage } from '../TextPage/TextPage';
import { EffectLeft, EffectRight } from '../Effects/Effects'
import { ContainerProjetos, ContentProjetos, ContentMyProject } from './style';
import { MyProject } from '../MyProject/MyProject';
import RickAndMorty from '../../images/rickandmorty.jpg'
import QRCODE from '../../images/QRCODE.jpg'
export function Projetos() {
    return (
        <ContainerProjetos id='Projetos'>
            <ContentProjetos>
                <EffectLeft>
                    <TextPage namePage='Meus Projetos' />
                    <h4>Verifique meus projetos:</h4>
                </EffectLeft>
                <EffectRight>
                    <ContentMyProject >
                        <div>
                            <MyProject img={RickAndMorty} hrefCode='https://github.com/GuilhermeDevv/rickandmorty' hrefProjeto='https://rickandmorty-lemon-one.vercel.app' />
                        </div>
                        <div>
                            <MyProject img={QRCODE} hrefCode='https://github.com/GuilhermeDevv/qrcode' hrefProjeto='https://qrcode-orcin-nine.vercel.app' />
                        </div>
                    </ContentMyProject >
                </EffectRight>
            </ContentProjetos>
        </ContainerProjetos >
    );
}

