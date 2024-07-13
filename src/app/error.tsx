'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ reset }: ErrorPageProps) {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-6xl font-bold">500</h1>
      <h2 className="mb-4 text-2xl font-semibold">Internal Server Error</h2>
      <p className="mb-8 text-lg">
        Something went wrong on our end. Please try again later.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="outline">
          Try again
        </Button>
        <Button asChild>
          <Link href="/">Go back to Home</Link>
        </Button>
      </div>
    </div>
  )
}
