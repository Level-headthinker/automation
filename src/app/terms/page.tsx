import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHero, GradientText } from "@/components/ui/PageHero";
import { BRAND } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Raahnex's website and services.",
};

const UPDATED = "24 June 2026";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHero
          label="Legal"
          title={<><GradientText>Terms</GradientText> of Service</>}
          description={`Last updated: ${UPDATED}.`}
        />

        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose-tapzero">
              <p>
                These Terms govern your use of the {BRAND.name} website and services. By
                using our site or services, you agree to these Terms.
              </p>

              <h2>1. Use of our services</h2>
              <p>
                You may use our website and services only for lawful purposes and in
                line with these Terms. You agree not to misuse, disrupt, or attempt to
                gain unauthorised access to our systems.
              </p>

              <h2>2. Accounts &amp; subscriptions</h2>
              <p>
                Paid products are billed on the plan you select. Plans are month-to-month
                unless agreed otherwise. You may cancel anytime; access continues until
                the end of the current billing period. Fees already paid are
                non-refundable except where required by law.
              </p>

              <h2>3. Free trials</h2>
              <p>
                Where offered, free trials let you evaluate a product for the stated
                period. We will tell you before any trial converts to a paid plan.
              </p>

              <h2>4. Intellectual property</h2>
              <p>
                All content, branding, and software on this site are owned by {BRAND.name}
                or its licensors. You may not copy, resell, or redistribute them without
                permission.
              </p>

              <h2>5. Your content &amp; data</h2>
              <p>
                You retain ownership of the data you or your customers submit through our
                products. You grant us the limited rights needed to operate the service
                for you. See our <a href="/privacy">Privacy Policy</a> for details.
              </p>

              <h2>6. Service availability</h2>
              <p>
                We aim for high availability but do not guarantee uninterrupted service.
                We may update, suspend, or discontinue features with reasonable notice.
              </p>

              <h2>7. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, {BRAND.name} is not liable for
                indirect or consequential damages arising from your use of the services.
              </p>

              <h2>8. Changes to these Terms</h2>
              <p>
                We may revise these Terms occasionally. Continued use after changes means
                you accept the updated Terms.
              </p>

              <h2>9. Contact</h2>
              <p>
                Questions? Email <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>.
              </p>

              <hr />
              <p style={{ fontSize: "0.85rem" }}>
                <em>
                  This page is a general template provided for convenience and is not
                  legal advice. Please have it reviewed by a qualified professional
                  before relying on it.
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
