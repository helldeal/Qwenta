export default function Button({ children, type = "primary" }: any) {
  return (
    <button
      className={`py-9 px-16 rounded w-60 ${
        type === "primary"
          ? "bg-[#8BC7B1] text-white"
          : "text-[#8BC7B1] border-[#8BC7B1] border-2"
      }`}
    >
      {children}
    </button>
  );
}
