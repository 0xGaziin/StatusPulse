interface ButtonSubmitProps {
  content: string;
}

export default function ButtonSubmit({ content }: ButtonSubmitProps) {
  return (
    <button className="border-2 border-green-500 bg-green-300 text-green-800 font-bold rounded-xl p-2 px-6 cursor-pointer">
      {content}
    </button>
  )
}