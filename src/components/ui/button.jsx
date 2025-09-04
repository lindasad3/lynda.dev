export function Button({ as: As = "button", variant="default", className="", ...props }) {
  const base = "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition border";
  const variants = {
    default: "bg-gray-900 text-white border-gray-900 hover:opacity-90",
    outline: "bg-white text-gray-900 border-gray-300 hover:bg-gray-50",
  };
  return <As className={`${base} ${variants[variant]||variants.default} ${className}`} {...props} />;
}
