import { ScrollReveal } from '../hooks/useScrollReveal';
import { IconTarget, IconVideo, IconMusic, IconShield, IconGlobe, IconLayers } from '../components/Icons';
import './Blog.css';

const articles = [
    {
        title: 'Prompt Engineering for Brand-Consistent AI Visuals',
        category: 'Prompt Engineering',
        excerpt: 'How to craft precise AI prompts that maintain visual consistency across hundreds of brand assets—from color palettes to typography.',
        date: 'Feb 15, 2026', readTime: '7 min read',
        gradient: 'linear-gradient(135deg, #0f2027, #2c5364)',
        icon: <IconTarget size={32} color="rgba(26, 192, 181, 0.5)" />,
    },
    {
        title: 'AI Video Ads: From Script to Screen in Under 24 Hours',
        category: 'AI Workflow',
        excerpt: 'A detailed walkthrough of producing 15–60 second AI-generated video ads using Runway, Pika, and post-production tools.',
        date: 'Feb 8, 2026', readTime: '9 min read',
        gradient: 'linear-gradient(135deg, #1a1a2e, #16213e)',
        icon: <IconVideo size={32} color="rgba(26, 192, 181, 0.5)" />,
    },
    {
        title: 'Single-Track AI Music: Creating Custom Audio for Ads',
        category: 'AI Workflow',
        excerpt: 'Exploring AI music generation tools like Suno and how to deliver original, commercially-licensed brand scores.',
        date: 'Jan 28, 2026', readTime: '6 min read',
        gradient: 'linear-gradient(135deg, #0d0d1a, #1a0d2e)',
        icon: <IconMusic size={32} color="rgba(26, 192, 181, 0.5)" />,
    },
    {
        title: 'Avoiding Copyright Pitfalls in AI-Generated Content',
        category: 'Copyright & IP',
        excerpt: 'Essential guidelines for ensuring your AI-generated assets are legally safe, IP-free, and ready for commercial deployment.',
        date: 'Jan 20, 2026', readTime: '8 min read',
        gradient: 'linear-gradient(135deg, #1a0f0f, #2e1616)',
        icon: <IconShield size={32} color="rgba(255, 107, 53, 0.5)" />,
    },
    {
        title: 'The Future of Bilingual AI Content for Global Brands',
        category: 'Industry Trends',
        excerpt: 'How AI is reshaping multilingual creative production and why brands need culturally-native bilingual assets.',
        date: 'Jan 12, 2026', readTime: '5 min read',
        gradient: 'linear-gradient(135deg, #0f1a0f, #1a2e1a)',
        icon: <IconGlobe size={32} color="rgba(26, 192, 181, 0.5)" />,
    },
    {
        title: 'High-Volume AI Production: Systems and Workflows',
        category: 'AI Workflow',
        excerpt: 'Building scalable AI creative pipelines that deliver 50+ original assets per sprint without sacrificing quality.',
        date: 'Jan 5, 2026', readTime: '10 min read',
        gradient: 'linear-gradient(135deg, #141428, #1e1e3a)',
        icon: <IconLayers size={32} color="rgba(255, 107, 53, 0.5)" />,
    },
];

export default function Blog() {
    return (
        <main className="page-transition">
            <section className="page-header">
                <div className="container">
                    <span className="section-label">Blog</span>
                    <h1>AI Creative Blog</h1>
                    <p>Insights on AI workflows, prompt engineering, and copyright-safe creative production.</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="featured-article">
                            <div className="featured-article-image">
                                <div className="featured-article-gradient" style={{ background: 'linear-gradient(135deg, #0a1628, #162e4a, #1a3a5c)' }}>
                                    <IconShield size={48} color="rgba(26, 192, 181, 0.4)" />
                                </div>
                            </div>
                            <div className="featured-article-content">
                                <span className="tag">Featured · Copyright & IP</span>
                                <h2>How to Generate 100+ Commercial-Ready AI Images Without Copyright Risk</h2>
                                <p>A comprehensive guide to producing high-volume, IP-free AI visuals for commercial use—covering prompt strategies, legal frameworks, and quality control workflows.</p>
                                <div className="article-meta">
                                    <span>Feb 22, 2026</span>
                                    <span>12 min read</span>
                                </div>
                                <a href="#" className="read-link">Read Article →</a>
                            </div>
                        </div>
                    </ScrollReveal>

                    <div className="articles-grid">
                        {articles.map((article, i) => (
                            <ScrollReveal key={i} delay={i * 0.08}>
                                <div className="article-card">
                                    <div className="article-card-image">
                                        <div className="article-card-gradient" style={{ background: article.gradient }}>
                                            {article.icon}
                                        </div>
                                    </div>
                                    <div className="article-card-content">
                                        <span className="tag">{article.category}</span>
                                        <h3>{article.title}</h3>
                                        <p>{article.excerpt}</p>
                                        <div className="article-meta">
                                            <span>{article.date}</span>
                                            <span>{article.readTime}</span>
                                        </div>
                                        <a href="#" className="read-link">Read Article →</a>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal>
                        <div className="newsletter">
                            <h3>Stay Ahead of the AI Creative Curve</h3>
                            <p>Get monthly insights on AI creative workflows, prompt engineering tips, and industry trends.</p>
                            <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                                <input type="email" placeholder="Enter your email" />
                                <button className="btn btn-primary" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
