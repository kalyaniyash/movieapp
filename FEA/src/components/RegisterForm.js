import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { movieApi } from '../constants/axios'
import { userRequests } from '../constants/requests'
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    city: "",
    street: "",
    age: "",
    phonenumber: ""
  })

  const togglePassword = (event) => {
    event.preventDefault();
    setShowPass(!showPass)
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const validateForm = () => {
    if (!user.email || !user.username || !user.password || !user.confirmPassword) {
      setMessage("Please fill all required fields")
      return false;
    }

    if (!validateEmail(user.email)) {
      setMessage("Please enter a valid email address")
      return false;
    }

    if (user.password.length < 6) {
      setMessage("Password must be at least 6 characters long")
      return false;
    }

    if (user.password !== user.confirmPassword) {
      setMessage("Passwords do not match")
      return false;
    }

    if (user.age && (isNaN(user.age) || user.age < 13 || user.age > 120)) {
      setMessage("Please enter a valid age (13-120)")
      return false;
    }

    if (user.phonenumber && !/^\d{10,15}$/.test(user.phonenumber.replace(/\s/g, ''))) {
      setMessage("Please enter a valid phone number (10-15 digits)")
      return false;
    }

    return true;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // Remove confirmPassword before sending to backend
      const { confirmPassword, ...userData } = user;
      await movieApi.post(userRequests.register, userData);
      setMessage("Account created successfully! Redirecting to login...")
      setTimeout(() => {
        navigate("/login")
      }, 2000)
    } catch (error) {
      setMessage(error.response?.data?.error || "Registration failed")
    }
  }


  return (
    <React.Fragment>
      <div className='inputs-container'>
        <div className='input-container'>
          <label className='username'>Username</label>
          <input
            type='text'
            className='username'
            value={user.username}
            onChange={(e) => setUser({
              ...user,
              username: e.target.value
            })}
          />
        </div>
        <div className='input-container'>
          <label className='email'>Email</label>
          <input
            type='text'
            className='email'
            value={user.email}
            onChange={(e) => setUser({
              ...user,
              email: e.target.value
            })}
          />
        </div>
      </div>
      <div className='input-container'>
        <label className='password'>Password</label>
        <input
          type={showPass ? "text" : "password"}
          className='password'
          value={user.password}
          onChange={(e) => setUser({
            ...user,
            password: e.target.value
          })}
        />
        <span onClick={(e) => togglePassword(e)} style={{ cursor: "pointer" }}>
          <span>
            {showPass ? (
              <FontAwesomeIcon icon={faEye} className='customIcon' />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className='customIcon' />
            )}
          </span>
        </span>
      </div>
      <div className='input-container'>
        <label className='confirmPassword'>Confirm Password</label>
        <input
          type={showPass ? "text" : "password"}
          className='confirmPassword'
          value={user.confirmPassword}
          onChange={(e) => setUser({
            ...user,
            confirmPassword: e.target.value
          })}
        />
      </div>
      <div className='inputs-container'>
        <div className='input-container'>
          <label className='age'>Age (Optional)</label>
          <input 
            type="number" 
            className='age'
            min="13"
            max="120"
            value={user.age}
            onChange={(e) => setUser({
              ...user,
              age: e.target.value
            })}
          />
        </div>
        <div className='input-container'>
          <label className='phonenumber'>Phone Number (Optional)</label>
          <input 
            type="tel" 
            className='phonenumber'
            placeholder="e.g., 1234567890"
            value={user.phonenumber}
            onChange={(e) => setUser({
              ...user,
              phonenumber: e.target.value
            })}
          />
        </div>
      </div>
      <div className='inputs-container'>
        <div className='input-container'>
          <label className='city'>City</label>
          <input 
            type="text" 
            className='city'
            value={user.city}
            onChange={(e) => setUser({
              ...user,
              city: e.target.value
            })}
          />
        </div>
        <div className='input-container'>
          <label className='street'>Street</label>
          <input 
            type="text" 
            className='street'
            value={user.street}
            onChange={(e) => setUser({
              ...user,
              street: e.target.value
            })}
          />
        </div>
      </div>
      <button className='submit' onClick={handleRegister}>
        Submit
      </button>
      <span style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {message}
      </span>
    </React.Fragment >
  )
}

export default RegisterForm
