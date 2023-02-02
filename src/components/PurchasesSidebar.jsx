import { useEffect } from 'react';
import { Button, Card, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk, purchaseCartThunk } from '../store/slices/cart.slice';


const PurchasesSidebar = ({ show, handleClose }) => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    console.log(cart);

    return (
        <Offcanvas placement={'end'} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

                <ul className='cart'>
                    {cart.map(cart => (
                        <div>
                            <div className='cart-products-list'>
                                <img className='cart-img' src={cart.product.images?.[2].url} alt="" />
                                <div className='cart-description'>
                                    {cart.product.title}
                                    <input type="text" />
                                </div>
                                <div>
                                    <button className='cart-button' ><i class="fa-solid fa-trash-can"></i></button>
                                </div> <br />
                                <p>total: ${cart.product.price}</p> 
                            </div>
                          
                        </div>
                    ))}
                </ul>
                <div>
                    <Button onClick={() => dispatch(purchaseCartThunk())}>checkout</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default PurchasesSidebar;