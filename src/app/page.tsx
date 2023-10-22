import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center lg:h-screen gap-7'>
      <h1 className='text-7xl font-bold mb-5'>Heart Disease Predictor</h1>
      <Link href='/test' className={buttonVariants({variant: 'default'})}>Predict</Link>

    </div>
  )
}
