import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { filterProductsCategoryThuk } from "../store/slices/products.slice";

const ProductDetail = () => {

    const { id } = useParams();
    const [products, setProducts] = useState({});

    const productsSuggested = useSelector(state => state.products)

    const dispatch = useDispatch();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setProducts(res.data)
                dispatch(filterProductsCategoryThuk(res.data.category.id))
            });

    }, [id])

    console.log(products);

    return (
        <div className='ProductDetailPage'>
            {/* <h1>{products.brand}</h1> */}
            <Row>
                {/* DESCRIPCION DEL PRODUCTO */}
                <Col md={7}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={products.images?.[0].url}
                                alt="First slide"
                                style={{ height: 200, objectFit: 'contain' }}
                            />
                            <Carousel.Caption>
                                <br />
                                <br />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={products.images?.[1].url}
                                alt="Second slide"
                                style={{ height: 200, objectFit: 'contain' }}
                            />

                            <Carousel.Caption>
                                <br />
                                <br />
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={products.images?.[2].url}
                                alt="Third slide"
                                style={{ height: 200, objectFit: 'contain' }}
                            />

                            <Carousel.Caption>
                                <br />
                                <br />
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                {/* DESCRIPCION DE PRODUCTOS */}
                <Col md={5}>
                    <Card style={{ width: '18rem', border: 'none' }}>
                        <Card.Body>
                            <Card.Title><b>{products.title}</b></Card.Title>
                            <Card.Text>
                            {products.description} <br /> <br />
                            <h6>Price</h6>
                            <b>${products.price}</b>

                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <h3 className='my-5'>Discover similar products</h3>
                {/* PRODUCTOS RELACIONADOS */}
                <Col>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {productsSuggested.map(productSuggested => (
                            <Col key={productSuggested.id} className='my-5'>
                                <Card onClick={() => navigate(`/productDetail/${productSuggested.id}`)}>
                                    <Card.Img className='suggestedimg'
                                        variant="top" src={productSuggested.images?.[0].url}
                                        style={{ height: 200, objectFit: 'contain' }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{productSuggested.title}</Card.Title>
                                        <Card.Text>
                                            <b>${productSuggested.price}</b>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {/* <p>{products.title}</p>
            <img src={products.images?.[0].url} alt="" />
            <p>{products.description}</p> */}


        </div>

    );
};

export default ProductDetail;