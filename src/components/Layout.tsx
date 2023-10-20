import { useState, useEffect } from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [showModal, setShowModal] = useState(false);

  function menuIconClick() {
    const modal = true;
    setShowModal(modal);
  }

  let location = useLocation();

  useEffect(() => {
    const modal = false;
    setShowModal(modal);
  }, [location]);

  return (
    <>
      {!showModal && (
        <div className="layout-container">
          <Header modalHandler={menuIconClick} />

          <Outlet />
          <Footer />
        </div>
      )}
      {showModal && (
        <div className="modal">
          <div className="modal-link-container">
            <NavLink className="modal-link" to={"/"}>
              Home
            </NavLink>
          </div>
          <div className="modal-link-container">
            <NavLink className="modal-link" to={"/audiomix"}>
              ProTools Audiomix
            </NavLink>
          </div>
          <div className="modal-link-container">
            <NavLink className="modal-link" to={"/openmedia"}>
              OpenMedia Projects
            </NavLink>
          </div>
          <div className="modal-link-container">
            <NavLink className="modal-link" to={"/hostname"}>
              Hostname Tool
            </NavLink>
          </div>
          <div className="modal-link-container">
            <NavLink className="modal-link" to={"/aicut"}>
              AICut Metadata
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
