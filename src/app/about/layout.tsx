export const metadata = {
  title: 'INS-About',
  description: 'About Details',
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