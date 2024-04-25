export function Header() {
  return (
    <header className="rounded-b-lg bg-gray-900 p-4">
      <div className="flex max-w-32 flex-col items-center gap-0.5">
        <h1 className="font-bebas-neue text-2xl font-semibold uppercase tracking-widest text-white">
          Finance APP
        </h1>
        <div className="h-1 w-full rounded-lg bg-white" />
        <div className="h-0.5 w-full max-w-28 rounded-lg bg-white" />
        <div className="h-0.5 w-full max-w-24 rounded-lg bg-white" />
      </div>
    </header>
  )
}
