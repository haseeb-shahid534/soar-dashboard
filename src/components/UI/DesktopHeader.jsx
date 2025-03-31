import BellIcon from "../../svg/BellSvg";

const DesktopHeader = ({ user, title }) => (
  <header className="hidden md:flex justify-between items-center bg-white px-6 py-4 shadow">
    <div className="flex items-center gap-8">
      <h2 className="text-xl font-semibold text-[#2E3261]">{title}</h2>
    </div>

    <div className="flex items-center gap-4">
      <div className="flex items-center bg-[#F5F7FA] rounded-full px-4">
        <i className="fas fa-search text-[#8E98B3] mr-2"></i>
        <input
          type="text"
          placeholder="Search for something"
          className="bg-transparent outline-none text-sm text-[#8E98B3] placeholder-[#8E98B3] w-[255px] h-[50px]"
        />
      </div>

      <button className="bg-[#F5F7FA] flex items-center justify-center w-[50px] h-[50px] rounded-full text-[#2E3261]">
        <i className="fas fa-cog text-xl"></i>
      </button>
      <BellIcon />

      <img
        src={user.profilePicture}
        alt={user.name}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  </header>
);

export default DesktopHeader;
