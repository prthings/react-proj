import { useState, useEffect } from 'react';

function Mobile() {
  const [data, setData] = useState([]);
  let handlechange=(e)=>{

    setData(e.target.value)
  }
  let length=10
    useEffect(() => {
      fetch('https://api.api-ninjas.com/v1/passwordgenerator?length='+length, {
        headers:{
          'X-Api-Key': 'mUlfVPsCfCDPS44qu9S9NQ==7vTdmvkDUp6bxk5q'
        }
      })
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error))
    }, []);
  return (
    <div className='data'>
      <h1>Password Generator</h1>
      <p>This tool can generate secure, strong, random passwords. To ensure security, the password is generated completely on the webpage without being sent across the Internet.</p>
      <h2 className='h2-tag'>{data.random_password}</h2>
    </div>
  )
}

export default Mobile