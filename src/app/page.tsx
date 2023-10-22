import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-7 text-center'>
      <h1 className='md:text-7xl text-3xl font-bold mb-5 p-5'>Heart Disease Predictor</h1>
      <Link href='/test' className={buttonVariants({ variant: 'default' })}>Predict</Link>
    </div>
  )
}
