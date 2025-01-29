import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import SubHeader from "./SubHeader";

export default function MainLayout() {
  return (
    <div>
      <Header />

      <div className="">
        <div className="w-full ">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
