import BrandAddModal from "@/components/Admin/BrandModal/BrandAddModal";
import BrandDeleteModal from "@/components/Admin/BrandModal/BrandDeleteModal";
import TypesAddModal from "@/components/Admin/TypesModal/TypesAddModal";
import TypesDeleteModal from "@/components/Admin/TypesModal/TypesDeleteModal";
import Container from "@/components/UI/Container";
import { useState, type FC } from "react";
import { Helmet } from "react-helmet";

interface AdminProps {}

const Admin: FC<AdminProps> = () => {
  const [openTypeAddModal, setOpenTypeAddModal] = useState(false);
  const [openTypeDeleteModal, setOpenTypeDeleteModal] = useState(false);

  const [openBrandAddModal, setOpenBrandAddModal] = useState(false);
  const [openBrandDeleteModal, setOpenBrandDeleteModal] = useState(false);

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
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Devices
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <button className="w-32 mr-6 border-2 border-white bg-green-600 text-white py-1 px-2 rounded-md">
                    Add new device
                  </button>
                  <button className="w-32 border-2 border-white bg-red-600 text-white py-1 px-2 rounded-md">
                    Delete device
                  </button>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Types
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <button
                    onClick={() => setOpenTypeAddModal(true)}
                    className="w-32 mr-6 border-2 border-white bg-green-600 text-white py-1 px-2 rounded-md"
                  >
                    Add new type
                  </button>
                  <button
                    onClick={() => setOpenTypeDeleteModal(true)}
                    className="w-32 border-2 border-white bg-red-600 text-white py-1 px-2 rounded-md"
                  >
                    Delete type
                  </button>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Brands
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <button
                    onClick={() => setOpenBrandAddModal(true)}
                    className="w-32 mr-6 border-2 border-white bg-green-600 text-white py-1 px-2 rounded-md"
                  >
                    Add new brand
                  </button>
                  <button
                    onClick={() => setOpenBrandDeleteModal(true)}
                    className="w-32 border-2 border-white bg-red-600 text-white py-1 px-2 rounded-md"
                  >
                    Delete brand
                  </button>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Users
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <button
                    className="mr-6 w-32 border-2 -600 text-white rounded-md "
                    disabled
                  ></button>
                  <button className="w-32 border-2 border-white bg-red-600 text-white py-1 px-2 rounded-md">
                    Delete user
                  </button>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <TypesAddModal open={openTypeAddModal} setOpen={setOpenTypeAddModal} />
        <TypesDeleteModal
          open={openTypeDeleteModal}
          setOpen={setOpenTypeDeleteModal}
        />

        <BrandAddModal
          open={openBrandAddModal}
          setOpen={setOpenBrandAddModal}
        />
        <BrandDeleteModal
          open={openBrandDeleteModal}
          setOpen={setOpenBrandDeleteModal}
        />
      </Container>
    </>
  );
};

export default Admin;
