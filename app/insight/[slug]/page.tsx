import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { getInsightArticle, formatInsightDate } from "../../data/insights";

const richText = (text: string) => text.split(/(\*\*.*?\*\*)/g).map((part, index) => part.startsWith("**") ? <strong key={index}>{part.slice(2,-2).split(/(sales@baitecoptics\.com)/g).map((piece,i) => piece === "sales@baitecoptics.com" ? <a key={i} href="mailto:sales@baitecoptics.com">{piece}</a> : piece)}</strong> : part.split(/(sales@baitecoptics\.com)/g).map((piece, i) => piece === "sales@baitecoptics.com" ? <a key={`${index}-${i}`} href="mailto:sales@baitecoptics.com">{piece}</a> : piece));

type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getInsightArticle((await params).slug);
  if (!article) return { title: "Article Not Found | Baitec Optics", robots: { index: false } };
  const url = `https://baitecoptics.com/insight/${article.slug}`;
  return { title: article.seoTitle ?? `${article.title} | Baitec Optics`, description: article.seoDescription ?? article.description, alternates: { canonical: url }, openGraph: { type: "article", title: article.title, description: article.description, url, publishedTime: article.publishedAt, modifiedTime: article.updatedAt ?? article.publishedAt, ...(article.image ? { images: [{ url: article.image, alt: article.imageAlt ?? article.title }] } : {}) } };
}
export default async function ArticlePage({ params }: Props) {
  const article = getInsightArticle((await params).slug);
  if (!article) notFound();
  const url = `https://baitecoptics.com/insight/${article.slug}`;
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": ["Materials", "Manufacturing", "Applications"].includes(article.category) ? "TechArticle" : "Article", headline: article.title, description: article.description, datePublished: article.publishedAt, dateModified: article.updatedAt ?? article.publishedAt, author: { "@type": "Organization", name: "Baitec Optics", url: "https://baitecoptics.com" }, publisher: { "@id": "https://baitecoptics.com/#organization" }, mainEntityOfPage: url, ...(article.image ? { image: new URL(article.image, "https://baitecoptics.com").href } : {}) }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://baitecoptics.com" }, { "@type": "ListItem", position: 2, name: "Insight", item: "https://baitecoptics.com/insight" }, { "@type": "ListItem", position: 3, name: article.title, item: url }] }] };
  return <main><SiteHeader /><article className="insight-article"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g,"\\u003c") }} /><div className="breadcrumb"><a href="/">Home</a><span>/</span><a href="/insight">Insight</a></div><header><h1>{article.title}</h1><div className="insight-card-meta"><span>Baitec Optics</span><time dateTime={article.publishedAt}>{formatInsightDate(article.publishedAt)}</time>{article.updatedAt && <span>Updated {formatInsightDate(article.updatedAt)}</span>}</div></header><div className="insight-prose">{article.sections.map(section => <section key={section.heading}><>{section.heading && <h2>{section.heading}</h2>}{section.paragraphs.map((paragraph,index) => <p key={index}>{richText(paragraph)}</p>)}{section.bullets && (section.ordered ? <ol>{section.bullets.map((item,index) => <li key={index}>{richText(item)}</li>)}</ol> : <ul>{section.bullets.map((item,index) => <li key={index}>{richText(item)}</li>)}</ul>)}{section.after?.map((paragraph,index) => <p key={index}>{richText(paragraph)}</p>)}</></section>)}</div>{article.image && <img className="insight-cover" src={article.image} alt={article.imageAlt ?? article.title} />}{article.relatedProducts?.length ? <aside className="insight-related"><h2>Related optical components</h2>{article.relatedProducts.map(product => <a key={product.href} href={product.href}>{product.title} →</a>)}</aside> : null}<div className="insight-article-end"><a href="/insight">← Back to Insight</a><a href="/contact">Discuss your optical requirements →</a></div></article><SiteFooter /></main>;
}
