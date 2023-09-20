import { useState, useEffect } from 'react';


function Quotes() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://zenquotes.io/api/random', {mode: 'no-cors'})
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error))
    }, []);
  return (
    <div className='data'>
           <h1>Quote Generator From the API</h1>
           {data.map(items=>
            <div key={items.c}>
                <h2>{items.q}</h2>
            </div>
           )}
    </div>
  )
}

export default Quotes