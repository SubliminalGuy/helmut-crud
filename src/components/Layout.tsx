import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const [showModal, setShowModal] = useState(true);

  function menuIconClick() {
    const modal = !showModal;
    setShowModal(modal);
  }

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
            <NavLink className="modal-link" onClick={menuIconClick} to={"/"}>
              Home
            </NavLink>
          </div>
          <div className="modal-link-container">
            <NavLink
              className="modal-link"
              onClick={menuIconClick}
              to={"/audiomix"}
            >
              ProTools Audiomix
            </NavLink>
          </div>
          <div className="modal-link-container">
            <NavLink
              className="modal-link"
              onClick={menuIconClick}
              to={"/openmedia"}
            >
              OpenMedia Projects
            </NavLink>
          </div>
          <div className="modal-link-container">
            <NavLink
              className="modal-link"
              onClick={menuIconClick}
              to={"/hostname"}
            >
              Hostname Tool
            </NavLink>
          </div>
          <div className="modal-link-container">
            <NavLink
              className="modal-link"
              onClick={menuIconClick}
              to={"/aicut"}
            >
              AICut Metadata
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
