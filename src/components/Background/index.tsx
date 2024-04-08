import Image from "next/image";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const Background = ({ children }: Props): JSX.Element => {
  return (
    <div className="h-screen pt-16">
      <Image alt="background-img" src="/images/background.jpg" fill className="object-cover" />
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  );
};

export default Background;
