import React, { useContext, useEffect, useState } from "react";
import data from "../ContextApi";
import Card from "./Card";
const Home = () => {
  const [product, Setproduct] = useState();
  const { userdata, setUserData } = useContext(data);
  console.log(userdata.firstName);

  const logout = () => {
    setUserData({});
  };
  const fetchDAta = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
    Setproduct(data.products);
  };
  useEffect(() => {
    fetchDAta();
  }, []);
  return (
    <>
      <header className="header">
        <h2 className="username-home">
          Hii 👋 {userdata.firstName} {userdata.lastName}
        </h2>
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </header>
      <div className="All-product">
        {product?.map((props) => {
          return <Card data={props} />;
        })}
      </div>
    </>
  );
};

export default Home;
