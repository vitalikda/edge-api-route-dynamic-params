// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'edge'
}

export default function handler(req: NextRequest) {
  console.log(req.nextUrl)
  return new Response(JSON.stringify(req.nextUrl))
}
