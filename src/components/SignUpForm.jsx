"use client";
import * as Yup from "yup";
import Input from "@/utils/InputComponent";
import { useFormik } from "formik";
import SelectOption from "@/utils/SelectOptionComponent";
import TextareaOption from "@/utils/TextareaComponent";
import CheckboxInput from "@/utils/CheckBoxInput";

const RoleOptions = [
  { label: "شغل مورد نظر را انتخاب کنید ...", value: "" },
  { label: "ّfrontendDeveloper", value: "ّfrontendDeveloper" },
  { label: "BackendDeveloper", value: "BackendDeveloper" },
  { label: "FullStack", value: "FullStack" },
];
const CheckBoxSkills = [
  { label: "ReactJs", value: "ReactJs" },
  { label: "NextJs", value: "NextJs" },
  { label: "TailwindCss", value: "TailwindCss" },
  { label: "NodeJs", value: "NodeJs" },
  { label: "TypeScript", value: "TypeScript" },
];
const initialValues = {
  fullname: "",
  email: "",
  jobrole: "",
  experience: "",
  Skills: [],
  additionalinformation: "",
};
const validationSchema = Yup.object({
  fullname: Yup.string()
    .required("نام و نام خانوادگی خود را وارد کنید!")
    .min(6, "حداقل 6 کاراکتر لازم است!"),
  email: Yup.string()
    .email("فرمت ایمیل وارد شده صحیح نیست")
    .required("ایمیل خود را وارد کنید"),
  jobrole: Yup.string().required("عنوان شغل خود را وارد کنید!"),
  experience: Yup.number()
    .positive("عدد مثبت وارد  کنید")
    .required("سابقه کار خود را وارد کنید"),
  // Skills: Yup.array().required("مهارت های خود را وارد کنید"),
  // additionalinformation: Yup.string().required("توضیحات"),
});

const SignUpForm = ({ setIsShow, setFormValues }) => {
  const onSubmit = (values, { resetForm }) => {
    setIsShow((prevShow) => !prevShow);
    setFormValues(values);
    resetForm();
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  
  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-4 mx-auto md:max-w-xl  flex flex-col border rounded-md shadow-md shadow-slate-300 bg-slate-100 dark:bg-slate-500 dark:text-white overflow-hidden "
      >
        <h1 className="shadow-md dark:shadow-slate-300 shadow-violet-300 bg-violet-500 dark:bg-slate-700 px-8 py-2 text-center text-white text-base">
          اطلاعات فردی
        </h1>
        {/* <div className="flex flex-wrap"> */}
          <Input
            label="نام و نام خانوادگی"
            name="fullname"
            formik={formik}
            type="text"
          />
          <Input label="ایمیل" name="email" formik={formik} type="email" />
      
          <SelectOption
            SelectOptions={RoleOptions}
            name="jobrole"
            formik={formik}
          />
          <CheckboxInput
            name="Skills"
            formik={formik}
            CheckBoxOptions={CheckBoxSkills}
          />
          <Input
            className="w-full"
            label="سابقه کاری"
            name="experience"
            formik={formik}
            type="number"
          />

          <TextareaOption
            label="توضیحات"
            name="additionalinformation"
            formik={formik}
            type="text"
          />
        {/* </div> */}

        <button
          className="disabled:opacity-50 dark:bg-slate-700 dark:hover:bg-slate-600 disabled:bg-gray-600 mx-8 my-6 px-4 py-2 rounded  bg-violet-700 hover:bg-violet-600 text-white font-bold"
          type="submit"
          disabled={!formik.isValid}
        >
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
