interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  fn?: () => void;
}

const Button = ({ text, type, fn }: Props) => {
  return (
    <button
      onClick={fn}
      type={type}
      className="w-full bg-blue-900 text-white rounded py-1 px-8"
    >
      {text}
    </button>
  );
};

export default Button;
