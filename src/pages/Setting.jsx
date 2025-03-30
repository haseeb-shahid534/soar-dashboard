import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { settingValidationSchema } from "../validations/settingValidationSchema";
import SpinnerLoading from "../components/Spinner";
import { updateUserProfile } from "../store/dashboardSlice";
import InputField from "../components/InputField";

const Setting = () => {
  const { user, loading } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("edit");
  const [previewImage, setPreviewImage] = useState(user.profilePicture);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: user.name || "",
      username: user.username || "",
      email: user.email || "",
      password: "",
      dob: user.dob || "",
      presentAddress: user.address?.present || "",
      permanentAddress: user.address?.permanent || "",
      city: user.address?.city || "",
      postalCode: user.address?.postalCode || "",
      country: user.address?.country || "",
    },
    validationSchema: settingValidationSchema,
    onSubmit: (values) => {
      const updated = {
        ...values,
        profilePicture: selectedImage ? previewImage : user.profilePicture,
      };
      dispatch(updateUserProfile(updated));
      navigate("/");
    },
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewImage(reader.result);
    reader.readAsDataURL(file);
  };

  if (loading || !user) return <SpinnerLoading />;

  return (
    <div className="bg-white shadow rounded-xl max-w-7xl mx-auto p-6 md:p-10">
      {/* Tabs */}
      <div className="flex space-x-8 mb-6">
        {["edit", "preferences", "security"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 border-b-2 ${
              activeTab === tab
                ? "border-black font-medium text-[#232323]"
                : "border-transparent text-[#718EBF]"
            } capitalize`}
          >
            {tab === "edit"
              ? "Edit Profile"
              : tab === "preferences"
              ? "Preferences"
              : "Security"}
          </button>
        ))}
      </div>

      {activeTab === "edit" && (
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Avatar Upload */}
            <div className="flex justify-center lg:justify-start mb-6 md:mb-0">
              <div className="relative w-24 h-24">
                <img
                  src={previewImage}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
                <label className="absolute bottom-0 right-0 bg-black text-white w-7 h-7 flex items-center justify-center rounded-full cursor-pointer shadow-md hover:bg-gray-800 transition-all">
                  <i className="fa fa-pen text-xs"></i>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 flex-1">
              <InputField label="Your Name" name="name" formik={formik} />
              <InputField label="User Name" name="username" formik={formik} />
              <InputField label="Email" name="email" formik={formik} />
              <InputField
                label="Password"
                name="password"
                formik={formik}
                type="password"
              />
              <InputField
                label="Date of Birth"
                name="dob"
                formik={formik}
                type="date"
              />
              <InputField
                label="Present Address"
                name="presentAddress"
                formik={formik}
              />
              <InputField
                label="Permanent Address"
                name="permanentAddress"
                formik={formik}
              />
              <InputField label="City" name="city" formik={formik} />
              <InputField
                label="Postal Code"
                name="postalCode"
                formik={formik}
              />
              <InputField label="Country" name="country" formik={formik} />
            </div>
          </div>

          <div className="flex justify-center md:justify-end mt-10">
            <button
              type="submit"
              className="w-full md:w-[190px] h-[50px] bg-black font-bold text-white px-8 py-2 rounded-2xl hover:bg-gray-900"
            >
              Save
            </button>
          </div>
        </form>
      )}

      {activeTab === "preferences" && (
        <div className="text-gray-500 text-sm">
          Preferences settings coming soon...
        </div>
      )}
      {activeTab === "security" && (
        <div className="text-gray-500 text-sm">
          Security settings coming soon...
        </div>
      )}
    </div>
  );
};

export default Setting;
