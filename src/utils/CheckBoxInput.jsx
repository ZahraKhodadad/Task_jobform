const CheckboxInput = ({ name, formik, CheckBoxOptions }) => {
  return (
    <div className="px-8 py-4">
      <label
        dir="rtl"
        // htmlFor={item.value}
        className="text-slate-600 dark:text-slate-50 font-black mb-2"
      >
        مهارت
      </label>
      <div className="formControl flex flex-wrap">
        {/* {console.log(formik.values.Skills)} */}
        {CheckBoxOptions.map((item) => (
          <div key={item.value} className="ml-4 mt-2">
            <input
              type="checkbox"
              id={item.value}
              name={name}
              value={item.value}
              onChange={formik.handleChange}
              checked={formik.values[name].includes(item.value)}
            />
            <label htmlFor={item.value} className="mr-1">
              {item.label}
            </label>
          </div>
        ))}
        {/* {formik.errors[name] && formik.touched[name] && (
          <div className="text-red-400">{formik.errors[name]}</div>
        )} */}
      </div>
    </div>
  );
};

export default CheckboxInput;
