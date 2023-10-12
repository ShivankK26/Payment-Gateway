import Image from 'next/image'
import { Plans } from '../components/Plans'

export default function Home() {
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-24">
      <Plans />
    </main>
  )
}
