import { useRef, type FC, useState } from "react";
import { Dialog } from "@headlessui/react";
import ModalContainer from "../../UI/ModalContainer";
import { useAppDispatch } from "@/store/store";
import { deleteDevice } from "@/store/deviceSlice/deviceAPI";

interface DeviceDeleteModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeviceDeleteModal: FC<DeviceDeleteModalProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const [device, setDevice] = useState("");
  const dispatch = useAppDispatch();

  const deleteDeviceHandler = async () => {
    const data: any = await dispatch(deleteDevice(device));
    if (data.error) {
      return alert("Such device doesn't exist!");
    }

    setDevice("");
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
                Delete device
              </Dialog.Title>
              <div className="mt-2">
                <div className="mt-2">
                  <input
                    value={device}
                    onChange={(e) => setDevice(e.target.value)}
                    name="deviceName"
                    type="text"
                    required
                    className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
            onClick={deleteDeviceHandler}
          >
            Delete device
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

export default DeviceDeleteModal;
