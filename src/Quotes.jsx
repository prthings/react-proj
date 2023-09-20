import { useState, useEffect } from 'react';


function Quotes() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://zenquotes.io/api/random')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);
  return (
    <div className='data'>
           <h1>Quote Generator From the API</h1>
           {data.map(items=>
            <div key={items.c}>
                <h2>{items.q}</h2>
                <p>{items.a}</p>
            </div>
           )}
    </div>
  )
}

export default Quotes