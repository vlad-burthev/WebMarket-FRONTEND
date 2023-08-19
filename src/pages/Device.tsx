import { getOneDevice } from "@/store/deviceSlice/deviceAPI";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect, type FC } from "react";

interface DeviceProps {}

const Device: FC<DeviceProps> = () => {
  const dispatch = useAppDispatch();
  const device = useAppSelector((state) => state.device.device);

  useEffect(() => {
    try {
      dispatch(getOneDevice("iphone_12_pro_max"));
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(device);

  return <h1>Device</h1>;
};

export default Device;
