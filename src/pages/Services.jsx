import { Link } from 'react-router-dom';
import { ScrollReveal } from '../hooks/useScrollReveal';
import { IconImage, IconVideo, IconMusic, IconGlobe, IconLayers } from '../components/Icons';
import './Services.css';

const services = [
    {
        title: 'AI Image Creation', number: '01', image: '/images/project-1.png',
        icon: <IconImage size={28} color="var(--accent-teal)" />,
        desc: 'Original, IP-free images for advertising, social media, and product launches. Every visual is generated from custom prompts—no stock libraries, no celebrity likenesses, no copyright risk.',
        bullets: ['Custom prompt engineering tailored to your brand guidelines', 'Brand-consistent style guides for visual continuity', 'IP-free original imagery with full commercial rights', 'Batch production of 50+ unique assets per campaign'],
    },
    {
        title: 'AI Video Creation', number: '02', image: '/images/project-4.png',
        icon: <IconVideo size={28} color="var(--accent-teal)" />,
        desc: 'Short-form promo videos, looping social assets, and branded motion graphics—all generated using cutting-edge AI video tools.',
        bullets: ['15–60 second AI-generated video ads', 'Looping social media content for Stories & Reels', 'Motion graphics and animated brand sequences', 'Multi-format export (16:9, 9:16, 1:1)'],
    },
    {
        title: 'AI Audio & Music Production', number: '03', image: '/images/project-3.png',
        icon: <IconMusic size={28} color="var(--accent-teal)" />,
        desc: 'Custom AI-generated background music, sound effects, and branded audio. Each track is delivered as a single-source file with full commercial rights.',
        bullets: ['Custom background music and brand scores', 'Sound effects and audio textures', 'Audio branding kits (intros, outros, stingers)', 'Royalty-free delivery with full usage rights'],
    },
    {
        title: 'Bilingual Asset Localization', number: '04', image: '/images/project-6.png',
        icon: <IconGlobe size={28} color="var(--accent-teal)" />,
        desc: 'Formatting and adapting AI-generated visuals for multilingual campaigns. Every asset feels native to its target language.',
        bullets: ['Hindi–English dual-language formatting', 'RTL language support for Arabic and Hebrew markets', 'Cultural adaptation of visual elements and messaging', 'Typography localization for perfect readability'],
    },
    {
        title: 'High-Volume Production Systems', number: '05', image: '/images/project-5.png',
        icon: <IconLayers size={28} color="var(--accent-teal)" />,
        desc: 'Scalable AI production pipelines that deliver 50+ assets per quarter. Built for agencies and brands that need consistent, high-quality AI creative at volume.',
        bullets: ['Dedicated AI pipeline with custom model configurations', 'Quality assurance workflow with human review checkpoints', 'Asset management system with version control', 'Scalable delivery calendar aligned to your content schedule'],
    },
];

export default function Services() {
    return (
        <main className="page-transition">
            <section className="page-header">
                <div className="container">
                    <span className="section-label">Services</span>
                    <h1>AI Creative Services</h1>
                    <p>End-to-end AI media production for global brands—images, video, audio, and localization at scale.</p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="services-list">
                        {services.map((service, i) => (
                            <ScrollReveal key={i}>
                                <div className={`service-section ${i % 2 !== 0 ? 'reverse' : ''}`}>
                                    <div className="service-visual">
                                        <div className="service-visual-gradient" style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                                        <span className="service-number">{service.number}</span>
                                    </div>
                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.desc}</p>
                                        <div className="service-bullets">
                                            {service.bullets.map((bullet, j) => (
                                                <div key={j} className="service-bullet">
                                                    <span className="bullet-icon">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-teal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                                    </span>
                                                    <span>{bullet}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link to="/contact" className="btn btn-outline">Request Proposal →</Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-cta">
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">Ready to Scale?</span>
                        <h2>Ready to scale your creative output with AI?</h2>
                        <p>Let's build a production system that delivers original, commercially viable assets at the speed your brand needs.</p>
                        <Link to="/contact" className="btn btn-primary">Start a Project →</Link>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
