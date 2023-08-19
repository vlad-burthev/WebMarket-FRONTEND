import DeviceList from "@/components/Shop/DeviceList";
import TypeList from "@/components/Shop/TypeList";
import type { FC } from "react";

interface ShopProps {}

const Shop: FC<ShopProps> = () => {
  return (
    <div className=" w-2/3 mx-auto grid grid-cols-12 gap-x-6 gap-y-8">
      <div className="col-span-3">
        <TypeList />
      </div>
      <div className="col-span-9">
        <DeviceList />
      </div>
    </div>
  );
};

export default Shop;
