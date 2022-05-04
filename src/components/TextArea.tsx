import React from "react";

interface Props {
  text: string;
  name: string;
  required?: boolean;
  value: string;
  handleSubmitData: (e: any) => void;
}

const TextArea = ({
  text,
  value,
  handleSubmitData,
  required = false,
}: Props) => {
  return (
    <label className="block pb-5">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
        {text}
      </span>
      <textarea
        value={value}
        required={required}
        rows={3}
        onChange={handleSubmitData}
        name="description"
        className="resize-none mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-sm focus:ring-1"
        placeholder="Write a description"
      />
    </label>
  );
};

export default TextArea;
