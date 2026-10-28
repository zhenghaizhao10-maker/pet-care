'use client'

import { useState } from 'react'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  return <form className="form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
    <input required placeholder="联系人" aria-label="联系人" />
    <input required type="tel" placeholder="手机号码" aria-label="手机号码" />
    <input className="full" required placeholder="毛孩子的名字" aria-label="毛孩子的名字" />
    <select className="full" aria-label="选择服务" defaultValue=""><option value="" disabled>选择想要的服务</option><option>基础洗护</option><option>精致造型</option><option>SPA 放松</option><option>口腔护理</option></select>
    <div className="arrival-fields full"><label>期望到店</label><div className="arrival-inputs"><input id="arrival-date" required type="date" aria-label="期望到店日期" /><select id="arrival-time" required aria-label="期望到店时间" defaultValue=""><option value="" disabled>选择预计到店时段</option><option>10:00 — 12:00</option><option>12:00 — 14:00</option><option>14:00 — 16:00</option><option>16:00 — 18:00</option><option>18:00 — 20:00</option></select></div></div>
    <button className="primary" type="submit" disabled={submitted}>{submitted ? '预约已提交 ✓' : '提交预约信息 →'}</button>
    {submitted && <div className="form-message">收到啦！我们会尽快和你确认预约 ✦</div>}
  </form>
}
