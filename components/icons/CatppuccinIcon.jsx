const CatppuccinIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Kedi yüzü */}
      <circle cx="12" cy="12" r="10" />
      {/* Gözler */}
      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
      {/* Burun */}
      <path d="M12 13.5L12 14.5" />
      {/* Ağız */}
      <path d="M9 16.5C10 17.5 14 17.5 15 16.5" />
      {/* Kulaklar */}
      <path d="M6 6L8 8" />
      <path d="M18 6L16 8" />
    </svg>
  );
};

export default CatppuccinIcon;
