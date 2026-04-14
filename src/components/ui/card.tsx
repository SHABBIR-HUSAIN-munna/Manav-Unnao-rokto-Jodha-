import React from "react";

export function Card({ children, className = "" }: any) {
  return (
    <div className={`rounded-xl border bg-white shadow ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: any) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: any) {
  return <h3 className={`text-lg font-bold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }: any) {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }: any) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = "" }: any) {
  return <div className={`p-4 border-t ${className}`}>{children}</div>;
}
