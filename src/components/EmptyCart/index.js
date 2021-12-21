import React from 'react'
import Button from '@material-ui/core/Button';
import emptycart from '../../assets/emptycart.png';
import './index.scss';

function EmptyCart({history}) { 
    const goToHomePage = () => {
        history.push('/')
    }
    return (
        <div className="EmptyCartContainer">
              <img alt="not found" src={emptycart} />
              <div className="text">Your shopping cart is empty .</div>
              <Button
                type='submit'
                variant='contained'
                className='submitButton'
                fullWidth
                color='primary'
                onClick={goToHomePage}
                >
                Home Page
            </Button>
        </div>
    );
}

export default EmptyCart;