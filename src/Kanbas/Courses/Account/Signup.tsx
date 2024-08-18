import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
  const dispatch = useDispatch(); //implementing dispatch
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const signup = async () => {
    if (!user?.username) return window.alert('Missing username');
    if (!user?.password) return window.alert('Missing password');
    try {
    const currentUser = await client.signup({ role: 'STUDENT', ...user, email:'${user.username}@neu.edu' });
    dispatch(setCurrentUser(currentUser));

    navigate("/Kanbas/Account/Profile");
  } catch (err: any) {
    setError(err?.response?.data?.message);
  }
  };
  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && <div className="wd-error alert alert-danger">{error}</div>}
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username form-control mb-2" placeholder="username"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        className="wd-password form-control mb-2"
        placeholder="password"
      />
      <select
        id="wd-assignment-group"
        className="form-control"
        value={user.role}
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      >
        <option value="STUDENT">STUDENT</option>
        <option value="FACULTY">FACULTY</option>
        <option value="ADMIN">ADMIN</option>
        <option value="USER">USER</option> {/* 按道理最高权限不允许注册 */}
      </select>
      <button
        onClick={signup}
        className="wd-signup-btn btn btn-primary mb-2"
      >
        Sign up
      </button>
      <br />
      <Link to="/Kanbas/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
  );
}
