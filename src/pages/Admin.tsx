import BrandAddModal from "@/components/Admin/BrandModal/BrandAddModal";
import BrandDeleteModal from "@/components/Admin/BrandModal/BrandDeleteModal";
import DeviceAddModal from "@/components/Admin/DeviceModal/DeviceAddModal";
import DeviceDeleteModal from "@/components/Admin/DeviceModal/DeviceDeleteModal";
import ControlPanelRows from "@/components/Admin/ControlPanelRows/ControlPanelRows";
import TypesAddModal from "@/components/Admin/TypesModal/TypesAddModal";
import TypesDeleteModal from "@/components/Admin/TypesModal/TypesDeleteModal";
import UserModal from "@/components/Admin/UserModal/UserModal";
import Container from "@/components/UI/Container";
import { useState, type FC } from "react";
import { Helmet } from "react-helmet";

interface AdminProps {}

const Admin: FC<AdminProps> = () => {
  const [openTypeAddModal, setOpenTypeAddModal] = useState(false);
  const [openTypeDeleteModal, setOpenTypeDeleteModal] = useState(false);

  const [openBrandAddModal, setOpenBrandAddModal] = useState(false);
  const [openBrandDeleteModal, setOpenBrandDeleteModal] = useState(false);

  const [openUserDeleteModal, setOpenUserDeleteModal] = useState(false);

  const [openDeviceAddModal, setOpenDeviceAddModal] = useState(false);
  const [openDeviceDeleteModal, setOpenDeviceDeleteModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Admin Panel</title>
        <meta name="description" content="Admin panel for Web Market" />
      </Helmet>
      <Container>
        <div className="mt-20 w-2/5  mx-auto ">
          <div className="px-4 sm:px-0 ">
            <h3 className="text-2xl font-semibold leading-7 text-gray-900">
              Admin Panel
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Product and user management.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <ControlPanelRows
                title="Devices"
                addBtnName="Add device"
                deleteBtnName="Delete device"
                addBtnFunc={() => setOpenDeviceAddModal(true)}
                deleteBtnFunc={() => setOpenDeviceDeleteModal(true)}
              />
              <ControlPanelRows
                title="Types"
                addBtnName="Add type"
                deleteBtnName="Delete type"
                addBtnFunc={() => setOpenTypeAddModal(true)}
                deleteBtnFunc={() => setOpenTypeDeleteModal(true)}
              />
              <ControlPanelRows
                title="Brands"
                addBtnName="Add brand"
                deleteBtnName="Delete brand"
                addBtnFunc={() => setOpenBrandAddModal(true)}
                deleteBtnFunc={() => setOpenBrandDeleteModal(true)}
              />
              <ControlPanelRows
                title="Users"
                addBtnName="Not Work"
                deleteBtnName="Delete user"
                deleteBtnFunc={() => setOpenUserDeleteModal(true)}
                disabled={true}
              />
            </dl>
          </div>
        </div>

        <BrandAddModal
          open={openBrandAddModal}
          setOpen={setOpenBrandAddModal}
        />
        <BrandDeleteModal
          open={openBrandDeleteModal}
          setOpen={setOpenBrandDeleteModal}
        />

        <TypesAddModal open={openTypeAddModal} setOpen={setOpenTypeAddModal} />
        <TypesDeleteModal
          open={openTypeDeleteModal}
          setOpen={setOpenTypeDeleteModal}
        />

        <UserModal
          open={openUserDeleteModal}
          setOpen={setOpenUserDeleteModal}
        />

        <DeviceAddModal
          open={openDeviceAddModal}
          setOpen={setOpenDeviceAddModal}
        />
        <DeviceDeleteModal
          open={openDeviceDeleteModal}
          setOpen={setOpenDeviceDeleteModal}
        />
      </Container>
    </>
  );
};

export default Admin;
