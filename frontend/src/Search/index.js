import axios from 'axios';
import { Card, CardWrapper } from '../Styles/styles';
import React, { useEffect, useState } from 'react';

export default function Search() {
    const [products, setProducts] = useState([]);

    console.log(products)

    useEffect(() => {
        setProducts(getList)
    }, [])

    const getList = async () => {
        await axios.get(`http://localhost:5000/Products`)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        // <Card>
        //     {products.map(product => {
        //         <CardWrapper key={product.id}>
        //             <h1>{product.nome}</h1>
        //             <img src={product.url} alt='img' />
        //             <h2>R$ {product.valor}</h2>
        //             <div>
        //                 <button className='b1'><i class="far fa-edit"></i></button>
        //                 <button className='b2'><i class="far fa-trash-alt"></i></button>
        //             </div>
        //         </CardWrapper>
        //     })}
        // </Card>
    )
}


// export default class Search extends React.Component {
//     state = {
//         objeto: '',
//     };

//     buscaEvento = e => {
//         const valor = e.target.value
//         console.log(valor)
//     }

//     componentDidMount() {
//         axios.get(`http://localhost:5000/Products`)
//             .then(res => {
//                 console.log(res);
//                 this.setState({ objects: res.data })
//             })
//             .catch(err => {
//                 console.log(err);
//                 this.setState(err);
//             });
//     }

//     render() {
//         return (
//             <div>
//                 <Forms method='GET'>
//                     <input placeholder='&#x1F50E;&#xFE0E; Search' name='objeto'></input>
//                     <button type='submit' onClick={(e) => this.buscaEvento(e)}>Pesquisar</button>
//                 </Forms>

//                 <Card>
//                     {this.state.objects.map(object =>
//                         <CardWrapper key={object.id}>
//                             <h1>{object.nome}</h1>
//                             <img src={object.url} alt='img' />
//                             <h2>R$ {object.valor}</h2>
//                             <div>
//                                 <button className='b1'><i class="far fa-edit"></i></button>
//                                 <button className='b2' onClick={this.handleDelete}><i class="far fa-trash-alt"></i></button>
//                             </div>
//                         </CardWrapper>
//                     )}
//                 </Card>
//             </div>
//         )
//     }
// }