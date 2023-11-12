import { useState, useEffect } from 'react'

const Mcu = () => {
    const [movie, setMovie] = useState([]);
  
    useEffect(() => {
      fetch('https://whenisthenextmcufilm.com/api')
        .then(response => response.json())
        .then(data => setMovie(data))
        .catch(error => console.error(error));
    }, []);

  return (
    <div className='data'>
      {movie.map(data=>{
        {data.title}
      })}
    </div>
  )
}

export default Mcu