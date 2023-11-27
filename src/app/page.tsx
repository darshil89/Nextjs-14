import Header from "@/components/Header"
import Image from "next/image"
export default function Home() {
  return (
    <div className=" p-24">
      <Header />
     Hello from docker
      <Image src="/images/bg.jpg" alt="image" width={1000} height={1000} />
    </div>
  )
}
