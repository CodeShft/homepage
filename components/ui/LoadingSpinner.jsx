const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full absolute inset-0 bg-zinc-900/20">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-500"></div>
    </div>
  );
};

export default LoadingSpinner;
