import { useState, useEffect } from 'react';
import './index.css'

function Fetch() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error(error));
    }, []);

    return (
        <div className='data'>
           <h1>Fetch Data From the API</h1>
            <table>
                <thead>
                    <tr>
                    <th>Github ID</th>
                    <th>Github Name</th>
                    <th>Avatar</th> 
                    </tr>
                </thead>
                <tbody>
                    {data.map(item=> 
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td contentEditable>{item.login}</td>
                        <td className='img'><img src={item.avatar_url} alt="{item.login}" width={100} height={100} /></td>
                    </tr>
                     )}
                </tbody>
            </table>
           
        </div>
      );
    }   

export default Fetch;