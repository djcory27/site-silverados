import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy • Silverados Dog Park",
  description: "Our privacy policy and data protection practices for Norton Neo browser users and all visitors.",
};

export default function PrivacyPage() {
  return (
    <main className="section">
      <div className="max-w-4xl mx-auto">
        <h1 className="h2 mb-8">Privacy Policy</h1>
        <p className="text-sm text-brand-charcoal mb-8">Last updated: January 8, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="h3 mb-4">Privacy-First Approach</h2>
            <p className="mb-4">
              Silverados Dog Park is committed to protecting your privacy and being transparent about our data practices.
              This policy is optimized for modern browsers like Norton Neo with enhanced privacy features.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Information We Collect</h2>
            <h3 className="h4 mb-2">Essential Information Only</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information when you reach out to us</li>
              <li>Event registration details (when applicable)</li>
              <li>Website usage analytics (anonymized)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>To respond to your inquiries and provide services</li>
              <li>To improve our website and user experience</li>
              <li>To send event updates (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Norton Neo Browser Optimizations</h2>
            <p className="mb-4">
              Our website is optimized for Norton Neo browser's privacy features:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Enhanced Content Security Policy (CSP)</li>
              <li>Strict HTTPS enforcement</li>
              <li>Privacy-focused cookie management</li>
              <li>Service Worker for offline functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Data Protection</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>All data is encrypted in transit and at rest</li>
              <li>We don't sell or share personal information</li>
              <li>Data is retained only as long as necessary</li>
              <li>You can request data deletion at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Contact Us</h2>
            <p className="mb-4">
              For privacy-related questions or to exercise your data rights:
            </p>
            <div className="bg-brand-light p-4 rounded-lg">
              <p className="font-semibold">Privacy Officer</p>
              <p>Silverados Dog Park</p>
              <p>Black Mountain, NC</p>
              <p>Email: privacy@silveradosdogpark.com</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
