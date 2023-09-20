import { useState, useEffect } from 'react';


function Quotes() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://api.api-ninjas.com/v1/quotes', {
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
           <h1>Quote Generator From the API</h1>
           {data.map(items=>
            <div className='quote' key={items.author}>
                <h3>{items.quote}</h3>
                <blockquote>-- {items.author}</blockquote>
            </div>
           )}
    </div>
  )
}

export default Quotes