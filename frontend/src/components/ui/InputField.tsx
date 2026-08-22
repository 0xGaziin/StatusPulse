interface InputFieldProps {
  type: string;
  placeholder: string;
  name: string;
}

export default function InputField({ type, placeholder , name }: InputFieldProps) {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className="border-2 border-green-600 rounded-xl p-1 px-4"
    />
  )
}