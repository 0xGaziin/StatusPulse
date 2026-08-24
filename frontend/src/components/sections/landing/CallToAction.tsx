import Link from "next/link";

interface CallToActionProps {
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  content?: string;
  href?: string;
}

export default function CallToAction({
  backgroundColor = "bg-green-700 hover:bg-green-600",
  borderColor = "border-transparent",
  textColor = "text-white",
  content = "Start Monitoring for Free",
  href = "/register"
}: CallToActionProps) {
  return (
    <Link 
      href={href} 
      className={`px-5 py-3 text-center text-sm font-medium border rounded-md transition-colors shadow-sm ${backgroundColor} ${borderColor} ${textColor}`}
    >
      {content}
    </Link>
  );
}