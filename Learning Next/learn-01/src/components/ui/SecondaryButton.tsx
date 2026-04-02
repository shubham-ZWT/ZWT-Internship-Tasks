type SecondaryButtonProps = {
  text: string;
  onclick?: () => void;
};

export default function SecondaryButton({
  text,
  onclick,
}: SecondaryButtonProps) {
  return (
    <button
      className="bg-white text-primary border border-primary px-6 py-3 rounded-2xl hover:bg-primary hover:text-white hover:border-white transition-colors cursor-pointer"
      onClick={onclick}
    >
      {text}
    </button>
  );
}
