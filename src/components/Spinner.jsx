const SpinnerLoading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-8 h-8 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default SpinnerLoading;
