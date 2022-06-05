import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const ProductsDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);
  const [array, setArray] = useState({});
  const getData = async () => {
    try {
      let data = await fetch(`https://fakestoreapi.com/products/${id}`);
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
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img width={"300px"} src={array.image} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{array.title}</h2>
            <h5 className="productPrice">Price : {array.price}</h5>
          </div>

          <div style={{ width: "700px", paddingLeft: "30px" }}>
            <h5>Specifications : {array.description} </h5>
          </div>
        </div>
      </div>
    </>
  );
};
