import React, { useEffect, useState } from 'react';
import { Card, CardWrapper, Forms, Imagem, SearchTitle } from '../Styles/styles';
import axios from 'axios';

export default function Objects() {
    const [objects, setObjects] = useState([]);
    const [term, setTerm] = useState('');
    // const [item, setItem] = useState([])

    useEffect(() => {
        axios.get(`https://storechallenge12.herokuapp.com/Products`)
            //axios.get(`http://localhost:5000/Products`)
            .then(res => {
                setObjects(res.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    async function handleDelete(object) {
        axios.delete(`https://storechallenge12.herokuapp.com/Products/` + object)
            //await axios.delete(`http://localhost:5000/Products/:id`)
            .then(function (res) {
                console.log("Removido com sucesso!");
                alert('Removido com sucesso');
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    async function handlePatch(object) {
        let resposta = window.prompt('O que você deseja modificar (nome, valor, tipo ou url da foto)?');
        console.log(resposta);

        if (resposta === 'nome') {
            await axios.patch(`https://storechallenge12.herokuapp.com/Products/` + object, {
                nome: window.prompt('Qual é o novo nome, então? '),
            })
                .then(res => {
                    console.log(object);
                    alert('Atualizado com sucesso');
                    document.location.reload(true)
                })
                .catch(err => {
                    console.log(err);
                })
        } 

        if (resposta === 'tipo') {
            await axios.patch(`https://storechallenge12.herokuapp.com/Products/` + object, {
                tipo: window.prompt('Qual é o novo tipo, então? '),
            })
                .then(res => {
                    console.log(object);
                    alert('Atualizado com sucesso');
                    document.location.reload(true)
                })
                .catch(err => {
                    console.log(err);
                })
        } 

        if (resposta === 'valor') {
            await axios.patch(`https://storechallenge12.herokuapp.com/Products/` + object, {
                valor: window.prompt('Qual é o novo valor, então? '),
            })
                .then(res => {
                    console.log(object);
                    alert('Atualizado com sucesso');
                    document.location.reload(true)
                })
                .catch(err => {
                    console.log(err);
                })
        } 

        if (resposta === 'imagem') {
            await axios.patch(`https://storechallenge12.herokuapp.com/Products/` + object, {
                url: window.prompt('Qual é a nova url, então? '),
            })
                .then(res => {
                    console.log(object);
                    alert('Atualizado com sucesso');
                    document.location.reload(true)
                })
                .catch(err => {
                    console.log(err);
                })
        } 
    };

    return (
        <div>
            <Imagem/>
            <SearchTitle>Pesquise por nome ou tipo para encontrar seu calçado ideial!</SearchTitle>
            <Forms method='GET'>
                <input
                    type='text'
                    placeholder='&#x1F50E;&#xFE0E; Search'
                    onChange={
                        event => { setTerm(event.target.value) }
                    }>
                </input>
                {/* <button type='submit'>Pesquisar</button> */}
            </Forms>
            <Card>
                {objects.filter(object => term === "" || object.tipo.toLowerCase().includes(term.toLocaleLowerCase()) || object.nome.toLowerCase().includes(term.toLocaleLowerCase())
                ).map((object) =>
                    <CardWrapper key={object.id}>
                        <h1>{object.nome}</h1>
                        <img src={object.url} alt='img' />
                        <h2>R$ {object.valor}</h2>
                        <div>

                            <button
                                className='b1'
                                onClick={
                                    () => handlePatch(object.id)
                                }
                            >
                                <i className="far fa-edit"></i>
                            </button>

                            <button
                                className='b2'
                                onClick={
                                    () => handleDelete(object.id)
                                }
                            >
                                <i className="far fa-trash-alt"></i>
                            </button>

                        </div>
                    </CardWrapper>
                )}
            </Card>
        </div>
    )
}