export default function Button({ variant, onClick, children }) {
  let variant_class = "";

  switch (variant) {
    case "primary":
      variant_class = "bg-lime-400 text-black";
      break;
    case "secondary":
      variant_class = "bg-slate-100 text-black";
      break;
    case "danger":
      variant_class = "bg-red-500 text-white";
  }

  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 mt-4 mx-auto block rounded-full ${variant_class}`}
    >
      {children}
    </button>
  );
}
