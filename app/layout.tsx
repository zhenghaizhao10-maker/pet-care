import type { Metadata } from 'next'
import './globals.css'
import './font-fallback.css'
import './comments.css'

export const metadata: Metadata = {
  title: '毛球日记 · 宠物洗护生活馆',
  description: '毛球日记宠物洗护生活馆，为每一位毛孩子提供温柔、专业、有趣的护理体验。',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>
}
