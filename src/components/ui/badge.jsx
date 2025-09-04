export function Badge({ variant="default", className="", ...props }) {
  const base = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border";
  const variants = {
    default: "bg-gray-900 text-white border-gray-900",
    outline: "bg-white text-gray-700 border-gray-300",
  };
  return <span className={`${base} ${variants[variant]||variants.default} ${className}`} {...props} />;
}
