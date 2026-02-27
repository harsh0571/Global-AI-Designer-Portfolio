import { ScrollReveal } from '../hooks/useScrollReveal';

export default function Privacy() {
    return (
        <main className="page-transition">
            <section className="page-header">
                <div className="container">
                    <span className="section-label">Legal</span>
                    <h1>Privacy Policy</h1>
                    <p>Last updated: February 2026</p>
                </div>
            </section>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="legal-content">
                            <h2>1. Information We Collect</h2>
                            <p>When you use our contact form or subscribe to our newsletter, we may collect your name, email address, company name, and project details. We do not collect any information automatically beyond standard web server logs.</p>

                            <h2>2. How We Use Your Information</h2>
                            <p>We use the information you provide solely to respond to your project inquiries, deliver creative services, and send occasional updates about our AI creative work (only if you've subscribed). We never sell, rent, or share your personal data with third parties.</p>

                            <h2>3. Data Storage & Security</h2>
                            <p>Your data is stored securely using industry-standard encryption. We retain project-related communications for the duration of our business relationship and delete them upon request.</p>

                            <h2>4. Cookies</h2>
                            <p>This website uses minimal, functional cookies only. We do not use tracking cookies, advertising cookies, or any third-party analytics that track individual users.</p>

                            <h2>5. Third-Party Services</h2>
                            <p>We use trusted third-party services for email delivery and form processing. These services have their own privacy policies and are GDPR-compliant.</p>

                            <h2>6. Your Rights</h2>
                            <p>You have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at <a href="mailto:kzr0571@gmail.com" style={{ color: 'var(--accent-teal)' }}>kzr0571@gmail.com</a>.</p>

                            <h2>7. Changes to This Policy</h2>
                            <p>We may update this policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
