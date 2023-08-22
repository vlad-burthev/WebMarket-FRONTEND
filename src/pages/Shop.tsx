import { lazy, type FC } from "react";
import { Helmet } from "react-helmet";

const BrandList = lazy(() => import("@/components/Shop/BrandList"));
const DeviceList = lazy(() => import("@/components/Shop/DeviceList"));
const TypeList = lazy(() => import("@/components/Shop/TypeList"));

interface ShopProps {}

const Shop: FC<ShopProps> = () => {
  return (
    <>
      <Helmet>
        <title>Web Market</title>
        <meta name="description" content="Web Market" />
      </Helmet>
      <div className=" w-2/3 mx-auto grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-3">
          <TypeList />
          <BrandList />
        </div>
        <div className="col-span-9">
          <DeviceList />
        </div>
      </div>
    </>
  );
};

export default Shop;
