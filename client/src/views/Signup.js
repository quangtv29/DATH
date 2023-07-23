import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Signup = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      axios.post('/api/signupp', { name, user, password })
        .then((response) => {
          console.log("hihi");
        })
        .catch((err) => {
          console.error(err);
        })
      axios.post('/api/signup', { user, phone, address, name })
        .then((response) => {
          navigate('/login');
        })
        .catch((err) => {
          console.error(err);

        })
    }
    catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-15">
                <input type="text" value={name} name="name" placeholder="Name" className="form-control" onChange={(e) => {
                  return setName(e.target.value);
                }} />
                <input type="email" value={user} name="email" placeholder="Email" className="form-control"
                  onChange={(e) => setUser(e.target.value)}
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="form-control"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button className="button border-0" onClick={(e) => handleSubmit(e)}>Sign Up</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
