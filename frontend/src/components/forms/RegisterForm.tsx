'use client';

import axios from "axios"
import { useRouter } from "next/navigation";

import InputField from "../ui/InputField"
import ButtonSubmit from "../ui/ButtonSubmit"
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: any) => {
    if (isLoading) return;

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      setIsLoading(true);
      setMessage('Loading...');
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, {
        name: name,
        email: email,
        password: password,
      });
      setMessage('Finished! Redirecting...');

      console.log(response.data);
      router.push('/login');
    } catch (error: any) {
      console.error(error);
      setMessage(error.response?.data?.message || 'Something went wrong.');
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h2 className="font-bold text-center text-2xl">Register</h2>
      <p className={`font-bold ${message.includes('wrong') || message.includes('use') || message.includes('invalid') ? 'text-red-600' : 'text-green-600'}`}>{message}</p>
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