import InputField from "../ui/InputField"
import ButtonSubmit from "../ui/ButtonSubmit"

export default function RegisterForm() {
  return (
    <div>
      <h2 className="font-bold text-center text-2xl">Register</h2>
      <form className="flex flex-1 flex-col gap-2 items-center justify-center mt-2 mb-5">
        <InputField type="email" placeholder="Username" />
        <InputField type="email" placeholder="E-mail" />
        <InputField type="password" placeholder="Password" />
        <ButtonSubmit content="Get Started" />
      </form>
    </div>
  )
}