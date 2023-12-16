"use client";
import Link from "next/link";
import React, { useState } from "react";
import Field from "@/component/Field/Field";
import axios from "axios";

export const metadata = {
  title: " calculate",
  description: "calculate your carbon footprint",
};

const Scopes = () => {
  const [pageN, setPageN] = useState(1);

  const next = () => {
    if (pageN !== 3) setPageN(pageN + 1);
    console.log(pageN);
  };
  const back = () => {
    if (pageN !== 1) setPageN(pageN - 1);
  };
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    // Make HTTP POST request to the backend
    axios
      .post("/form-data", formData)
      .then((response) => {
        console.log(response.data);
        // Handle success response and navigate to /Result
        router.push("/calc/Scopes/result");
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      });
  };
  return (
    <form
      data-step-step
      onSubmit={handleSubmit}
      className="container mx-auto my-9 min-h-screen flex flex-col justify-around "
    >
      <h1 className="font-extralight mb-5  text-transparent text-7xl stroke">
        Scope {pageN}
      </h1>
      {/* //////////Scope1//////////////////////////////////// */}
      <div
        data-step="1"
        className={pageN !== 1 ? "hidden " : "flex flex-1 flex-col gap-5"}
      >
        <div className="flex bg-white flex-1 shadow-2xl rounded gap-5 items-center p-9 ">
          <h1 className="text-maincolor text-3xl w-52">stationary</h1>
          <Field name="mobile" formData={formData} setFormData={setFormData} />
        </div>
        <div className="flex bg-white flex-1 shadow-2xl rounded gap-5  items-center p-9 ">
          <h1 className="text-maincolor text-3xl w-52">moblid</h1>
          <Field
            name="stationary"
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="flex bg-white flex-1 shadow-2xl rounded gap-5 items-center p-9 ">
          <h1 className="text-maincolor text-3xl w-52">AC</h1>
          <Field name="AC" formData={formData} setFormData={setFormData} />
        </div>
      </div>
      {/* //////////Scope2//////////////////////////////////// */}
      <div data-step="2" className={pageN !== 2 && "hidden"}>
        <div className="flex bg-white  shadow-2xl rounded gap-5 items-center p-9 ">
          <h1 className="text-maincolor text-3xl">electricty</h1>
          <Field
            name="electricty"
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        {/* //////////Scope3//////////////////////////////////// */}
      </div>
      <div data-step="3" className={pageN !== 3 && "hidden"}>
        <div className="flex bg-white  shadow-2xl rounded gap-5 items-center p-9 ">
          <h1 className="text-maincolor text-3xl">waste</h1>
          <Field name="waste" formData={formData} setFormData={setFormData} />
        </div>
      </div>

      <div className="flex justify-center gap-24 mt-5">
        {pageN === 1 && (
          <Link href="/calc" className="btn px-9 py-4">
            Back
          </Link>
        )}
        {pageN !== 1 && (
          <button type="button" onClick={back} className=" btn px-9 py-4">
            back
          </button>
        )}

        {pageN === 3 && (
          <Link href="/calc/Scopes/result">
            <button
              type="submit"
              className="px-9 py-4 border-[1px] font-semibold rounded-xl hover:bg-maincolor hover:border-[#155e45] transition-all duration-500"
            >
              submit
            </button>
          </Link>
        )}
        {pageN !== 3 && (
          <button type="button" onClick={next} className="btn px-9 py-4">
            next
          </button>
        )}
      </div>
    </form>
  );
};

export default Scopes;
