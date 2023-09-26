import React, {useEffect} from 'react'

function Price() {
  const [price, setPrice] = React.useState([]);
  const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr'
  const CryptoPrice = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPrice(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    CryptoPrice();
  }, [])
  
  return (
    <div className='main'>
      <h1>Crypto Currencies Market Price</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum eveniet aliquam doloremque soluta, illo quod similique fugiat repellat quas commodi facilis a iusto amet voluptatem facere, nam iste nesciunt.</p>
            {price.map(item => (
               <div key={item.id} className='box'>
                <h4>Coin Name: {item.name}</h4>
                <div id='brand-logo'><img src={item.image} alt={item.name} width={120} /></div>
                <h4>Current Price: ₹{item.current_price}</h4>
                <h4>Coin Volume: ₹{item.total_volume}</h4>
                <h4>Last Update: {item.last_updated}</h4>
               </div>
            ))}
        </div>
  )
}

export default Price