import React from 'react';
import axios from "axios";
import {useEffect , useState} from "react";

const Address = () => {


    const [test, setTest] = useState([]);
    const loginHandler = (e) => {
        e.preventDefault();
        axios.post('https://api.elzamat.com/api/v1/auth/logout' , {

            // signIn
            // email:'miladTest@gmail.com',
            // password: '1234567890',
            // password_confirmation: '1234567890',
            // client_id: 20,
            // client_secret: 'rTQafSzS23zVKXCNcIAqmjIANxeHTVxV470eTuac',
            // username: 'miladTest',

            // login
            // grant_type: 'email_password',
            // client_id: 20,
            // client_secret: 'rTQafSzS23zVKXCNcIAqmjIANxeHTVxV470eTuac',
            // username: 'eh.mansoori@gmail.com',
            // password: 'vqv(L7Bvvr*!IHc^',

            // logout
            headers:{
                'Connection': 'keep-alive',
                'Content-Length': 0,
                'Accept': 'application/json',
                'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyMCIsImp0aSI6ImE3M2U3MWI0Y2M4NTgzOGNhOWU5ZjYzOGY4ZjY0MTNjMmRmMDNlYTA4Zjc4NzM5NTk2MmQwNmM2YmEzZDdlZDY4MjAyOTg4ZWE5MmQ4YmRjIiwiaWF0IjoxNjgyMzI2MDAzLjQzNjYzNywibmJmIjoxNjgyMzI2MDAzLjQzNjY0LCJleHAiOjE3MTM5NDg0MDMuNDI4ODQyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Y2ZxyiRlEzz62xYyBXFLO7Ml0pC97L1jmcBwCIJJ8WRMLCHN4kIxbyFuVzItFuVmhbZqExyqCLVNP7KPk6VLhaFKOeKxpCIU3ixBOmBGq4mNnICoc4iQn5loMc-LnN_8EpQPx_3taIQP0r7Ez5bfJe6SdJgUWPUU6VnLwhmSCNc_-JtmE18cIzTbV35smxQEJz5rrmKEDFHcYke7cy_wJsMbfSgROmIDKp7EbKz01MvQp1Snd25ZKRRupOus6gEXW4_kvWTWwjRJXhydDodujFXLfm0yUaIipegn5qcuer-t-1gUvD2kbKgEYHv1bUronRec-LukYRTGBDz-YmXoXdZGj9Qcw_LaHBxhAOc_gMwUVhx-n-B9Kw7aswBWexfFnVG4JblbGe_NfDEsVOtLlyMEMaRSz0ealLl0Fbllkb_0tjEh8zpvReR-eVM-hjPcWkoHYrFNurYN5KoIxRcyN7wsR46muzk1dsS469Yb8AfRIFzFXO6JjYyhvy75kXbsCCSL845y11EvI9TCgTTMkncU7VkVFFUOy_VePK3BOulAIdiEUn4NXrom3h8aRW3MsdHzt_Sy2jYEgz5XmpHu3tqKu231IY6zdEfpzWcsOprzKysZmc001dMSOADGRxtqbJ7-qUqE9yJfrcemE6eX-FxdZVOkQbJDp3Yo6douFoE`
            }

        })
            .then(response => setTest(response.data))
    }
    console.log(test)



    // const [brand , setBrand] = useState([]);
    // useEffect(() => {
    //     test.status &&
    //     axios.get('https://api.elzamat.com/api/v1/brand/show/1' , {
    //         headers: {
    //             Authorization : `Bearer ${test.data.credential.access_token}`,
    //             // 'User-Agent' : 'PostmanRuntime/7.32.2',
    //             // 'Accept-Encoding': 'gzip, deflate, br',
    //             // 'Accept' : 'application/json',
    //             // 'Connection' : 'keep-alive',
    //             // 'Connection' : 'keep-alive',
    //             // 'X-Powered-By' : 'PHP/8.0.3',
    //             // 'Cache-Control' : 'private, must-revalidate',
    //             // 'pragma': 'no-cache',
    //             // 'expires' : '-1',
    //             // 'Access-Control-Allow-Origin' : '*'
    //         }
    //     })
    //         .then(response => setBrand(response.data))
    //     // .catch(error => setBrand(error.message))
    // } , [test])
    // console.log(brand)


    return (
        <div>
            <button className={'btn btn-primary'} onClick={loginHandler}>Start</button>
        </div>
    );
};

export default Address;
