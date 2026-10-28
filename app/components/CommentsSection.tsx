type Comment = { name: string; pet: string; content: string }

const comments: Comment[] = [
  { name: '豆包妈妈', pet: '金毛豆包', content: '以前洗完澡要躲半天，现在一到门口就自己往里冲！护理师真的很有耐心。' },
  { name: '奶糖爸爸', pet: '比熊奶糖', content: '造型剪得特别自然，洗完毛毛软乎乎的，店里环境也很舒服。' },
  { name: '可乐妈妈', pet: '柯基可乐', content: '第一次来就很安心，全程都能看到护理过程，已经预约下一次啦。' },
]

export default function CommentsSection() {
  return <section className="comments" id="comments">
    <div className="wrap">
      <div className="section-head"><div><div className="eyebrow">happy tails</div><h2>听听大家怎么说</h2></div><p>每一次被认真照顾，<br />都会变成值得分享的小故事。</p></div>
      <div className="comments-grid">{comments.map((comment) => <article className="comment-card" key={`${comment.name}-${comment.pet}`}><div className="stars" aria-label="5 星评价">★★★★★</div><p>“{comment.content}”</p><div className="comment-author"><strong>{comment.name}</strong><span>· {comment.pet}</span></div></article>)}</div>
    </div>
  </section>
}
