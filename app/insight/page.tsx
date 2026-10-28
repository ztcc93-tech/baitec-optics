import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { ArrowUpRight } from "../components/Icons";
import { insightArticles, insightPreviews, formatInsightDate } from "../data/insights";

export const metadata: Metadata = {
  title: "Insight | Optical Manufacturing Articles & News | Baitec Optics",
  description: "Explore articles on optical components, materials, coatings and manufacturing, along with company news and industry insights from Baitec Optics.",
  alternates: { canonical: "https://baitecoptics.com/insight" },
  robots: { index: insightArticles.length > 0, follow: true },
  openGraph: { title: "Insight | Baitec Optics", description: "Optical manufacturing articles, company news and industry insights.", url: "https://baitecoptics.com/insight", type: "website" },
};
export default async function InsightPage({ searchParams }: { searchParams: Promise<{ q?: string; page?: string }> }) {
  const { q = "", page } = await searchParams;
  const query = q.trim().slice(0,200);
  const matches = (article: { category: string; title: string; description: string }) => (!query || `${article.title} ${article.description}`.toLowerCase().includes(query.toLowerCase()));
  const articles = insightArticles.filter(matches).sort((a,b) => b.publishedAt.localeCompare(a.publishedAt));
  const previews = insightArticles.length ? [] : insightPreviews.filter(matches);
  const pageCount = Math.max(1, Math.ceil(articles.length / 6));
  const currentPage = Math.min(pageCount, Math.max(1, Number.parseInt(page ?? "1",10) || 1));
  const href = (p = 1) => { const params = new URLSearchParams(); if(query) params.set("q",query); if(p>1) params.set("page",String(p)); return `/insight${params.size ? `?${params}` : ""}`; };
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Insight", url: "https://baitecoptics.com/insight", description: metadata.description, publisher: { "@id": "https://baitecoptics.com/#organization" } };
  return <main><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }} />
    <section className="insight-hero"><div className="insight-shell">
      <div className="breadcrumb"><a href="/">Home</a><span>/</span><b>Insight</b></div>
      <h1>Optics Insight</h1><p>Practical guides to optical materials, manufacturing, and applications.</p>
    </div></section>
    <section className="insight-content insight-shell">
      <div className="insight-toolbar"><nav className="insight-filters" aria-label="Articles"><a href={href()} aria-current="page">All Articles</a></nav>
      <form className="insight-search" action="/insight" role="search"><label htmlFor="insight-search" className="insight-sr-only">Search articles</label><input id="insight-search" name="q" type="search" placeholder="Search articles…" defaultValue={query} maxLength={200} /><button type="submit" aria-label="Search articles"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg></button></form></div>
      {(articles.length || previews.length) ? <div className="insight-grid">{articles.slice((currentPage-1)*6,currentPage*6).map(article => <article className="insight-card" key={article.slug}>{article.image && <a href={`/insight/${article.slug}`} tabIndex={-1} aria-hidden="true"><img src={article.image} alt={article.imageAlt ?? article.title} /></a>}<div className="insight-card-copy"><div className="insight-card-meta"><span>{article.category}</span><time dateTime={article.publishedAt}>{formatInsightDate(article.publishedAt)}</time></div><h2><a href={`/insight/${article.slug}`}>{article.title}</a></h2><p>{article.description}</p><a className="insight-read" href={`/insight/${article.slug}`}>Read More <ArrowUpRight /></a></div></article>)}{previews.map(item => <article className="insight-card insight-preview" key={item.title}><img src={item.image} alt={item.title} /><div className="insight-card-copy"><div className="insight-card-meta"><span>{item.category}</span></div><h2>{item.title}</h2><p>{item.description}</p><span className="insight-coming">Coming soon</span></div></article>)}</div> : <div className="insight-no-results"><h2>No articles found.</h2><p>Try another keyword or browse all topics.</p><a href="/insight">View all topics →</a></div>}
      {pageCount>1 && <nav className="insight-pagination" aria-label="Article pages">{Array.from({length:pageCount},(_,index)=><a key={index} href={href(index+1)} aria-current={currentPage===index+1 ? "page" : undefined}>{index+1}</a>)}</nav>}
    </section>
    <section className="insight-bottom"><div className="insight-contact insight-shell"><div><h2>Need help with your optical project?</h2><p>Send your drawing or specifications for a manufacturing review.</p></div><a href="/contact">Discuss Your Requirements <ArrowUpRight /></a></div></section>
    <SiteFooter /></main>;
}
