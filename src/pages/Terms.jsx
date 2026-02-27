import { ScrollReveal } from '../hooks/useScrollReveal';

export default function Terms() {
    return (
        <main className="page-transition">
            <section className="page-header">
                <div className="container">
                    <span className="section-label">Legal</span>
                    <h1>Terms & Conditions</h1>
                    <p>Last updated: February 2026</p>
                </div>
            </section>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="legal-content">
                            <h2>1. Services</h2>
                            <p>Harsh Jain provides AI-generated creative services including image generation, video production, custom audio creation, and asset localization. All work is delivered according to the project scope agreed upon before commencement.</p>

                            <h2>2. Intellectual Property</h2>
                            <p>Upon full payment, all AI-generated assets created for your project are transferred to you with full commercial usage rights. You receive complete ownership of the final deliverables. Source prompts, workflows, and proprietary AI pipelines remain the intellectual property of Harsh Jain.</p>

                            <h2>3. Originality Guarantee</h2>
                            <p>All assets are generated from scratch using licensed AI tools and custom prompt engineering. We guarantee that deliverables contain no third-party IP, no celebrity likenesses, and no stock-library dependencies.</p>

                            <h2>4. Payment Terms</h2>
                            <p>Projects require a 50% deposit before work begins, with the remaining 50% due upon delivery of final assets. Payment terms are net-15 from invoice date unless otherwise agreed in writing.</p>

                            <h2>5. Revisions</h2>
                            <p>Each project includes up to 3 rounds of revisions within the agreed scope. Additional revision rounds or scope changes are billed at the agreed hourly rate.</p>

                            <h2>6. Confidentiality</h2>
                            <p>All project details, brand guidelines, and business information shared during our collaboration are treated as strictly confidential unless explicit permission is granted for portfolio use.</p>

                            <h2>7. Limitation of Liability</h2>
                            <p>Liability is limited to the total amount paid for the specific project in question. We are not liable for indirect, incidental, or consequential damages arising from the use of delivered assets.</p>

                            <h2>8. Termination</h2>
                            <p>Either party may terminate a project with 7 days written notice. In the event of termination, payment is due for all work completed up to the termination date.</p>

                            <h2>9. Governing Law</h2>
                            <p>These terms are governed by and construed in accordance with applicable laws. Any disputes will be resolved through good-faith negotiation before pursuing formal legal action.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </main>
    );
}
