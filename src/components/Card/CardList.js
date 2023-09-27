import React, { useState, useEffect, useCallback } from "react";

import classes from "./CardList.module.scss";

import CardItem from "./CardItem";

const CardList = () => {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [Items, setItems] = useState([]);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-c6acd-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const list = [];

      for (let obj in data) {
        list.push({
          id: obj,
          name: data[obj].name,
          description: data[obj].description,
          price: data[obj].price,
        });
      }

      setItems(list);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const cItem = Items.map((item) => {
    return (
      <CardItem
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <div className={classes.cardlist}>
      {error && <p style={{fontSize: '2rem', fontStyle: 'bold', marginTop: '2.5rem', color: 'red'}}>{error}</p>}  
      {loading && <p style={{fontSize: '2rem', fontStyle: 'bold', marginTop: '2.5rem'}}>Loading...</p>}
      {!error && !loading && cItem.length > 0 && cItem}
    </div>
  );
};

export default CardList;
