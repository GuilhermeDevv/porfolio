import React from 'react';
import { ContainerMyProject } from './style';

export function MyProject({ img, hrefCode, hrefProjeto }) {
    return (
        <ContainerMyProject img={img}>
            <div>
                <button><a target='_blank' href={hrefCode}>CODE </a></button>
                <button><a target='_blank' href={hrefProjeto}>PROJETO</a></button>
            </div>
        </ContainerMyProject>
    );
}

