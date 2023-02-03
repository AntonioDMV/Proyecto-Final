import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurchasesThunk } from '../store/slices/Purchases.slice';

const Purchases = () => {

    const purchases = useSelector(state => state.purchases);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchasesThunk())
    }, [])

    return (
        <div className='purchases' style={{textDecoration: 'none'}}>
            <h1> My Purchases</h1>

            <Row xs={1} md={2} lg={3} className="g-4">
                {purchases.map(purchase => (
                    <Link className='purchasesLink' to={`/productDetail/${purchase.product?.id}`}>
                        <Col key={purchase.id}>
                            <Card className='card'>
                                <Card.Img className='card-img' variant="top" src={purchase.product?.images?.[0].url}  style={{height: 200, objectFit: 'contain'}} />
                                <Card.Body>
                                    <Card.Title style={{textDecoration: 'none'}}>{purchase.product?.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Link>
                ))}
            </Row>

        </div>
    );
};

export default Purchases;