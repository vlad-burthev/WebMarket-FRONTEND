import { DEVICE_ROUTE } from "@/constants/constants";
import { getDevices } from "@/store/deviceSlice/deviceAPI";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, type FC } from "react";
import { Link } from "react-router-dom";

interface DeviceListProps {}

const DeviceList: FC<DeviceListProps> = () => {
  const { devices, page } = useAppSelector((state) => state.device);
  const { selectedType } = useAppSelector((state) => state.type);
  const { selectedBrand } = useAppSelector((state) => state.brand);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getDevices({
        brandId: null,
        typeId: null,
        page: page,
        limit: 24,
      })
    );
  }, [devices.count, selectedBrand, selectedType]);

  useEffect(() => {
    dispatch(
      getDevices({
        brandId: null,
        typeId: null,
        page: 1,
        limit: 24,
      })
    );
  }, [page, selectedBrand, selectedType]);

  console.log(devices);

  return (
    <>
      {devices.rows && (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">devices</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {devices.rows.map((device) => (
                <Link
                  key={device.id}
                  to={DEVICE_ROUTE + "/" + device.slug}
                  className="group border-2 border-slate-200 rounded-xl p-4"
                >
                  <div className="h-40 overflow-hidden rounded-lg   xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={import.meta.env.VITE_API_URL + device.img}
                      alt={device.name}
                      className="h-full aspect-[3/4] mx-auto  group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{device.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {device.price} ₴
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeviceList;
