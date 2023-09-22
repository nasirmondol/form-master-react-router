
const SimpleForm = () => {
    const handleSubmitForm = event => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.phone.value);
    }
    return (
        <div >
            <div className="">
                <form className="gap-5" onSubmit={handleSubmitForm}>
                    <input placeholder="name" className="" type="text" name="name" />
                    <br />
                    <input placeholder="email" className="" type="text" name="email" />
                    <br />
                    <input placeholder="phone" className="" type="text" name="phone" />
                    <br /><input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default SimpleForm;