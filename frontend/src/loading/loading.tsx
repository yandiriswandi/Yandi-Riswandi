

const LoadingOvr = (prop: any) => {
  return (
    prop.loading && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-900 z-[1000] ">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#4DA49B] " >
        </div>

      </div>
    )
  );
};

export default LoadingOvr;
