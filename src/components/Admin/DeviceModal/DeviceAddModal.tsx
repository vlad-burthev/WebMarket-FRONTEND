import { useRef, type FC, useState } from "react";
import { Dialog } from "@headlessui/react";
import ModalContainer from "../../UI/ModalContainer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import ListBoxUi from "@/components/UI/ListBox";
import DeviceInfo from "./DeviceInfo";
import { createDevice } from "@/store/deviceSlice/deviceAPI";

interface DeviceAddModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeviceAddModal: FC<DeviceAddModalProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const { types } = useAppSelector((state) => state.type);
  const { brands } = useAppSelector((state) => state.brand);
  const dispatch = useAppDispatch();
  const [selectBrand, setSelectBrand] = useState<any>("Choose a brand");
  const [selectType, setSelectType] = useState<any>("Choose a type");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);
  const [info, setInfo] = useState([]);

  const addDevice = () => {
    let formData: any = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", image);
    formData.append("brandId", selectBrand);
    formData.append("typeId", selectType);
    formData.append("info", JSON.stringify(info));
    const data: any = dispatch(createDevice(formData));
    if (data.error) {
      return alert("Such brand already exists!");
    }
    setOpen(false);
    setSelectBrand("Choose a brand");
    setSelectType("Choose a type");
    setName("");
    setPrice(0);
    setImage(null);
    setInfo([]);
  };
  return (
    <ModalContainer
      open={open}
      setOpen={setOpen}
      cancelButtonRef={cancelButtonRef}
    >
      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className=" ">
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Dialog.Title
                as="h3"
                className="text-base font-semibold leading-6 text-gray-900"
              >
                Add new device
              </Dialog.Title>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      type="text"
                      name="name"
                      id="name"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <div className="mt-2">
                    <input
                      value={price}
                      onChange={(e: any) => setPrice(e.target.value)}
                      required
                      type="number"
                      name="price"
                      id="price"
                      className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Device Image
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e: any) => setImage(e.target.files[0])}
                      required
                      id="image"
                      name="image"
                      type="file"
                      className="pl-2  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 sm:col-start-1">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Types
                  </label>
                  <div className="mt-2">
                    <ListBoxUi
                      typeInfo={true}
                      list={types}
                      setSelected={setSelectType}
                      selected={selectType}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="сonfirm-password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Brands
                  </label>
                  <div className="mt-2">
                    <ListBoxUi
                      typeInfo={true}
                      list={brands}
                      setSelected={setSelectBrand}
                      selected={selectBrand}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <DeviceInfo setInfo={setInfo} info={info} />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
            onClick={addDevice}
          >
            Create device
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

export default DeviceAddModal;
