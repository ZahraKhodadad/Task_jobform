"use client";

import SignUpForm from "@/components/SignUpForm";
import { Suspense, useState } from "react";
import Loading from "./loading";
import JobFeature from "@/components/JobFeatures";

const SignUpPage = () => {
  // throw new Error("Signup Error...");
  const [isShow, setIsShow] = useState(false);
  const [formValues, setFormValues] = useState({});
  console.log(formValues);
  return (
    <div className="mt-20 grid grid-cols-1 xl:grid-cols-2">
      <SignUpForm setIsShow={setIsShow} setFormValues={setFormValues} />

      <Suspense fallback={<Loading />}>
        {isShow ? (
          <JobFeature formValues={formValues} />
        ) : (
          <div>
            <div className="mt-4 md:max-w-xl mx-auto dark:bg-slate-500 bg-slate-100 rounded-md shadow-md  shadow-slate-300 overflow-hidden border-1 border-slate-800">
              <h1 className="shadow-md dark:shadow-slate-300 shadow-violet-300 bg-violet-100 dark:bg-slate-700 px-8 py-2 text-center dark:text-white text-slate-700 text-base">
                اطلاعات ثبت شده
              </h1>
              <h1 className="p-4">اطلاعات ثبت شده ای وجود ندارد</h1>
            </div>
          </div>
        )}
      </Suspense>
    </div>
  );
};

export default SignUpPage;
