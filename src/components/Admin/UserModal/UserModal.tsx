import { useRef, type FC, useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import ModalContainer from "../../UI/ModalContainer";
import { useAppDispatch, useAppSelector } from "@/store/store";
import ListBoxUi from "@/components/UI/ListBox";
import { deleteUser, getUsers } from "@/store/userSlice/userAPI";
import { setUsers } from "@/store/userSlice/userSlice";

interface UserModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserModal: FC<UserModalProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.user);
  const [selectedUser, setSelectedUser] = useState("Choose a user");

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (users.length === 0) {
    return "loading";
  }

  const deleteUserHandler = () => {
    dispatch(deleteUser(selectedUser));
    setSelectedUser("choose user");
    dispatch(
      dispatch(setUsers(users.filter((user) => user.email !== selectedUser)))
    );
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
                Craete new Type
              </Dialog.Title>
              <div className="mt-2 ">
                <ListBoxUi
                  list={users}
                  setSelected={setSelectedUser}
                  selected={selectedUser}
                />
                <button
                  type="button"
                  className="absolute right-4 bottom-4 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={deleteUserHandler}
                >
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </ModalContainer>
  );
};

export default UserModal;
