export default function PrivacyPolicy() {
  return (
      <div className="main-container py-12 space-y-8 text-gray-800">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#bd3f41]">Privacy Policy</h1>

        {/* Introduction */}
        <p>
          We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you interact with our services.
        </p>

        {/* What We Collect */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Your name, email address, and contact information</li>
            <li>Financial and investment preferences</li>
            <li>Usage data such as IP address, device, and browser type</li>
            <li>Communication history and feedback</li>
          </ul>
        </div>

        {/* How It's Used */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>To provide personalized advisory and research services</li>
            <li>To improve our offerings and website experience</li>
            <li>To communicate updates, offers, and insights</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </div>

        {/* Third Party Sharing */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">3. Sharing Your Data</h2>
          <p className="text-sm">
            We do not sell your personal data. We may share information with trusted partners and service providers who assist in delivering our services, under strict confidentiality agreements.
          </p>
        </div>

        {/* Data Security */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">4. Data Security</h2>
          <p className="text-sm">
            We use industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.
          </p>
        </div>

        {/* Your Rights */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">5. Your Rights</h2>
          <p className="text-sm">
            You have the right to access, update, or delete your personal information. You can also opt out of marketing communications at any time.
          </p>
        </div>

        {/* Policy Updates */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">6. Updates to this Policy</h2>
          <p className="text-sm">
            We may update this Privacy Policy from time to time. The latest version will always be available on our website.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">7. Contact Us</h2>
          <p className="text-sm">
            If you have any questions or concerns about this policy, please email us at <a href="mailto:privacy@yourdomain.com" className="text-blue-600 underline">privacy@yourdomain.com</a>.
          </p>
        </div>

      </div>
  );
}
