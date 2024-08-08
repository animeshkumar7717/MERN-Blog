import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {

  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  const navigate = useNavigate()

  const handleChange = (e) => {
      setFormData({...formData, [e.target.id]:e.target.value.trim() })
  }  

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!formData.email || !formData.password) {
      return setErrorMessage('Please fill out all the field!')
    }
    try {
      setIsLoading(true);
      setErrorMessage(null)
      const res = await fetch('api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false) {
        return setErrorMessage(data.message)
      }
      setIsLoading(false)
      if(res.ok) {
        navigate('/')
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-5 flex items-center justify-center">
      <div className="flex p-6 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 bg-white rounded-lg shadow-lg">
        {/* Left */}
        <div className='flex-1'>
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Animesh's
            </span>
            Blog
          </Link>
          <p className='text-sm mt-5 text-gray-600'>
            This is Animesh's project, you can sign up with your email and password, or with Google.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label value='Your Email' htmlFor="email" />
              <TextInput
                type='email'
                placeholder='username@something.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label value='Password' htmlFor="password" />
              <TextInput
                type='password'
                placeholder='********'
                id='password'
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' className="w-full" disabled={isLoading}>
              {
                isLoading ? <Spinner size='sm'>
                  <span className='pl-3'>Loading...</span>
                </Spinner> : 'Sign In'
              }
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>SignUp</Link>
          </div>
          {
            errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default SignIn;
