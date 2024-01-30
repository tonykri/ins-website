export const metadata = {
  title: 'INS-Services',
  description: 'Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}