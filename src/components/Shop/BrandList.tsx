import { useAppDispatch, useAppSelector } from "@/store/store";
import { getBrands } from "@/store/brandSlice/brandAPI";
import { useEffect, type FC } from "react";
import { setSelectedBrand } from "@/store/brandSlice/brandSlice";

interface BrandListProps {}

const BrandList: FC<BrandListProps> = () => {
  const dispatch = useAppDispatch();
  const { brands } = useAppSelector((state) => state.brand);
  useEffect(() => {
    try {
      dispatch(getBrands());
    } catch (error) {}
  }, []);

  if (brands.length === 0) {
    return "Loading...";
  }

  return (
    <>
      <h1>Brands</h1>
      <button
        onClick={() => dispatch(setSelectedBrand(null))}
        type="button"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        All
      </button>
      {brands.map((brand: any) => (
        <button
          onClick={() => dispatch(setSelectedBrand(brand.id))}
          key={brand.id}
          type="button"
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {brand.name}
        </button>
      ))}
    </>
  );
};

export default BrandList;
