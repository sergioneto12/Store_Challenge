import React from 'react';
import { Forms } from '../Styles/styles';

export default function SearchBar() {

    const buscaEvento = (e) => {
        const valor = e.target.value
        console.log(valor)
    }

    return (
        <Forms method='GET'>
            <input placeholder='&#x1F50E;&#xFE0E; Search' name='objeto'></input>
            <button type='submit' onClick={(e) => buscaEvento(e)}>Pesquisar</button>
        </Forms>
    )
}

