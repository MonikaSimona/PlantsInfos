import React from 'react';
import  { FaFacebookMessenger, FaPinterest } from 'react-icons/fa';
import { AiFillInstagram, AiFillBehanceCircle } from 'react-icons/ai';
const Contact = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000);
    return ( 
        <div className="container contact ">
            <h2 className="center mt-4 mb-3">Where you can find the Gardener</h2>
            <p className="center">You can find me on this social links and we can chat about plants.</p>
            <br/>
            <div className="icons">
            <a href="https://www.facebook.com/simona.simonovska.5895/" target="_blank" rel="noreferrer" >
            <FaFacebookMessenger className="icon"/> </a>
            <a href="https://www.instagram.com/si.monkaa/" target="_blank" rel="noreferrer">
            <AiFillInstagram className="icon"/></a>
            <a href="https://www.behance.net/simonasimonov/projects" target="_blank" rel="noreferrer">
            <AiFillBehanceCircle className="icon"/> </a>
            
            <a href="https://www.pinterest.com/monisimona98/_saved/" target="_blank" rel="noreferrer">
            <FaPinterest className="icon"/> </a>
            </div>
        </div>
     );
}
 
export default Contact;