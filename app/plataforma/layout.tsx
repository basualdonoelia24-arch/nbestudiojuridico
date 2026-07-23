'use client'

import React from 'react'

export default function PlatformaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div style={{
      all: 'revert-layer',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
    }}>
      {children}
    </div>
  )
}