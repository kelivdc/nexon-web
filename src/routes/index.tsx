import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <h1 className='text-2xl font-bold text-center'>Hello NexonAce Website</h1>
  )
}
