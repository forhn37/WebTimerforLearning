export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-screen h-screen">
      {children}
    </div>
  )
}