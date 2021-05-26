import React from 'react';
import { Card, CardWrapper } from '../Styles/styles';
import axios from 'axios';
import Search from '../Search';
import SearchBar from '../SearchBar.js';

export default class Objects extends React.Component {
    constructor() {
        super();
        this.state = {
            objects: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/Products`)
            .then(res => {
                console.log(res);
                this.setState({ objects: res.data })
            })
            .catch(err => {
                console.log(err);
                this.setState(err);
            });
    }

    handleDelete = event => {
        event.preventDefault();
        axios.delete(`http://localhost:5000/Products/:id`)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handlePatch = event => {
        event.preventDefault();
        axios.patch(`http://localhost:5000/Products/:id`)
            .then(res => {
                console.log(res);
                this.setState({ objects: res.data });
            })
            .catch(err => {
                console.log(err);
                this.setState(err);
            })
    };

    render() {
        return (
            <div>
                <SearchBar />
                <Card>
                    {this.state.objects.map(object =>
                        <CardWrapper key={object.id}>
                            <h1>{object.nome}</h1>
                            <img src={object.url} alt='img' />
                            <h2>R$ {object.valor}</h2>
                            <div>
                                <button className='b1' onClick={this.handlePatch}><i className="far fa-edit"></i></button>
                                <button className='b2' onClick={this.handleDelete}><i className="far fa-trash-alt"></i></button>
                            </div>
                        </CardWrapper>
                    )}
                </Card>
            </div>
        )
    }
}