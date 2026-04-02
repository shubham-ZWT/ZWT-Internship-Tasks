type PrimaryButtonProps = {
  text: string;
  onclick?: () => void;
};

export default function PrimaryButton({ text, onclick }: PrimaryButtonProps) {
  return (
    <button
      className="bg-primary border text-white px-6 py-3 rounded-2xl hover:bg-white hover:text-primary hover:border  transition-colors cursor-pointer"
      onClick={onclick}
    >
      {text}
    </button>
  );
}
