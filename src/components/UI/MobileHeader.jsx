const MobileHeader = ({ user, title, toggleSidebar }) => (
  <header className="md:hidden bg-white p-4 shadow">
    <div className="flex items-center justify-between mb-4">
      <button onClick={toggleSidebar}>
        <i className="fas fa-bars text-2xl text-gray-800"></i>
      </button>
      <h2 className="text-[20px] font-bold text-[#343C6A]">{title}</h2>
      <img
        src={user.profilePicture}
        alt={user.name}
        className="w-10 h-10 rounded-full"
      />
    </div>

    <div className="relative">
      <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
        <i className="fas fa-search"></i>
      </span>
      <input
        type="text"
        placeholder="Search for something"
        className="w-full pl-10 h-[40px] pr-4 py-2 bg-[#F5F7FA] rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
      />
    </div>
  </header>
);

export default MobileHeader;
