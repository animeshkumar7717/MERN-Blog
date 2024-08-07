import { Button, Label, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
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
              <Label value='Your Username' htmlFor="username" />
              <TextInput
                type='text'
                placeholder='username'
                id='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Label value='Your Email' htmlFor="email" />
              <TextInput
                type='email'
                placeholder='username@something.com'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Label value='Password' htmlFor="password" />
              <TextInput
                type='password'
                placeholder='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' className="w-full">
              Sign Up
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>SignIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
