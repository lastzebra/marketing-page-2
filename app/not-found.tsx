import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-0 text-text-0 flex items-center justify-center">
      <Container className="text-center">
        <h1 className="font-display text-h1 font-bold mb-4">
          <span className="bg-grad-accent bg-clip-text text-transparent">
            404
          </span>
        </h1>
        <p className="text-body-lg text-text-1 mb-8">
          Page not found
        </p>
        <Button as="link" href="/" variant="primary">
          Back to Home
        </Button>
      </Container>
    </div>
  )
}
