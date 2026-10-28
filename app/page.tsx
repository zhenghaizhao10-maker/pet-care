import Image from 'next/image'
import BookingForm from './components/BookingForm'
import CommentsSection from './components/CommentsSection'
import SpaceCarousel from './components/SpaceCarousel'
import WechatCopyButton from './components/WechatCopyButton'

const services = [
  ['🫧', '基础洗护', '温和洗浴、吹干、梳毛，让毛发蓬松又清爽。', '¥ 128', '/ 小型犬'],
  ['✨', '精致造型', '根据毛孩子的脸型与气质，剪出专属可爱感。', '¥ 198', '/ 起'],
  ['🐾', 'SPA 放松', '植物精油泡泡浴，舒缓情绪，也让皮肤更健康。', '¥ 268', '/ 套餐'],
  ['🦷', '口腔护理', '清新口气、呵护牙龈，从每天的好心情开始。', '¥ 68', '/ 次'],
]

export default function HomePage() {
  return <>
    <header><div className="wrap nav"><a className="brand" href="#top"><span className="brand-mark">🐾</span>毛球日记</a><nav><a href="#services">洗护服务</a><a href="#story">关于我们</a><a href="#comments">顾客评论</a><a href="#store">门店信息</a><a href="#booking">预约到店</a></nav></div></header>
    <main id="top">
      <section className="booking" id="booking"><div className="wrap booking-box"><div><div className="eyebrow">make a date</div><h2>给毛孩子，<br />安排一个好日子。</h2><p>留下信息，我们会在营业时间内尽快联系你，确认最合适的到店时间。</p><a className="nav-cta booking-cta" href="#booking">立即预约 →</a></div><BookingForm /></div></section>
      <section className="hero"><div className="wrap hero-grid"><div><div className="eyebrow">pet care, with love</div><h1>让每一次洗护，<br /><em>都像去春游。</em></h1><p className="hero-copy">我们相信，洗澡不只是洗干净。这里有温柔的手、蓬松的毛，还有每一只毛孩子都能安心享受的快乐时光。</p><div className="hero-actions"><a className="primary" href="#booking">给毛孩子预约 ✦</a><a className="text-link" href="#services">看看我们能做什么</a></div></div><div className="hero-visual"><div className="blob" /><div className="pet-photo"><Image src="/images/hero-sheltie.png" alt="一只开心的苏格兰牧羊犬" fill sizes="(max-width: 800px) 74vw, 360px" /></div><div className="badge"><span>♥</span>毛孩子的<br />专属放松时刻</div><div className="doodle one">✦</div><div className="doodle two">✦</div><div className="paw">🐾</div></div></div></section>
      <section className="services" id="services"><div className="wrap"><div className="section-head"><div><div className="eyebrow">our services</div><h2>今天，想怎么宠？</h2></div><p>从基础清洁到全套 SPA，<br />每一项都为毛孩子量身定制。</p></div><div className="service-grid">{services.map(([icon, title, description, price, unit]) => <article className="service-card" key={title}><div className="icon">{icon}</div><h3>{title}</h3><p>{description}</p><div className="price">{price} <span>{unit}</span></div></article>)}</div></div></section>
      <section id="story"><div className="wrap story-grid"><div className="story-photo"><Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85" alt="两只狗狗在草地上玩耍" fill sizes="(max-width: 800px) 100vw, 50vw" /><div className="story-note"><span>●</span> 每位护理师，都有自己的“毛孩子”</div></div><div className="story-copy"><div className="eyebrow">a little about us</div><h2>我们认真对待<br />每一根毛毛。</h2><p>毛球日记从一间小小的社区店开始。我们把宠物当作家人，选用安心的洗护产品，留出足够的耐心，让敏感、怕水、第一次洗护的毛孩子也能慢慢喜欢上这里。</p><div className="checks"><div>独立护理空间</div><div>一对一温柔护理</div><div>全程透明可视</div><div>安心产品配方</div></div></div></div></section>
      <section className="space" id="space"><div className="wrap"><div className="section-head"><div><div className="eyebrow">come on in</div><h2>来店里的小小日常</h2></div><p>明亮、干净，也留了一点<br />让毛孩子自在探索的空间。</p></div><SpaceCarousel /></div></section>
      <CommentsSection />
      <section className="store" id="store"><div className="wrap store-grid"><div className="map-card" aria-label="毛球日记门店位置示意图"><span className="map-label one">甜橙路</span><span className="map-label two">虹口公园</span><span className="map-label three">社区生活圈</span><div className="map-caption">毛球日记 · 虹口店<small>就在甜橙路 18 号，欢迎来找我们</small></div></div><div className="store-copy"><div className="eyebrow">find us here</div><h2>来店里，<br />和我们见个面。</h2><p>带上毛孩子，来一间明亮、舒服、愿意慢下来陪伴每一次相遇的小店。</p><div className="store-details"><div className="store-detail"><div className="store-detail-icon">⌖</div><div><strong>门店地址</strong><span>上海市虹口区甜橙路 18 号</span></div></div><div className="store-detail"><div className="store-detail-icon">◷</div><div><strong>营业时间</strong><span>周二至周日 · 10:00 — 20:00<br />周一店休</span></div></div><div className="store-detail"><div className="store-detail-icon">☎</div><div><strong>电话预约</strong><a href="tel:02160885210">021-6088 5210</a></div></div><div className="store-detail"><div className="store-detail-icon">◎</div><div><strong>微信联系</strong><div className="wechat-row"><span>毛球日记_MQ</span><WechatCopyButton /></div></div></div></div></div></div></section>
    </main>
    <footer><div className="wrap footer-row"><a className="brand" href="#top"><span className="brand-mark">🐾</span>毛球日记</a><div className="footer-note">周二至周日 10:00 — 20:00 · 上海市虹口区甜橙路 18 号</div><div className="socials"><span>小红书</span><span>微信</span><span>电话 021-6088 5210</span></div></div></footer>
  </>
}
