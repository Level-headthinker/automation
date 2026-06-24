import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero, GradientText } from "@/components/ui/PageHero";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Raahnex collects, uses, and protects your information.",
};

const UPDATED = "24 June 2026";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          label="Legal"
          title={<><GradientText>Privacy</GradientText> Policy</>}
          description={`Last updated: ${UPDATED}. This policy explains what we collect, why, and your choices.`}
        />

        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose-tapzero">
              <p>
                {BRAND.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) builds AI-powered automation
                systems for service businesses. This Privacy Policy describes how we
                handle information when you visit our website or contact us.
              </p>

              <h2>1. Information we collect</h2>
              <p>We only collect what you give us or what is needed to run the site:</p>
              <ul>
                <li><strong>Contact &amp; demo requests:</strong> name, email, phone number, business name, industry, and any message you submit through our forms.</li>
                <li><strong>Newsletter:</strong> your email address, if you subscribe.</li>
                <li><strong>Usage data:</strong> anonymous, aggregated analytics (pages viewed, device type) to improve the site. We do not use this to identify you personally.</li>
              </ul>

              <h2>2. How we use your information</h2>
              <ul>
                <li>To respond to your enquiries and schedule demos.</li>
                <li>To provide and improve our products and services.</li>
                <li>To send you updates you have requested (you can unsubscribe anytime).</li>
                <li>To keep the website secure and functioning.</li>
              </ul>

              <h2>3. What we do NOT do</h2>
              <ul>
                <li>We do not sell your personal information to anyone.</li>
                <li>We do not share your data with third parties except trusted providers who help us operate (e.g. email delivery, hosting, analytics), and only as needed.</li>
              </ul>

              <h2>4. Patient &amp; client data (our products)</h2>
              <p>
                When a clinic or business uses our products (such as ClinicBot), any
                patient or customer data processed through the platform belongs to that
                business. We act as a processor on their behalf, store data securely in
                encrypted databases, and never use it for any purpose other than
                providing the service.
              </p>

              <h2>5. Cookies &amp; analytics</h2>
              <p>
                We use privacy-friendly, aggregated analytics to understand site usage.
                We do not use intrusive advertising trackers. Your browser settings let
                you control cookies at any time.
              </p>

              <h2>6. Data security</h2>
              <p>
                We use industry-standard measures — encryption in transit and at rest,
                access controls, and regular reviews — to protect your information. No
                method of transmission is 100% secure, but we work hard to safeguard
                your data.
              </p>

              <h2>7. Your rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal
                data at any time. To do so, email us and we will respond promptly.
              </p>

              <h2>8. Changes to this policy</h2>
              <p>
                We may update this policy from time to time. The &ldquo;last updated&rdquo;
                date above reflects the latest version.
              </p>

              <h2>9. Contact us</h2>
              <p>
                Questions about this policy or your data? Email{" "}
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
              </p>

              <hr />
              <p style={{ fontSize: "0.85rem" }}>
                <em>
                  This page is a general template provided for convenience and is not
                  legal advice. Please have it reviewed by a qualified professional
                  before relying on it for compliance.
                </em>
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
