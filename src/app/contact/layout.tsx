export const metadata = {
  title: 'INS-Contact',
  description: 'Contact Details',
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