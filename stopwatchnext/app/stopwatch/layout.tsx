import Image from "next/image"

export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-screen h-screen">
      <Image
        src="/daynight.png"
        width={100}
        height={100}
        alt="Picture of the author" className="ml-auto"
      />
      {children}
    </div>
  )
}