import { useState, useEffect } from 'react';


function Quotes() {
    const [data, setData] = useState([]);
    const url='https://api.api-ninjas.com/v1/quotes'

    const quote = async () => {
      try {
        const response = await fetch(url, {
          headers:{
            'X-Api-Key': 'mUlfVPsCfCDPS44qu9S9NQ==7vTdmvkDUp6bxk5q'
          },
          mode:'cors'
        });
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    useEffect(() => {
      quote()
    }, []);
  return (
    <div className='data'>
           <h1>Quote Generator From the API</h1>
           {data.map(items=>
            <div className='quote' key={items.author}>
                <h3>{items.quote}</h3>
                <b>{items.author}</b>
            </div>
           )}
           <h6>API Provided by api-ninjas</h6>
    </div>
  )
}

export default Quotes