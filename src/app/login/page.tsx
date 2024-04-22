import { LoginForm } from './components'

export default function LoginPage() {
  return (
    <div className="flex h-full items-center justify-center p-4 md:grid-cols-3 md:p-0">
      <div className="hidden h-screen w-full md:flex">
        <div className="h-full w-[8.33%] animate-pulse bg-white" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-50" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-100" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-200" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-300" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-400" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-500" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-600" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-700" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-800" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-900" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-950" />
      </div>
      <LoginForm />
      <div className="hidden h-screen w-full md:flex">
        <div className="h-full w-[8.33%] animate-pulse bg-gray-950" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-900" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-800" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-700" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-600" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-500" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-400" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-300" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-200" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-100" />
        <div className="h-full w-[8.33%] animate-pulse bg-gray-50" />
        <div className="h-full w-[8.33%] animate-pulse bg-white" />
      </div>
    </div>
  )
}
