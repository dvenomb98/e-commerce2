import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Newsletter() {

    const notify = () => toast.success('Thanks you! You sucessfully joined to our newsletter', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const [email, setEmail] = React.useState({email:""})

    function handleChange(event) {
        console.log(email)
        setEmail(prevState => {
            return {
                [event.target.name] : event.target.value
            }
        })

    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("letsgo")
        setEmail({email: ""})
        notify()
            
       
    }



  return (
    <div className="bg-slate-100" >
        <div className="container mx-auto px-6 text-neutral-800 mt-8 text-center flex flex-col gap-5 ">
        <h1 className="font-bold text-3xl lg:text-4xl mt-5">JOIN TO OUR NEWSLETTER</h1>
        <p className="mb-2">Do you want to know about fresh news? Join to our newsletter!</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:flex-row items-center justify-center ">
            <input value={email.email} required onChange={handleChange} className="w-full px-3 py-2 border-2 md:mb-5 lg:w-3/4 2xl:w-1/2 border-neutral-100" name="email" type="email" placeholder="Your email adress" />
            <button className="flex items-center justify-center mb-5
            border-2 border-neutral-800 px-3 py-2 w-full md:w-96 h-12  font-bold hover:scale-105 transition ease-in-out">JOIN NOW</button>
        
        </form>
        <ToastContainer />
        </div>
        
        
    </div>

  )
}

export default Newsletter