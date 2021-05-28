import React, { useEffect, useState } from 'react';
import { Card, CardWrapper, Forms } from '../Styles/styles';
import axios from 'axios';

export default function Objects() {
    const [objects, setObjects] = useState([]);
    const [term, setTerm] = useState('');

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
        console.log(object)
        axios.delete(`https://storechallenge12.herokuapp.com/Products/` + object)
        //await axios.delete(`http://localhost:5000/Products/:id`)
            .then(function (res) {
                console.log("Removido com sucesso!");
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    async function handlePatch() {
        //axios.patch(`https://storechallenge12.herokuapp.com/Products/:id`)
        await axios.patch(`http://localhost:5000/Products/:id`)
            .then(res => {
                console.log(res);
                this.setState({ objects: res.data });
            })
            .catch(err => {
                console.log(err);
                this.setState(err);
            })
    };

    return (
        <div>
            <Forms method='GET'>
                <input type='text' placeholder='&#x1F50E;&#xFE0E; Search' onChange={event => { setTerm(event.target.value) }}></input>
                <button type='submit'>Pesquisar</button>
            </Forms>
            <Card>
                {objects.filter(object => {
                    if (term == "") {
                        return object
                    } else if (object.tipo.toLowerCase().includes(term.toLocaleLowerCase())) {
                        return object
                    }
                }).map((object) =>
                    <CardWrapper key={object.id}>
                        <h1>{object.nome}</h1>
                        <img src={object.url} alt='img' />
                        <h2>R$ {object.valor}</h2>
                        <div>
                            <button className='b1' onClick={handlePatch}><i className="far fa-edit"></i></button>
                            <button className='b2' onClick={() => handleDelete(object.id)}><i className="far fa-trash-alt"></i></button>
                        </div>
                    </CardWrapper>
                )}
            </Card>
        </div>
    )
}