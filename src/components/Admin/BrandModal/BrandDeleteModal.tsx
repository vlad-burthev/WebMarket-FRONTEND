import { useRef, type FC, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import ModalContainer from "../../UI/ModalContainer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { deleteBrand, getBrands } from "@/store/brandSlice/brandAPI";
import ListBoxUi from "@/components/UI/ListBox";

interface BrandDeleteModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BrandDeleteModal: FC<BrandDeleteModalProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const dispatch = useAppDispatch();
  const { brands } = useAppSelector((state) => state.brand);
  const [selectedBrand, setSelectedBrand] = useState("Choose a brand");

  useEffect(() => {
    dispatch(getBrands());
  }, []);
  console.log(selectedBrand);

  const deleteBrandHandler = async () => {
    const data: any = await dispatch(deleteBrand(selectedBrand));
    if (data.error) {
      return alert("Such brand doesn't exist!");
    }
    setSelectedBrand("Choose a brand");
    setOpen(false);
  };

  return (
    <ModalContainer
      open={open}
      setOpen={setOpen}
      cancelButtonRef={cancelButtonRef}
    >
      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-base font-semibold leading-6 text-gray-900"
              >
                Delete Brand
              </Dialog.Title>
              <div className="mt-2">
                <ListBoxUi
                  list={brands}
                  setSelected={setSelectedBrand}
                  selected={selectedBrand}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={deleteBrandHandler}
          >
            Delete Brand
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={() => setOpen(false)}
            ref={cancelButtonRef}
          >
            Cancel
          </button>
        </div>
      </Dialog.Panel>
    </ModalContainer>
  );
};

export default BrandDeleteModal;
