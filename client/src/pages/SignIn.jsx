import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formdata, setFormdata] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate= useNavigate()

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };
  // console.log(formdata);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !formdata.email || !formdata.password) {
      return setErrorMessage("please fill the all fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null)
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if(data.success===false){
       return setErrorMessage(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate('/')
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
    }
  };
  return (
    <div className="min-h-screen mt-36 ">
      <div className="flex p-3 max-w-3xl flex-col md:flex-row mx-auto md:items-center gap-5">
        {/* leftside  */}
        <div className="flex-1">
          <Link to="/" className=" text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-slate-500 via-slate-900 to-orange-500 text-white rounded-lg">
              Shahand's
            </span>{" "}
            Blog
          </Link>
          <p className="text-sm mt-5">
            Flowbite React is an open-source UI component library built on top
            of Tailwind CSS with React components and based on the
          </p>
        </div>
        {/* rightSide  */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder=" email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder=" Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit" disabled={loading}>
              {
                loading ? (<>
                <Spinner size='sm'/>
                <span className="pl-3">loading....</span> 
                </>) : "Sign In"
              }
            </Button>
          </form>
          <div className="text-sm flex gap-2 mt-3">
            <span>Dont Have an account ?</span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
