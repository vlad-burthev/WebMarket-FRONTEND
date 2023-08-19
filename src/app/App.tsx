import { FC } from "react";
import AppRouter from "@/components/App/AppRouter";
import Header from "@/components/Header/Header";

const App: FC = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
