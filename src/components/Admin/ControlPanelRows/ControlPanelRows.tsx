import type { FC } from "react";
import TypesAddModal from "../TypesModal/TypesAddModal";
import TypesDeleteModal from "../TypesModal/TypesDeleteModal";

interface ControlPanelRowsProps {
  title: string;
  addBtnName?: string;
  deleteBtnName: string;
  addBtnFunc?: React.MouseEventHandler<HTMLButtonElement>;
  deleteBtnFunc: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const ControlPanelRows: FC<ControlPanelRowsProps> = ({
  title,
  addBtnName,
  deleteBtnName,
  addBtnFunc,
  deleteBtnFunc,
  disabled,
}) => {
  return (
    <>
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium leading-6 text-gray-900">{title}</dt>
        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
          <button
            disabled={disabled}
            onClick={addBtnFunc}
            className="w-32 mr-6 border-2 border-white bg-green-600 text-white py-1 px-2 rounded-md"
          >
            {addBtnName}
          </button>
          <button
            onClick={deleteBtnFunc}
            className="w-32 border-2 border-white bg-red-600 text-white py-1 px-2 rounded-md"
          >
            {deleteBtnName}
          </button>
        </dd>
      </div>
    </>
  );
};

export default ControlPanelRows;
