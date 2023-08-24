import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ redirect, setRedirect ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      navigate('/game')
    }
  },
  [redirect]
  )

  const handleClick = async (e) => {
    console.log('clicked');
    e.preventDefault();
    const response = await fetch('/confirm_login',
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    })

    const parsedData = await response.json();
    parsedData.message === 'verified' ? setRedirect(true) : null
  };

  return (
    <div id='login'>
      <h2></h2>

    </div>
  )
}