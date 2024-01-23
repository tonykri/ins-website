export const metadata = {
  title: 'INS-FAQ',
  description: 'FAQ Details',
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