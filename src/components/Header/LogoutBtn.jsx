import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await authService.logout();
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <button
      className="inline-bock rounded-full px-6 py-2 text-sm font-medium text-slate-100 duration-200 hover:bg-white/10 hover:text-white"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
