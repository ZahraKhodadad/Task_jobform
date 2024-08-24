const SelectOption = ({ SelectOptions, formik, name }) => {
  return (
    <div className="formControl flex flex-col px-8 py-4">
      <label
        className="text-slate-600 dark:text-slate-50 text-sm font-black mb-2"
        htmlFor={name}
      >
        شغل<span className="text-red-400">*</span>
      </label>
      <select
        {...formik.getFieldProps(name)}
        name={name}
        id={name}
        className="dark:bg-slate-50 dark:text-slate-700 p-2 rounded"
      >
        {SelectOptions.map((item) => (
          <option
            value={item.value}
            key={item.value}
            className="dark:text-slate-700 focus:outline-none"
          >
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="text-red-400">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectOption;
