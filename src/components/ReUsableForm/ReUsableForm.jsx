
const ReUsableForm = ({formTitle, button, handleSubmit, children}) => {

   const handleForm = e =>{
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        phone: e.target.phone.value
        
    }
    handleSubmit(data)
   }
   
    return (
        <div>
            {children}
            <form className="gap-5" onSubmit={handleForm}>
                <input placeholder="name" className="" type="text" name="name" />
                <br />
                <input placeholder="email" className="" type="text" name="email" />
                <br />
                <input placeholder="phone" className="" type="text" name="phone" />
                <br /><input type="submit" value={button} />
            </form>
        </div>
    );
};

export default ReUsableForm;