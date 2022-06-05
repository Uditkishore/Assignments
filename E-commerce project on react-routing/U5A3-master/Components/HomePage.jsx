import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

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
        {array.map((el) => {
          return (
            <Link key={el.id} to={``}>
              <img width="120px" src={el.image} alt="" />
              <h1
                style={{
                  color: "gray",
                  textDecoration: "none",
                }}
              >
                {el.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};
