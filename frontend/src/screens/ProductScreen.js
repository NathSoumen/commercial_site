import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import axios from 'axios'

// import {data} from '../data'

export default function ProductScreen(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data)
        }
        fetchData();
    }, [])

    const product = products.find(x => x._id === props.match.params.id)
    if (!product) return <div> Product Not Found</div>
    return (
        <div>
            <Link to='/' > Back to result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </li>
                        <li>Price : $ {product.price}    </li>
                        <li>Description :
                            <p>{product.description}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">{product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                    <div >
                                        {product.countInStock > 0 ? <span className="sucess">In Stock</span> :
                                            <span className="error">Unavaiable</span>}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <button className="primary block">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
