const TextareaOption = ({ label, name, formik, type }) => {
  return (
    <div dir="ltr" className="w-full formControl flex flex-col px-8 py-4">
      <label
        dir="rtl"
        className="text-slate-600 text-sm font-black dark:text-slate-50"
        htmlFor={name}
      >
        {label}
      </label>

      <textarea
        dir="rtl"
        id={name}
        name={name}
        // value={formik.values.email}
        {...formik.getFieldProps(name)}
        type={type}
        className="px-2 py-2 rounded dark:text-slate-700 dark:focus:bg-slate-100 dark:focus:text-slate-700 focus:bg-violet-100 outline-none focus:ring-2 focus:ring-white"
      />
      {/* {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-400">{formik.errors[name]}</div>
      )} */}
    </div>
  );
};

export default TextareaOption;
