import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState();
    const navigate = useNavigate();
    useEffect( ()=>{       
        
        const getOrders = async() =>{
            const email = user.email;
            const url = `https://enigmatic-fortress-14313.herokuapp.com/orders?email=${email}`;
            try{
               const {data} = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                }
            });
            setOrders(data); 
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();

    }, [user]);

    return (
        <div>
            <h2>Yours Orders</h2>
        </div>
    );
};

export default Order;