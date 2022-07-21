import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {serviceId} = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    


    // const [user, setUser] = useState({
    //     name: 'Akbar The Great',
    //     email: 'akbar@momo.taj',
    //     address: 'Tajmohol Road Md.pur',
    //     phone: '01711111111'
    // });

    // const handleAddressChange = event =>{
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     setUser(newUser);
    // }

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value, 
            phone: event.target.phone.value
        }
        axios.post('https://enigmatic-fortress-14313.herokuapp.com/order', order)
        .then(response =>{
            const {data} = response;
            if(data.inserted){
                toast('Your order is booked!!');
                event.target.reset();
            }
        })

    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-75 mb-2' type="text" value={user?.displayName} name="name" placeholder='Name' required readOnly />
                <br />
                <input className='w-75 mb-2' type="email" value={user?.email} name="email" placeholder='Email' autoComplete='off' required readOnly disabled/>
                <br />
                <input className='w-75 mb-2' type="text" value={service.name} name="service" placeholder='service' required />
                <br />
                <input className='w-75 mb-2' type="text" name="address" placeholder='Address' autoComplete='off' required />
                <br />
                <input className='w-75 mb-2' type="text" name="phone" placeholder='Phone' autoComplete='off' required />
                <br />
                <input type="submit" className='btn btn-primary' value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;