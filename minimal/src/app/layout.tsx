import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payload CMS',
  description: 'Minimal Payload deployment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
