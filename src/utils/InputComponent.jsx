const Input = ({ label, name, formik, type }) => {
  return (
    <div dir="ltr" className="formControl flex flex-col px-8 py-4">
      <label dir="rtl" className="text-slate-600 dark:text-slate-50 text-sm font-black mb-2" htmlFor={name}>
        {label}<span className="text-red-400">*</span>
      </label>

      <input
        dir="rtl"
        id={name}
        name={name}
        {...formik.getFieldProps(name)}
        type={type}
        className="px-2 py-2 rounded dark:focus:bg-slate-100 focus:bg-violet-100 dark:text-slate-700 outline-none focus:ring-2 focus:ring-white"
      />
      {formik.errors[name] && formik.touched[name] && (
        <div dir="rtl" className="text-red-400">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Input;
