import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary"; // Add more variants as needed
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  // Define the base classes for the button
  const baseClasses =
    " py-2.5 h-10 rounded-lg max-w-[176px] w-full shadow border font-semibold justify-center items-center gap-2 inline-flex";

  // Define classes for different button variants
  const variantClasses: Record<string, string> = {
    primary:
      "px-4 bg-[#3F5BF6] hover:bg-[#0E31F2] text-white border-blue-600 hover:border-blue-700",
    secondary: "bg-white px-[18px] w-[167px] text-slate-700  border-gray-300 ",
    // Add more variants as needed
  };

  // Combine base and variant classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
