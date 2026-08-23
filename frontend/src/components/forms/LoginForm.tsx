'use client';

import axios from 'axios';
import { useRouter } from "next/navigation";
import { useState } from 'react';

import InputField from "../ui/InputField";
import ButtonSubmit from "../ui/ButtonSubmit";

export default function RegisterForm() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (isLoading) return;

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      if (!email || !password) throw new Error('Please fill in all fields.');

      setIsLoading(true);
      setMessage('Loading...');

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
        email,
        password
      }, {
        withCredentials: true
      });

      setMessage('Login successfully. Redirecting...');
      console.log(response.data);
      router.push('/dashboard');
    } catch (error: any) {
      console.error(error);

      const errorResponse = error.response?.data?.message;
      const errorMessage = Array.isArray(errorResponse) 
        ? errorResponse[0] 
        : errorResponse || error.message || 'Something went wrong.';

      setMessage(errorMessage);
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h2 className="font-bold text-center text-2xl">Sign In</h2>
      <p className={`font-bold text-center mt-2 ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
      <form className="flex flex-1 flex-col gap-2 items-center justify-center mt-2 mb-5" onSubmit={handleSubmit}>
        <InputField name="email" placeholder="E-mail" type="email"/>

        <InputField name="password" placeholder="Password" type="password"/>

        <ButtonSubmit content={isLoading ? "Loading..." : "Sign In"} />
      </form>
    </div>
  )
}