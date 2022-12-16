import React from 'react';
import { CardTech } from './styles';

export function MyTech({ src, alt, name, color }) {
    return (

        <CardTech color={color}>
            <img src={src} alt={alt} />
            <h3>{name}</h3>
        </CardTech>

    );
}

