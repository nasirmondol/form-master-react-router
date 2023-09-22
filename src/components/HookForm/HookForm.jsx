import useInputState from "../../hooks/useInputValue";

const HookForm = () => {
    // const [name, handleNameChange] = useInputState('Badam Ali')
    const emailState = useInputState('badamtadam@gamil.com');
    const handleSubmitForm = e => {
        // console.log('form name', name);
         console.log('Form data', emailState.value);
        e.preventDefault();
    }
    return (
        <div>
            <form className="gap-5" onSubmit={handleSubmitForm}>
                {/* <input value={name} onChange={handleNameChange} placeholder="name" className="" type="text" name="name" /> */}
                <br />
                <input  {...emailState} placeholder="email" className="bg-black text-white" type="text" name="email" />
                <br />
                <input placeholder="phone" className="" type="text" name="phone" />
                <br /><input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;