'use client';

import axios from 'axios';

import InputField from "../ui/InputField"
import ButtonSubmit from "../ui/ButtonSubmit"

export default function RegisterForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      if (!email  || !password) throw new Error('Please fill in all fields.');

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/login`, {
        email: email,
        password: password
      }, {
        withCredentials: true
      });

      console.log(response.data);
    } catch (error: any) {
      
    }
  }

  return (
    <div>
      <h2 className="font-bold text-center text-2xl">Sign In</h2>
      <form className="flex flex-1 flex-col gap-2 items-center justify-center mt-2 mb-5" onSubmit={handleSubmit}>
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

        <ButtonSubmit content="Sign In" />
      </form>
    </div>
  )
}