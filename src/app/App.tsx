import { FC, useEffect } from "react";
import AppRouter from "@/components/App/AppRouter";
import Header from "@/components/Header/Header";
import { useAppDispatch } from "@/store/store";
import { check } from "@/store/userSlice/userAPI";

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    try {
      dispatch(check());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
