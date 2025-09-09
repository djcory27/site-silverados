import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Policy • Silverados Dog Park",
  description: "Our security practices and responsible disclosure policy for Norton Neo browser users and security researchers.",
};

export default function SecurityPage() {
  return (
    <main className="section">
      <div className="max-w-4xl mx-auto">
        <h1 className="h2 mb-8">Security Policy</h1>
        <p className="text-sm text-brand-charcoal mb-8">Last updated: January 8, 2025</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="h3 mb-4">Our Security Commitment</h2>
            <p className="mb-4">
              Silverados Dog Park takes security seriously. Our website is optimized for modern browsers like Norton Neo
              with comprehensive security measures and follows industry best practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Security Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-brand-light p-6 rounded-lg">
                <h3 className="h4 mb-3">Content Security Policy (CSP)</h3>
                <p>Strict CSP headers prevent XSS attacks and unauthorized script execution.</p>
              </div>
              <div className="bg-brand-light p-6 rounded-lg">
                <h3 className="h4 mb-3">HTTPS Enforcement</h3>
                <p>All connections are encrypted with HSTS for maximum security.</p>
              </div>
              <div className="bg-brand-light p-6 rounded-lg">
                <h3 className="h4 mb-3">Service Worker Security</h3>
                <p>Secure service worker implementation with proper scope limitations.</p>
              </div>
              <div className="bg-brand-light p-6 rounded-lg">
                <h3 className="h4 mb-3">Regular Security Audits</h3>
                <p>Continuous monitoring and regular security assessments.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Responsible Disclosure</h2>
            <p className="mb-4">
              We welcome security researchers to help us maintain a secure environment.
              Please follow these guidelines when reporting security vulnerabilities:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Do not perform unauthorized testing or access</li>
              <li>Report findings promptly to security@silveradosdogpark.com</li>
              <li>Include detailed reproduction steps and impact assessment</li>
              <li>Allow reasonable time for remediation before public disclosure</li>
              <li>Do not exploit vulnerabilities for personal gain</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Norton Neo Optimizations</h2>
            <p className="mb-4">
              Our website is specifically optimized for Norton Neo browser's security features:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Enhanced permission policies for camera, microphone, and location</li>
              <li>Cross-Origin policies for secure resource loading</li>
              <li>Privacy-focused referrer policies</li>
              <li>Secure service worker implementation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Incident Response</h2>
            <p className="mb-4">
              In the event of a security incident, we will:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Respond promptly to contain and mitigate the issue</li>
              <li>Notify affected users if personal data is compromised</li>
              <li>Conduct a thorough investigation and post-mortem</li>
              <li>Implement preventive measures to avoid future incidents</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="h3 mb-4">Contact Information</h2>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <h3 className="h4 text-red-800 mb-3">Security Reports Only</h3>
              <p className="text-red-700 mb-4">
                For security-related issues and vulnerability reports:
              </p>
              <div className="font-mono text-sm">
                <p>Email: security@silveradosdogpark.com</p>
                <p>PGP Key: Available at /.well-known/security.asc</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
