import { useAppDispatch, useAppSelector } from "@/store/store";
import { getTypes } from "@/store/typeSlice/typeAPI";
import { setSelectedType } from "@/store/typeSlice/typeSlice";
import { useEffect, type FC } from "react";

interface TypeListProps {}

const TypeList: FC<TypeListProps> = () => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.type);
  useEffect(() => {
    try {
      dispatch(getTypes());
    } catch (error) {}
  }, []);

  if (types.length === 0) {
    return "Loading...";
  }
  return (
    <>
      <h1>Types</h1>
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        All
      </button>
      {types.map((type: any) => (
        <button
          key={type.id}
          type="button"
          onClick={() => dispatch(setSelectedType(type.id))}
          className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {type.name}
        </button>
      ))}
    </>
  );
};

export default TypeList;
