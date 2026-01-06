import type { ReactNode } from "react";

export default function BackgroundWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-background-component-grey flex flex-col items-center">
      {children}
    </div>
  );
}
