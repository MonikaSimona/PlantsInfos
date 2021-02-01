import React from 'react';
const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about');
    }, 2000);
    return ( 
        <div className="container">
            <h4 className="center">Contact PAGE</h4>
            <p className="center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, sed!</p>
        </div>
     );
}
 
export default Contact;