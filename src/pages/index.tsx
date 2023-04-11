import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState<unknown>()

  useEffect(() => {
    fetch('/api/hello-world')
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <div className='z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex'>
        <pre>
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      </div>
    </main>
  )
}
