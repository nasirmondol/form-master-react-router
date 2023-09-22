import './App.css'
import Grandpa from './components/Grandpa/Grandpa'
// import FormValidation from './components/FormValidation/FormValidation'
// import HookForm from './components/HookForm/HookForm'
// import ReUsableForm from './components/ReUsableForm/ReUsableForm'
// import RefForm from './components/RefForm/RdfForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpProfile = data => {
  //   console.log('sign up', data)
  // }
  // const profileUpdate = data => {
  //   console.log('update form', data)
  // }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <FormValidation></FormValidation> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReUsableForm formTitle={"Sign Up"} handleSubmit={handleSignUpProfile} button={'Registration'}>
        <div>
          <h2 className='text-xl'>New here please sign up</h2>
          <h1 className='text-2xl'>Sign up</h1>
        </div>
      </ReUsableForm>
      <ReUsableForm formTitle={"Log in"} handleSubmit={profileUpdate} button={'Log in'}>
        <h2 className='text-xl'>Already Register, Please Login</h2>
        <h1 className='text-2xl'>Login</h1>
      </ReUsableForm> */}
      <Grandpa></Grandpa>
    </>
  )
}

export default App
