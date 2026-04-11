import { createFileRoute, Link } from '@tanstack/react-router'
import { Calendar, Clock, User, ArrowLeft, Share2, Twitter, Linkedin, Facebook } from 'lucide-react'
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'
import { db } from '../../db'
import { blog } from '../../db/schema'
import { eq, ne, desc } from 'drizzle-orm'

const getBlogPostData = createServerFn({ method: 'GET' })
  .inputValidator((id: unknown) => z.string().parse(id))
  .handler(async ({ data: id }) => {
    const [post] = await db.select().from(blog).where(eq(blog.id, id))
    if (!post) return null

    const relatedPosts = await db.select().from(blog)
      .where(ne(blog.id, id))
      .orderBy(desc(blog.createdAt))
      .limit(2)

    return { post, relatedPosts }
  })

export const Route = createFileRoute('/blog/$id')({
  component: BlogDetailRoute,
  loader: async ({ params }) => {
    const data = await getBlogPostData({ data: params.id })
    if (!data) throw new Error('Post not found')
    return data
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.seoTitle || loaderData?.post.title || 'Blog Post'} — NexonAce Insights` },
      { name: 'description', content: loaderData?.post.seoDescription || loaderData?.post.excerpt || 'Read this post on NexonAce.' },
      { property: 'og:title', content: `${loaderData?.post.seoTitle || loaderData?.post.title} — NexonAce Insights` },
      { property: 'og:description', content: loaderData?.post.seoDescription || loaderData?.post.excerpt },
      { property: 'og:image', content: loaderData?.post.img },
      { property: 'og:type', content: 'article' },
      { name: 'author', content: loaderData?.post.author }
    ]
  })
})

function BlogDetailRoute() {
  const { post, relatedPosts } = Route.useLoaderData()

  return (
    <main className="flex flex-col pt-20">
      {/* ━━━━━━━━━━━━━━━━ ARTICLE HEADER ━━━━━━━━━━━━━━━━ */}
      <section className="bg-white py-20 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--sea-ink-soft)] hover:text-[var(--brand-orange)] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="rounded-full bg-[var(--brand-blue)]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-[var(--brand-blue)]">
              {post.category}
            </span>
          </div>

          <h1 className="display-title text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--sea-ink)] leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-[var(--line)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--brand-blue)]/5 flex items-center justify-center text-[var(--brand-orange)]">
                <User size={20} />
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--sea-ink)]">{post.author}</div>
                <div className="text-xs text-[var(--sea-ink-soft)] flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--sea-ink-soft)] hover:bg-[var(--foam)] transition-colors">
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ IMAGE BANNER ━━━━━━━━━━━━━━━━ */}
      <section className="max-w-5xl mx-auto px-6 w-full mb-16">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-96 md:h-[500px] object-cover"
          />
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ ARTICLE CONTENT ━━━━━━━━━━━━━━━━ */}
      <section className="max-w-3xl mx-auto px-6 w-full pb-20 border-b border-[var(--line)]">
        <div className="prose prose-lg prose-slate max-w-none prose-headings:font-extrabold prose-headings:font-['Fraunces',Georgia,serif] prose-h2:text-3xl prose-a:text-[var(--brand-blue)] prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-p:text-[var(--sea-ink-soft)] prose-p:leading-relaxed">
          <p className="lead text-2xl text-[var(--sea-ink)] font-medium mb-10">
            {post.excerpt}
          </p>

          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <>
              <h2>The Shift Toward Intelligent Interfaces</h2>
              <p>
                As we move deeper into the decade, the emphasis is rapidly shifting from aesthetics alone to experiences that anticipate user needs. Intelligent interfaces—those that leverage AI to adapt to user behavior—are becoming the new standard.
              </p>
              <p>
                Whether it's an e-commerce platform that dynamically rearranges its layout based on a shopper's past purchases or a dashboard that surfaces critical data before the user even asks, the goal is <strong>frictionless interaction</strong>.
              </p>

              <blockquote className="border-l-4 border-[var(--brand-orange)] bg-[var(--foam)] rounded-r-2xl p-6 my-10 italic">
                "Design is not just what it looks like and feels like. Design is how it works, and today, it works best when it learns."
              </blockquote>

              <h2>Micro-Interactions That Delight</h2>
              <p>
                We are also seeing a resurgence of specialized micro-interactions. A button that subtly morphs upon hovering, a progress bar that gives physical-feeling haptic feedback on mobile, or even dynamic drop-shadows that react to scroll position.
              </p>
              <ul>
                <li><strong>Kinetic Typography:</strong> Text that isn't just read, but experienced.</li>
                <li><strong>Advanced Glassmorphism:</strong> Combining blur effects with 3D structural elements.</li>
                <li><strong>Dark Mode Optimization:</strong> Using completely new color palettes (like rich OLED blacks) rather than just inverted light mode colors.</li>
              </ul>

              <h2>Building for Performance</h2>
              <p>
                However, with great visual complexity comes the responsibility of performance. Adopting modern rendering techniques—like React Server Components combined with Edge routing—ensures that these beautiful experiences don't cost you your Lighthouse scores.
              </p>
            </>
          )}
        </div>

        {/* Share Footer */}
        <div className="mt-16 pt-8 border-t border-[var(--line)] flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-widest text-[var(--sea-ink)]">Share this article</span>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 rounded-full bg-[var(--foam)] px-5 py-2.5 text-xs font-bold text-[var(--sea-ink-soft)] hover:text-white hover:bg-[var(--brand-blue)] transition-all">
              <Share2 size={14} /> Copy Link
            </button>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ RELATED POSTS ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--foam)] py-24">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="island-kicker mb-4">Keep Reading</div>
          <h3 className="display-title text-3xl font-extrabold text-[var(--sea-ink)] mb-12">
            You might also like
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                to="/blog/$id"
                params={{ id: related.id }}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-[var(--line)] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={related.img}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-[var(--brand-blue)]">
                      {related.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-extrabold text-lg text-[var(--sea-ink)] mb-2 group-hover:text-[var(--brand-blue)] transition-colors">
                    {related.title}
                  </h4>
                  <div className="text-[10px] font-bold text-[var(--sea-ink-soft)] flex items-center gap-3 mt-4">
                    <span className="flex items-center gap-1.5"><Calendar size={12} /> {related.createdAt ? new Date(related.createdAt).toLocaleDateString() : ''}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
