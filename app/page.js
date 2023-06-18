import Image from 'next/image'
import Home from './components/Home'

export default function Homer() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
    </main>
  )
}
