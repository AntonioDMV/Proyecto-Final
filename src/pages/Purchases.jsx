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
        <div>
            <h1>Purchases</h1>

            <Row xs={1} md={2} lg={3} className="g-4">
                {purchases.map(purchase => (
                    <Link to={`/productDetail/${purchase.product?.id}`}>
                        <Col key={purchase.id}>
                            <Card>
                                <Card.Img variant="top" src={purchase.product?.images?.[0].url} className='img-fluid' />
                                <Card.Body>
                                    <Card.Title>{purchase.product?.title}</Card.Title>
                                    {/* <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text> */}
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