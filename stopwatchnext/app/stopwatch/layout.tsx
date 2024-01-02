export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-slate-600 w-screen h-screen">
      {children}
    </div>
  )
}