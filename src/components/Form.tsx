import React, { FormEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, handleSubmit }: Props) => {
  return (
    <div className="w-full md:w-1/3 mx-auto p-5 border rounded">
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
};

export default Form;
