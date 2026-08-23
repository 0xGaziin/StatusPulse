import Link from "next/link"
import Image from "next/image"
import LoginForm from "../forms/LoginForm"

export default function LoginSection() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <section className="border-2 md:flex border-green-500 rounded-2xl">
        <div className="border-b-2 md:border-r-2 border-green-500"> {/* Image */}
          <Image 
            src="/header-image.jpg"
            alt="Header form image"
            width={400}
            height={50}
            priority
            className="rounded-t-2xl md:rounded-tl-2xl object-cover"
          />
        </div>

        <div className="mt-5 md:px-8"> {/* Form */}
          <LoginForm />
        </div>
      </section>
    </div>
  )
}