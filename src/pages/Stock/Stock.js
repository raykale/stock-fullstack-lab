import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Stock (props) {
  // Our api key from coinapi.io
  
  const params = useParams()
  const symbol = params.symbol
  
  //state to hold the coin data
  const [stock, setStock] = useState(null);

  //function to fetch coin data
  const getStock = async () => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    }catch(error){
        console.error(error)
    }   
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    getStock();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.asset_id_base}/{stock.asset_id_quote}
        </h1>
        <h2>{stock.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return coin ? loaded() : loading();
}; 