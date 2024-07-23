import React from "react";
import Cart from "./Cart/Cart";
import { GiShoppingCart } from "react-icons/gi";
import Panel from "../../Components/Panel/Panel";

export const Bascket = () => {
  return (
    <>
      <Panel title="Basket" icon={<GiShoppingCart />} />
      <Cart />
    </>
  );
};
