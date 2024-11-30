"use client";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full absolute inset-0 bg-zinc-900/40 z-10">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-500 border-t-transparent animate-pulse"></div>
    </div>
  );
};

export default LoadingSpinner;
