// Contact Me static page
import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

export default function Contact() {
    // Create state variables for the fields in the form
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        // Based on the input type, we set the state of either email, fullnNme, and message
        if (inputType === 'email') {
          setEmail(inputValue);
        } else if (inputType === 'fullName') {
          setFullName(inputValue);
        } else {
          setMessage(inputValue);
        }
      };

    const handleValidation= e => {
        if(e.target.name === "email") {
            if(!validateEmail(e.target.value)) {
                setErrorMessage("Invalid Email")
            } else {
                setErrorMessage("");
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage("This is a required field")
            } else {
                setErrorMessage("")
            }
        }
    }
    
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        setFullName('');
        setMessage('');
        setEmail('');
      };
    
    return (
        <div className="container text-center">
        <h1>Contact me for more information!</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
          <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            onBlur={handleValidation}
            type="text"
            placeholder="Full Name"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Comments"
          />
          <button type="submit">Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
  
    );
}


