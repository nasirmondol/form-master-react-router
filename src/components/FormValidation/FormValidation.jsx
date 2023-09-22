import { useState } from "react";

const FormValidation = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 character or longer')
        }
        else {
            setError('')
        }
        console.log(name, email, password);
    }

    const handleEmailInput = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);
    };

    const handleNameInput = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const handlePasswordInput = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }
    console.log(email);

    return (
        <div className='flex justify-center items-center'>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameInput} type="text" placeholder='name' name='name' />
                <br />
                <input onChange={handleEmailInput} type="email" placeholder='email' name='email' />
                <br />
                <input onChange={handlePasswordInput} type="password" placeholder='password' name='password' />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>

        </div>
    );
};

export default FormValidation;

