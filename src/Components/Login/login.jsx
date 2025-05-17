import React from "react";
import login from "../../assets/login_img.png";
import { useState } from "react";
import { useFirebase } from "../context/Firebase";

export default function Login() {
  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <>
      <div className="bg-gray-100 mb-10">
        <div className="flex justify-around pl-20 pr-20 m-auto pt-2 pb-2 bg-white shadow-xs">
          <p className="from-neutral-50">Electronics</p>
          <p className="from-neutral-50">TV & Appliances</p>
          <p className="from-neutral-50">Men</p>
          <p className="from-neutral-50">Women</p>
          <p className="from-neutral-50">Baby & kids</p>
          <p className="from-neutral-50">Home & furniture</p>
          <p className="from-neutral-50">Sports, books & more</p>
          <p className="from-neutral-50">Flights</p>
          <p className="from-neutral-50">Offer Zone</p>
        </div>
        <div className="flex align-middle justify-center ">
          <div className="flex mt-5 shadow-xl/20">
            <div className="grid align-top grid-rows-7 gap-5 bg-blue-500 h-130 w-80 p-8 ">
              <h3 className="self-start text-[28px] font-medium text-white">
                Login
              </h3>
              <p className=" text-white text-[18px]">
                Get access to your Orders, Wishlist and Recommendations
              </p>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img className="self-end" src={login} />
            </div>
            {!firebase.user ? (
              <div className="bg-white shadow-xl/20">
                <div className=" h-130 w-140 p-12 grid align-top grid-rows-7">
                  <input
                    className="w-full h-10 border-b-1 focus:outline-none focus:border-blue-500"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    className="w-full h-10 border-b-1 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Example@email.com"
                  />
                  <input
                    className="w-full h-10 border-b-1 focus:outline-none focus:border-blue-500"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Enter you password here"
                  />
                  <p className="text-[12px] text-gray-400">
                    By continuing, you agree to Flipkart's
                    <a className="text-blue-500 cursor-pointer">
                      {" "}
                      Terms of Use
                    </a>
                    and
                    <a className="text-blue-500 cursor-pointer">
                      Privacy Policy
                    </a>
                    .
                  </p>
                  <div className="flex gap-2">
                    <div className="w-1/2">
                      <button
                        className=" cursor-pointer text-center text-white w-full hover:shadow-2xl bg-orange-500 h-10 rounded-xs  hover:bg-orange-600 focus:outline-2 focus:outline-offset-2 active:bg-orange-700"
                        onClick={async () => {
                          try {
                            const userCredential =
                              await firebase.signupUserWithEmailAndPassword(
                                email,
                                password
                              );
                            const userId = userCredential.user.uid;
                            await firebase.putData("users/" + userId, {
                              email,
                              name,
                              password,
                            });
                            console.log("Signup successful");
                          } catch (error) {
                            console.error("Signup error:", error.message);
                          }
                        }}
                      >
                        SignUp
                      </button>
                    </div>
                    <div className="w-1/2 ">
                      <button
                        className=" cursor-pointer text-center text-white w-full bg-orange-500 h-10 rounded-xs hover:shadow-2xl hover:bg-orange-600 focus:outline-2 focus:outline-offset-2 active:bg-orange-700"
                        onClick={async () => {
                          try {
                            const userCredential =
                              await firebase.loginUserWithEmailAndPassword(
                                email,
                                password
                              );
                            console.log(
                              "Login successful for user:",
                              userCredential.user.email
                            );
                          } catch (error) {
                            console.error("Login error:", error.message);
                          }
                        }}
                      >
                        SignIn
                      </button>
                      <p className="text-[10px] text-right text-gray-500">
                        Already Registered
                        <span
                          onClick={async () => {
                            try {
                              const userCredential =
                                await firebase.loginUserWithEmailAndPassword(
                                  email,
                                  password
                                );
                              console.log(
                                "Login successful for user:",
                                userCredential.user.email
                              );
                            } catch (error) {
                              console.error("Login error:", error.message);
                            }
                          }}
                          className="text-blue-500 cursor-pointer"
                        >
                          User
                        </span>
                        ?
                      </p>
                    </div>
                  </div>
                  <span></span>
                  <span></span>
                  <span></span>
                  <button className="text-center w-full text-blue-500 h-10 rounded-xs mt-3 ">
                    New to Flipkart? Creat an Account
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className=" bg-white h-130 w-140 p-12 text-xl font-medium">
                  <p className="w-full text-center p-5">
                    {" "}
                    Welcome back, {firebase.user.displayName}!
                  </p>
                  <button
                    onClick={firebase.signOutUser}
                    className=" cursor-pointer text-center text-white w-full bg-orange-500 h-10 rounded-xs hover:shadow-2xl hover:bg-orange-600 focus:outline-2 focus:outline-offset-2 active:bg-orange-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
