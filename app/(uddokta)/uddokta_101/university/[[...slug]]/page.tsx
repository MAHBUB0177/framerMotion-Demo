
import React from 'react'

export default async function Page({
  params,
}: {
  params: Promise<{ slug?: string[] }>
}) {
  const resolvedParams = await params
  const slugArray = resolvedParams.slug ?? []
  const fullSlug = slugArray.join('/')

  console.log('server params:', fullSlug)

  return (
    <div>
      <h1>Uddokta 101</h1>
      <p>{fullSlug || 'Home'}</p>
    </div>
  )
}
