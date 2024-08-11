import { Alert, Button, TextInput } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { app } from "../firebase";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { updateStarted, updateSuccess, updateError, updateFinally } from "../redux/user/UserSlice";

export default function DashProfile() {
  const [image, setImage] = useState(null); 
  const [imageUrl, setImageUrl] = useState(null); 
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null); 
  const [imageFileUploadError, setImageFileUploadError] = useState(null); 
  const [formData, setFormData] = useState({}); 
  const imagePickerRef = useRef(); 

  const { currentUser } = useSelector((state) => state.user);
  console.log('currentUser', currentUser);
  
  const dispatch = useDispatch()
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  useEffect(()=>{
    if(image) {
      uploadImage()
    } 
  }, [image])
  
  if (imageFileUploadError) {
    setTimeout(()=>{
      setImageFileUploadError(null)
    }, 3000)
  }
  const uploadImage = async() => {
    setImageFileUploadError(null)
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      }, (error) => {
        setImageFileUploadError('Could not upload image (File must be less than 2MB)')
        setImageFileUploadProgress(null)
        setImage(null)
        setImageUrl(null)
      }, ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>{
          setImageUrl(downloadURL);
          setFormData({...formData, profilePicture: downloadURL})
        })
      }
    )    
  }

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(Object.keys(formData).length===0) {
      return;
    } 
    try {
      dispatch(updateStarted());      
      console.log('currentUser._id', currentUser.username);
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
          
      const data = await res.json();
      if(!res.ok) {
        dispatch(updateError(data.message))
      } else {
        dispatch(updateSuccess(data))
      }
    } catch (error) {
      dispatch(updateError(error.message))
    }
  }
  

  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center text-3xl font-semibold">Profile</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={imagePickerRef}
          hidden
        />
        <div
          className="relative w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full"
          onClick={() => imagePickerRef.current.click()}
        >
          {
            imageFileUploadProgress && (
              <CircularProgressbar value={imageFileUploadProgress || 0} text={`${imageFileUploadProgress}%`} 
              strokeWidth={5}
              styles={{
                root: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }, 
                path: {
                  stroke: `rgba(62, 152, 199, ${imageFileUploadProgress/100})`
                }
              }}
              />
            )
          }
          <img
            src={imageUrl || currentUser.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${imageFileUploadProgress && imageFileUploadProgress<100 && 'opacity-60'}`}
          />
        </div>
        {
          imageFileUploadError && (
            <Alert color='failure'>
              {imageFileUploadError}
            </Alert>
          )
        }
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser?.username}
          onChange={handleChange}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <TextInput type="password" id="password" placeholder="password"
          onChange={handleChange}        
        />

        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>
      <div className="flex justify-between text-red-500 mt-5">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}