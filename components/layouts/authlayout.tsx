// components/AuthLayout.tsx
import React from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Form Section */}
      <div className="flex overflow-auto flex-col  lg:w-1/2 w-full lg:py-5 lg:px-7  p-3 bg-white dark:bg-gray-900">
        {children}
      </div>

      {/* Image Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-white justify-center items-center">
        <Image
          src="/images/2024-08-09-10-39-33.png"
          alt="Auth Image"
          width={1000}
          height={1000}
          className="overflow-hidden fixed top-0 rounded-[10px] w-full h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
