import Link from "next/link"
import Image from "next/image"
import RegisterForm from "../../forms/RegisterForm"

export default function RegisterSection() {
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
          <RegisterForm />
        </div>
      </section>

      <p className="mt-2 text-gray-700">
        By signing up, you agree to our <Link href='/terms' className="text-blue-600 font-bold cursor-pointer">Terms of Service</Link>.
      </p>
    </div>
  )
}