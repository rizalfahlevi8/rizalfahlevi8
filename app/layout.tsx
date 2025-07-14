import './globals.css'

export const metadata = {
  title: 'Social Media Manager',
  description: 'Manage your social media URLs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}