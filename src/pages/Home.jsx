import React, { useState, useEffect, useRef } from 'react';
import CONFIG from '../settings/config';
import Card from '../components/Card';
import axios from 'axios';

const Home = () => {
  const [product, setProduct] = useState([]);
  const getValue = useRef('');

  const getProducts = async () => {
    try {
      const response = await axios.get(CONFIG.api_url);
      const data = response.data;
      if (response.status === 200) {
        setProduct(data);
      } else {
        console.log('unformatted structured data', data);
      }
    } catch (error) {
      console.log('error is', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getSearchValue = () => {
    const searchValue = getValue.current.value;
    const filteredProducts = product.filter((data) =>
      data.title.includes(searchValue)
    );
    setProduct(filteredProducts);
  };

  return (
    <>
      <div className="header">
        <input
          ref={getValue}
          type="search"
          name="search"
          id="search"
          placeholder="search for items..."
        />
        <button onClick={getSearchValue}>Search</button>
      </div>
      <div className="page_wrapper">
        {product.map((value, index) => {
          return <Card key={index} data={value} />;
        })}
      </div>
    </>
  );
};

export default Home;
