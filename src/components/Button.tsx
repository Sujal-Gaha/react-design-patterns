interface IButtonProps {
  btnText: string;
  onClick: () => void;
}

const Button = ({ btnText, onClick }: IButtonProps) => {
  return (
    <button
      className="p-2 bg-slate-300 rounded-md hover:bg-slate-200 duration-150 ease-in-out"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
