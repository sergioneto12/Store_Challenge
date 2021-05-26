// import axios from 'axios';
// import React, { useState } from 'react';
// import { Forms } from '../Styles/styles';
// import { Card, CardWrapper } from '../Styles/styles';

// export default function SearchBar() {

//     const [isActive, setIsActive] = useState(false);
//     if (lista !== null) {
//         setIsActive(true);
//     };

//     const [listas, setListas] = useState([]);

//     const { data } = async () => {

//         await axios.get(`http://localhost:5000/Products`, {
//             params: {
//                 tipo: filter
//             }
//         }), [setListas]
//     }

//     const [filter, setFilter] = useState('');

//     function Selection() {
//         if (isActive == true) {
//             return (
//                 <Card>
//                     {listas.map(lista => {
//                         <CardWrapper key={lista.id}>
//                             <h1>{lista.nome}</h1>
//                             <img src={lista.url} alt='img' />
//                             <h2>R$ {lista.valor}</h2>
//                             <div>
//                                 <button className='b1'><i class="far fa-edit"></i></button>
//                                 <button className='b2'><i class="far fa-trash-alt"></i></button>
//                             </div>
//                         </CardWrapper>
//                     })}
//                 </Card>
//             )
    
//         }
//     }

//     return (
//         <Forms method='GET'>
//             <input placeholder='&#x1F50E;&#xFE0E; Search' onChange={(e) => setFilter(e.target.value)}></input>
//             <button type='submit' onClick={Selection()}>Pesquisar</button>
//         </Forms>  
//     )
// }

