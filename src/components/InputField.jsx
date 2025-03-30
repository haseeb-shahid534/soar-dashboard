const InputField = ({ label, name, type = "text", formik }) => (
  <div className="flex flex-col gap-2">
    <label className="text-base font-medium text-gray-800">{label}</label>
    <input
      type={type}
      name={name}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      className="rounded-full border border-[#DFEAF2] px-4 md:px-6 lg:px-8 py-2 md:py-4 text-[#6b84b8] text-base placeholder-[#6b84b8] focus:outline-none focus:ring-2 focus:ring-blue-200"
      placeholder={label}
    />
    {formik.touched[name] && formik.errors[name] && (
      <span className="text-sm text-red-500">{formik.errors[name]}</span>
    )}
  </div>
);

export default InputField;
