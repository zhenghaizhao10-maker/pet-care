'use client'

import { useEffect, useState } from 'react'

type Slide = { image: string; alt: string; title: string; description: string }

const slides: Slide[] = [
  { image: '/images/salon-reception.png', alt: '高端宠物洗护店接待区', title: '温柔接待区', description: '从进门的第一刻，就感受到被好好照顾' },
  { image: '/images/salon-grooming.png', alt: '高端宠物洗护店美容护理区', title: '专业洗护区', description: '明亮、洁净，每一个护理细节都清晰可见' },
  { image: '/images/salon-lounge.png', alt: '高端宠物洗护店休息区', title: '宠物休息区', description: '洗护完成后，和主人一起享受一段慢时光' },
]

export default function SpaceCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % slides.length), 4800)
    return () => window.clearInterval(timer)
  }, [])

  const move = (amount: number) => setIndex((current) => (current + amount + slides.length) % slides.length)

  return (
    <div className="space-carousel" aria-label="店内环境轮播图">
      <div className="space-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide) => <article className="space-slide" key={slide.image}><img src={slide.image} alt={slide.alt} /><div className="slide-copy"><strong>{slide.title}</strong><span>{slide.description}</span></div></article>)}
      </div>
      <button className="carousel-arrow prev" type="button" aria-label="上一张" onClick={() => move(-1)}>‹</button>
      <button className="carousel-arrow next" type="button" aria-label="下一张" onClick={() => move(1)}>›</button>
      <div className="carousel-dots" aria-label="选择店内环境图片">{slides.map((slide, slideIndex) => <button className={`carousel-dot ${slideIndex === index ? 'active' : ''}`} type="button" aria-label={`第${slideIndex + 1}张`} aria-current={slideIndex === index} key={slide.image} onClick={() => setIndex(slideIndex)} />)}</div>
    </div>
  )
}
