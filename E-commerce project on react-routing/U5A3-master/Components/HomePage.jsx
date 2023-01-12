import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Spinner from 'react-bootstrap/Spinner';

export const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const [array, setArray] = useState([]);
  const getData = async () => {
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      let res = await data.json();
      setArray(res);
    } catch (error) {
      navigate("/*");
    }
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          alignItems: "baseline",
          gridTemplateColumns: "repeat(4,1fr)",

          padding: "20px",
          gap: "10px",
        }}
      >
        {array && array.length ? <>{array.map((el) => {
          return (
            <div key={el.id} to={`/products/${el.id}`}>
              <img width="120px" src={el.image} alt="" />
              <h1
                style={{
                  color: "gray",
                  textDecoration: "none",
                }}
              >
                {el.title}
              </h1>
            </div>
          );
        })}</> :
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>}
      </div>
    </>
  );
};
