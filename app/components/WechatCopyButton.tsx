'use client'

import { useState } from 'react'

export default function WechatCopyButton() {
  const [copied, setCopied] = useState(false)

  async function copyWechat() {
    try { await navigator.clipboard.writeText('毛球日记_MQ') } catch { /* 兼容未授权剪贴板的预览环境 */ }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return <button className="copy-wechat" type="button" onClick={copyWechat}>{copied ? '已复制 ✓' : '复制微信号'}</button>
}
