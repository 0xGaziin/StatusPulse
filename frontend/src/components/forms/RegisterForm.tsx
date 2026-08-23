'use client';

import axios from "axios"

import InputField from "../ui/InputField"
import ButtonSubmit from "../ui/ButtonSubmit"

export default function RegisterForm() {
  const handleRegister = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
        name: name,
        email: email,
        password: password,
      });

      console.log(response.data)
    } catch (error: any) {

    }
  }

  return (
    <div>
      <h2 className="font-bold text-center text-2xl">Register</h2>
      <form className="flex flex-1 flex-col gap-2 items-center justify-center mt-2 mb-5" onSubmit={handleRegister}>
        <InputField 
          name="name"
          type="text" 
          placeholder="Username" 
        />

        <InputField 
          name="email"
          type="email" 
          placeholder="E-mail" 
        />

        <InputField 
          name="password"
          type="password" 
          placeholder="Password" 
        />

        <ButtonSubmit content="Get Started" />
      </form>
    </div>
  )
}