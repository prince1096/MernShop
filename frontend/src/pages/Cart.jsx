import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  const fetchCartData = async () => {};

  useEffect(() => {
    fetchCartData();
  }, []);

  return <div className="">Cart</div>;
};

export default Cart;
