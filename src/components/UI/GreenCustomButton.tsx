import type { FC } from "react";

interface GreenCustomButtonProps {
  onClick: any;
  text: string;
}

const GreenCustomButton: FC<GreenCustomButtonProps> = ({ onClick, text }) => {
  return (
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GreenCustomButton;
