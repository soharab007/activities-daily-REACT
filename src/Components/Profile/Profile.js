import toast, { Toaster } from 'react-hot-toast';
// import React, { useEffect, useState, useTransition } from 'react';
// import React, { useEffect, useState, useTransition } from 'react';
import React, { useEffect, useState } from 'react';
import './Profile.css';
import Question from '../Question/Question';

const Profile = ({ selectedTime }) => {
    // This is the toast function .
    // const notify = () => toast.success('WoW!!! Successfully Activity Completed!');
    const notify = () => toast.success('WoW!!! Successfully Activity Completed!');


    const [count, setCount] = useState([]);
    useEffect(() => {
        fetch(`brackTime.json`)
            .then(res => res.json())
            .then(data => setCount(data))

    }, []);

    const [second, setSecond] = useState(0);
    const handleSecond = (second) => {
        setSecond(second);
        localStorage.setItem('breakTime', second);
    };

    useEffect(() => {
        const storedSacond = localStorage.getItem('breakTime');
        if (storedSacond) {
            setSecond(storedSacond);
        }
    }, []);


    return (
        <div>
            <div className="mr-4 bg-base-300 grid sm:justify-center w-64 text-black">
                <div className=''>
                    <div className='flex p-8'>
                        <div className="avatar">
                            <div className="w-14 rounded-full  ring-primary  ring-offset-2">

                                <img src="https://images.unsplash.com/photo-1514543250559-83867827ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80" alt=" profile" />
                            </div>

                        </div>
                        <div className='ml-2'>
                            <h1 className='card-title'>Soharab Hossain</h1>
                            <p>Chattogram, Bangladesh</p>
                        </div>
                    </div>
                    <div className='m-5 p-2 bg-blue-200 rounded'>
                        <div className="text-center flex justify-between grid-cols-3 gap-4">
                            <div>
                                <h1>60kg</h1>
                                <p>Height</p>
                            </div>
                            <div>
                                <h1>5.7</h1>
                                <p>Weight</p>
                            </div>
                            <div>
                                <h1>24yrs</h1>
                                <p>Age</p>
                            </div>
                        </div>
                    </div>

                    <h1 className='p-2'><b >Add A Break</b></h1>
                    <div className='p-3 m-5 rounded-r-lg bg-blue-200 rounded'>
                        <div className="text-center flex justify-between grid-cols-3 gap-4 ">
                            {
                                count.map(second =>
                                    <div
                                        key={second}
                                        className='bg-blue-500 rounded-full'>
                                        <button onClick={() => handleSecond(second)}>{second}s</button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <h1 className='p-2'><b>  Exercise Details </b></h1>
                    <div className='p-2 m-3   bg-blue-200 rounded'>
                        <div className="flex justify-between grid-cols-3 gap-4 ">
                            <div>
                                <h1><b>Exercise Time</b></h1>
                            </div>
                            <div>
                                <h1>{selectedTime}s</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 m-3  bg-blue-200 rounded'>
                        <div className="flex justify-between grid-cols-3 gap-4 ">
                            <div>
                                <h1><b>Break Time </b></h1>
                            </div>
                            <div>
                                <h1>{second}s</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center pb-5'>
                        <button onClick={notify} className='btn w-full bg-blue-600'>Activity Completed</button>
                        <Toaster />
                    </div>
                    <Question></Question>
                </div>
            </div>
        </div>
    );
};

export default Profile;