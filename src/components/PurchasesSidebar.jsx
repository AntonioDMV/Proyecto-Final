import { useEffect, useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk, purchaseCartThunk } from '../store/slices/cart.slice';


const PurchasesSidebar = ({ show, handleClose }) => {

    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartThunk())
    }, [])

    console.log(cart);

    let total = 0
    cart.forEach(cart => {
        console.log(cart);
        const productTotal = Number(cart.product.price) * cart.quantity;
        total += productTotal
    });


    const [quantity, setQuantity] = useState('');

    const addToCart = () => {
        const cart = {
            quantity: quantity,
            productId: products.id

        }
        dispatch(addCartThunk(cart));
    }


    const [buttonCard, setButtonCard] = useState(1)

    const increment = () => {
        setButtonCard(buttonCard + 1)
    }

    const decrement = () => {
        setButtonCard(buttonCard - 1)
    }

    


    return (
        <Offcanvas placement={'end'} show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>

                <ul className='cart'>
                    {cart.map(cart => (
                        <li key={cart.productId}>
                            <div className='cart-products-list'>
                                <img className='cart-img' src={cart.product.images?.[2].url} alt="" />
                                {/* <div className='cart-description'>
                                    {cart.product.title}
                                    <input type="text" />
                                </div> */}
                                <div>
                                    <div>
                                        <b>{cart.product.title}</b>
                                    </div>
                                    <div>
                                        <button style={{ border: 'none', width: '30px', height: '30px', borderRadius: '3px' }} onClick={decrement}>-</button>
                                        <input style={{ maxWidth: '40px', textAling: 'center' }}
                                            type="text"
                                            value={quantity}
                                            onChange={e => setQuantity(e.target.value)}
                                            
                                        />
                                    <button style={{ border: 'none', width: '30px', height: '30px', borderRadius: '3px' }} onClick={increment}>+</button>
                                    </div>                                    
                                    
                                </div>
                                <div className='deleteButton'>
                                    <button className='cart-button' ><i class="fa-solid fa-trash-can"></i></button>
                                </div> <br />
                                <p> <b>total: ${cart.product.price}</b> </p> 
                            </div>
                          
                        </li>
                    ))}
                </ul>
                <div className='total'>
                    <hr />
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
                        <h5>total</h5> {total}
                    </div>
                    <Button onClick={() => dispatch(purchaseCartThunk())}>checkout</Button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default PurchasesSidebar;