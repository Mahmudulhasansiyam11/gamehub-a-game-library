import React, { useEffect } from "react";
import NavBar from "../Components/Header/NavBar";
import Banner from "../Components/Banner/Banner";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Loading from "../Pages/Loading/Loading";

const Root = () => {
  const { state } = useNavigation();

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,#0A0B36,#0E425C,#0A0B36)]">
      {/* NavBar */}
      <NavBar></NavBar>
      {/* Outlet */}
      {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      {/* Footer */}

      <footer className="bg-[#031637] text-white py-10">
        <Footer></Footer>
      </footer>

      <ToastContainer />
    </div>
  );
};

export default Root;
