// Contact Me static page

export default function Contact() {
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
    
    
    return (
        <div>
            <p>Testing Contact Page Text Area</p>
        </div>
    );
}
