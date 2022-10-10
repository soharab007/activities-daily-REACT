import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className="bg-white-700 grid g-4">
            <div tabIndex={0} className="collapse mb-5 p-5 pb-10 bg-pink-600 text-white w-full collapse-arrow border border-base-300 rounded-box">
                <div className="collapse-title text-xl ">
                    How Does React Works?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}>
                        React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM


                        React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse mb-5 p-5 pb-10 bg-pink-600 text-white w-full collapse-arrow border border-base-300 rounded-box">
                <div className="collapse-title text-xl ">
                    What's the difference between props and state in React component?
                </div>
                <div className="collapse-content">
                    <p tabIndex={1}>
                        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.


                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse mb-5 p-5 pb-10 bg-pink-600 text-white w-full collapse-arrow border border-base-300 rounded-box">
                <div className="collapse-title text-xl ">
                    What useEffect is used for other than data load?
                </div>
                <div className="collapse-content">
                    <p tabIndex={2}>
                        Main reason to use useEffect in React.
                        1.useEffect use cases
                        <li>     Running once on mount: fetch API data</li>
                        <li> Running on state change: validating input field</li>
                        <li>Running on state change: live filtering</li>

                        <li>Running on state change: live filtering</li>
                        <li> Running on props change: updating fetched API data to get BTC updated price</li>
                        <li> Running on state change: trigger animation    on      new array value</li>
                        <li>Running on props change: update paragraph list on fetched API data update</li>


                    </p>
                </div>
            </div>

        </div>




    );
};

export default Question;