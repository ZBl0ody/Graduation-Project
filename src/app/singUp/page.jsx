"use client";
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "singUp",
  description: "singUp",
};

const singUp = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="container h-full  flex flex-col mx-auto  justify-between snap-start	 text-center md:text-left">
      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-90 p-8 rounded-xl w-full max-w-md space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="/logo.png" alt="logo" />
            {/* <h1 className=" logo w-10 h-10 "></h1> */}

            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-secolor">
              Creat New Account
            </h2>
          </div>

          <form onSubmit={onSubmit} className="mt-8 space-y-6" method="POST">
            <div className=" rounded-md shadow-sm">
              <input
                type="email"
                autoComplete="email"
                required
                className="mb-5 pl-2 relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-maincolor sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
              <input
                type="text"
                required
                className=" mb-5 pl-2 relative  block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-maincolor sm:text-sm sm:leading-6"
                placeholder="user name"
              />
              <input
                type="password"
                required
                className="mb-5 pl-2 relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-maincolor sm:text-sm sm:leading-6"
                placeholder="Password"
              />
              <input
                type="password"
                required
                className="mb-5 pl-2 relative block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-maincolor sm:text-sm sm:leading-6"
                placeholder="confirm password "
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label className="ml-2 block text-sm text-secolor">
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-maincolor px-3 py-2 text-sm font-semibold text-white hover:bg-secolor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default singUp;
