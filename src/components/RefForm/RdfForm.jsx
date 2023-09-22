import { useRef, useState } from "react";

const RefForm = () => {
    const [error, setError] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = e => {
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
       
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} placeholder="name" type="text" name='name' />
                <br />
                <input ref={emailRef} defaultValue={'hamza@molla.com'} placeholder="email" type="text" name='email' />
                <br />
                <input ref={passwordRef} placeholder="password" type="text" name='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {error && <p>{error}</p> }
        </div>
    );
};

export default RefForm;