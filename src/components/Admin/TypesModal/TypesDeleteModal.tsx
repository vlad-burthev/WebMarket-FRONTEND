import { useRef, type FC, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { deleteType, getTypes } from "@/store/typeSlice/typeAPI";
import ModalContainer from "../../UI/ModalContainer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { setSelectedType, setTypes } from "@/store/typeSlice/typeSlice";
import ListBoxUi from "@/components/UI/ListBox";

interface TypesDeleteModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TypesDeleteModal: FC<TypesDeleteModalProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const [selectedType, setSelectedType] = useState("Choose a type");
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.type);
  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const deleteTypeHandler = async () => {
    const data: any = await dispatch(deleteType(selectedType));
    if (data.error) {
      return alert("Such brand doesn't exist!");
    }
    dispatch(setTypes(types.filter((type) => type.name !== selectedType)));
    setSelectedType("Choose a type");
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
                Delete Type
              </Dialog.Title>
              <div className="mt-2">
                <ListBoxUi
                  list={types}
                  setSelected={setSelectedType}
                  selected={selectedType}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={deleteTypeHandler}
          >
            Delete Type
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

export default TypesDeleteModal;
