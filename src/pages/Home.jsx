import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Accordion, Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProductsCategoryThuk, filterProductsTitleThunk, getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const navigate = useNavigate();

    const [categories, setCategories] = useState([])
    const [productsSearch, setProductSearch] = useState('');

    useEffect(() => {
        dispatch(getProductsThunk());

        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategories(res.data))
    }, [])

    // console.log(categories);

    return (
        <div className='home'>
            <Row>

                {/* Categorias */}
                <Col md={3}>

                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Categories</Accordion.Header>
                            <Accordion.Body>
                                <ListGroup variant="flush">
                                    {
                                        categories.map(category => (
                                            <ListGroup.Item key={category.id} onClick={() => dispatch(filterProductsCategoryThuk(category.id))}
                                                style={{ cursor: 'pointer' }}
                                            >
                                                {category.name}
                                            </ListGroup.Item>
                                        ))
                                    }
                                </ListGroup>


                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                {/* Productos */}
                <Col md={9}>
                    <h1>Home</h1>
                    {/* busqueda de productos */}
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={productsSearch}
                            onChange={e => setProductSearch(e.target.value)}
                        />
                        <Button
                            onClick={() => dispatch(filterProductsTitleThunk(productsSearch))}
                            variant="outline-secondary" id="button-addon2">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </Button>
                    </InputGroup>
                    {/* Lista de productos */}
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {products.map(product => (
                            <Col key={product.id}>
                                <Card className='homeCard' onClick={() => navigate(`/productDetail/${product.id}`)}>
                                    <Card.Img className='HomeCard-img'
                                        variant="top" src={product.images?.[0].url}
                                        // style={{ objectFit: 'contain' }}
                                    />
                                    <Card.Body className='HomeCard-description'>
                                        <Card.Title>{product.title}</Card.Title>
                                        <Card.Text>
                                            {product.brand} ${product.price}
                                        </Card.Text>
                                        
                                    </Card.Body>
                                    <Button variant="primary">add to cart</Button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

        </div>
    );
};

export default Home;