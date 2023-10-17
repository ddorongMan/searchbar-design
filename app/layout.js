import { Hahmlet } from 'next/font/google'

const hahmlet = Hahmlet({ subsets: ['latin'] })

export const metadata = {
  title: '또롱맨과 함께하는 IT 여행',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={hahmlet.className}>{children}</body>
    </html>
  )
}
