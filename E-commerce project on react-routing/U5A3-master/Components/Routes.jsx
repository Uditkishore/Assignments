import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { NotFoundPage } from "./NotFoundPage";
import { ProductsDetailsPage } from "./ProductsDetailsPage";
import { ProductsPage } from "./ProductsPage";
import { Route, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/products"} element={<ProductsPage />}></Route>
        <Route path={"/products/:id"} element={<ProductsDetailsPage />}></Route>
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
