import type { FC } from "react";
import { Helmet } from "react-helmet";

interface BasketProps {}

const Basket: FC<BasketProps> = () => {
  return (
    <>
      <Helmet>
        <title>Basket</title>
        <meta name="description" content="Basket" />
      </Helmet>
      <h1>Basket</h1>
    </>
  );
};

export default Basket;
