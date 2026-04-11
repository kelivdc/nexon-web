import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { ArrowRight, Calendar, User, Clock, ChevronRight } from 'lucide-react'
import { createServerFn } from '@tanstack/react-start'
import { db } from '../../db'
import { blog } from '../../db/schema'
import { desc } from 'drizzle-orm'

const getBlogPosts = createServerFn({ method: 'GET' }).handler(async () => {
  let allPosts = await db.select().from(blog).orderBy(desc(blog.createdAt));

  if (allPosts.length === 0) {
    const defaultPosts = [
      {
        id: 'modern-web-design-2026',
        title: 'The Future of Web Design in 2026: Trends to Watch',
        excerpt: 'Explore the latest trends in UI/UX design, from glassmorphism to AI-driven interfaces, and learn how to implement them in your next project to boost user engagement.',
        category: 'Design',
        author: 'Sarah Lin',
        readTime: '5 min read',
        img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80&auto=format&fit=crop',
        featured: true,
        seoTitle: 'Future of Web Design in 2026',
        seoDescription: 'Explore the latest trends in UI/UX design for 2026.',
        content: '<p>Explore the latest trends in UI/UX design, from glassmorphism to AI-driven interfaces, and learn how to implement them in your next project to boost user engagement.</p>',
      },
      {
        id: 'maximizing-conversion-rates',
        title: '10 Proven Strategies to Maximize Landing Page Conversions',
        excerpt: 'A deep dive into conversion rate optimization (CRO) techniques that actually work. Learn how to turn visitors into loyal customers.',
        category: 'Marketing',
        author: 'Maya Patel',
        readTime: '8 min read',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop',
        featured: false,
        seoTitle: '10 Ways to Maximize Landing Page Conversions',
        seoDescription: 'A deep dive into CRO techniques that actually work.',
        content: '<p>A deep dive into conversion rate optimization (CRO) techniques that actually work. Learn how to turn visitors into loyal customers.</p>'
      },
      {
        id: 'react-tanstack-router',
        title: 'Why We Chose TanStack Router for Enterprise Apps',
        category: 'Engineering',
        excerpt: 'TanStack Router represents a fundamental shift in how we think about navigation.',
        readTime: '7 min read',
        author: 'Tech Team',
        img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop',
        featured: false,
        seoTitle: 'Why TanStack Router for Enterprise Apps',
        seoDescription: 'Discover why TanStack stringently validated router is best for robust app building.',
        content: `<h2>The Type-Safe Revolution</h2>
<p>Routing has long been a source of runtime errors in enterprise React applications. Broken links, incorrect parameter types, and unsynchronized state have plagued developers for years. When we started building NexonAce's internal infrastructure, we knew we needed a better solution.</p>
<p>TanStack Router represents a fundamental shift in how we think about navigation. By leveraging TypeScript's advanced type system, it ensures that every route link, every parameter, and every search query is validated at compile time.</p>
<h2>Nested Layouts and Data Fetching</h2>
<p>Enterprise apps aren't just single pages; they are deep hierarchies of dashboards, settings, and workflows. TanStack Router's nested routing system allows us to define shared layouts that wrap sub-routes efficiently, reducing code duplication and improving performance through targeted re-renders.</p>
<h2>Search Param Validation</h2>
<p>One of the most overlooked features is search param validation. TanStack Router allows us to define schemas for our URL state, ensuring that filters, pagination, and sorting parameters are always in the correct format.</p>`
      }
    ];
    await db.insert(blog).values(defaultPosts);
    allPosts = await db.select().from(blog).orderBy(desc(blog.createdAt));
  }

  return allPosts;
})

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
  loader: () => getBlogPosts(),
  head: () => ({
    meta: [
      { title: 'Blog — NexonAce Digital Insights' },
      { name: 'description', content: 'Insights, tutorials, and news about web development, design, and digital growth.' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Blog — NexonAce Digital Insights' },
      { property: 'og:description', content: 'Insights, tutorials, and news about web development, design, and digital growth.' },
      { property: 'og:type', content: 'website' }
    ],
  }),
})

function BlogPage() {
  const posts = Route.useLoaderData();
  const featuredPost = posts.find(post => post.featured) || posts[0]
  const regularPosts = posts.filter(post => post.id !== featuredPost?.id)

  return (
    <main className="flex flex-col pt-20">

      {/* ━━━━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--sea-ink)] py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--brand-blue)] opacity-20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--brand-orange)] opacity-10 blur-[80px] rounded-full" />

        <div className="page-wrap relative z-10 text-center">
          <div className="island-kicker mb-6 text-white/40">NexonAce Insights</div>
          <h1 className="display-title text-5xl font-extrabold md:text-7xl text-white leading-tight mb-8">
            Ideas That <br />
            <span className="text-[var(--brand-orange)]">Drive Growth.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/60 leading-relaxed">
            Expert articles, industry updates, and technical guides from our team of designers, engineers, and strategists.
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ FEATURED POST ━━━━━━━━━━━━━━━━ */}
      {featuredPost && (
        <section className="page-wrap -mt-16 relative z-20 pb-20">
          <div className="relative rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-[var(--line)] group">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 lg:h-[450px] overflow-hidden">
                <img
                  src={featuredPost.img}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute top-6 left-6 rounded-full bg-[var(--brand-orange)] px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                  Featured
                </div>
              </div>
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-[var(--sea-ink-soft)] mb-6">
                  <span className="text-[var(--brand-blue)]">{featuredPost.category}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {featuredPost.createdAt ? new Date(featuredPost.createdAt).toLocaleDateString() : ''}</span>
                </div>
                <h2 className="display-title text-3xl md:text-4xl font-extrabold text-[var(--sea-ink)] leading-tight mb-6 group-hover:text-[var(--brand-blue)] transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-[var(--sea-ink-soft)] text-lg leading-relaxed mb-8 line-clamp-3">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--foam)] flex items-center justify-center text-[var(--brand-orange)]">
                      <User size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--sea-ink)]">{featuredPost.author}</div>
                      <div className="text-xs text-[var(--sea-ink-soft)] flex items-center gap-1.5"><Clock size={12} /> {featuredPost.readTime}</div>
                    </div>
                  </div>
                  <Link to="/blog/$id" params={{ id: featuredPost.id }} className="w-12 h-12 rounded-full border border-[var(--line)] flex items-center justify-center text-[var(--brand-blue)] hover:bg-[var(--brand-orange)] hover:text-white hover:border-transparent transition-all">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ━━━━━━━━━━━━━━━━ POST GRID ━━━━━━━━━━━━━━━━ */}
      <section className="bg-[var(--foam)] py-32 border-t border-[var(--line)]">
        <div className="page-wrap">
          <div className="flex flex-wrap items-center justify-between mb-16 gap-6">
            <h2 className="display-title text-4xl font-extrabold text-[var(--sea-ink)]">
              Latest Articles
            </h2>
            <div className="flex gap-2">
              {['All', 'Engineering', 'Design', 'Marketing', 'SEO'].map((cat, i) => (
                <button key={cat} className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${i === 0 ? 'bg-[var(--brand-blue)] text-white shadow-md' : 'bg-white border border-[var(--line)] text-[var(--sea-ink-soft)] hover:border-[var(--brand-blue)]/50 hover:text-[var(--brand-blue)]'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regularPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-3">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--sea-ink-soft)] border border-[var(--line)] hover:bg-white transition-colors" disabled>
              <ChevronRight size={18} className="rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--brand-blue)] text-white font-bold shadow-md">1</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--sea-ink-soft)] border border-[var(--line)] hover:bg-white hover:text-[var(--brand-blue)] transition-colors font-bold">2</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--sea-ink-soft)] border border-[var(--line)] hover:bg-white hover:text-[var(--brand-blue)] transition-colors font-bold">3</button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-[var(--sea-ink-soft)] border border-[var(--line)] hover:bg-white hover:text-[var(--brand-blue)] transition-colors">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━ NEWSLETTER ━━━━━━━━━━━━━━━━ */}
      <section className="page-wrap py-32">
        <div className="relative rounded-[3rem] overflow-hidden bg-[var(--brand-blue)] shadow-2xl p-12 md:p-20 text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover w-full h-full" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="display-title text-4xl md:text-5xl font-extrabold text-white mb-6">
              Never Miss an Update
            </h2>
            <p className="text-white/70 text-lg mb-10">
              Join 5,000+ subscribers and get our latest insights to elevate your digital presence, delivered right to your inbox once a month.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow rounded-full px-6 py-4 outline-none font-medium text-sm text-[var(--sea-ink)] shadow-inner"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-[var(--brand-orange)] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-[0_12px_30px_-8px_var(--brand-orange)] transition-all hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </main>
  )
}

function PostCard({ post }: { post: any }) {
  return (
    <div className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-[var(--line)] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="relative h-60 overflow-hidden">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-[var(--brand-blue)] shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <div className="text-[10px] font-bold text-[var(--sea-ink-soft)] mb-4 flex items-center gap-3">
          <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[var(--brand-orange)]" /> {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}</span>
          <span className="flex items-center gap-1.5"><Clock size={12} className="text-[var(--brand-blue)]" /> {post.readTime}</span>
        </div>
        <Link to="/blog/$id" params={{ id: post.id }}>
          <h3 className="font-extrabold text-xl text-[var(--sea-ink)] mb-3 leading-tight group-hover:text-[var(--brand-blue)] transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-[var(--sea-ink-soft)] line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>
        <div className="pt-6 border-t border-[var(--line)] flex items-center justify-between">
          <div className="text-sm font-bold text-[var(--sea-ink)]">{post.author}</div>
          <Link to="/blog/$id" params={{ id: post.id }} className="text-[10px] font-black uppercase tracking-widest text-[var(--brand-orange)] flex items-center gap-1 hover:gap-2 transition-all">
            Read More <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}
