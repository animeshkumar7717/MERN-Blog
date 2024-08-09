import { Button } from 'flowbite-react'
import { useDispatch } from 'react-redux'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { app } from '../firebase'
import { getSuccess } from '../redux/user/UserSlice'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth(app)
    const handleGoogleClick = async() => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        try {
            const resultFromGoogle = await signInWithPopup(auth, provider);
            const res = await fetch('api/auth/google', {
                method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: resultFromGoogle.user.displayName,
                    email: resultFromGoogle.user.email,
                    googlePhotoUrl: resultFromGoogle.user.photoURL
                })
            })
            const data = await res.json()
            if(res.ok) {
                dispatch(getSuccess(data))
                navigate('/')
            }            
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <Button gradientDuoTone='pinkToOrange' type='button' outline className="w-full mt-5" onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2' />
        countinue with google
    </Button>
  )
}

export default OAuth
