export default function TermsAndConditions() {
  return (
      <section className="main-container py-12 space-y-8 text-gray-800">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#bd3f41]">Terms & Conditions</h1>

        {/* Intro */}
        <p>
          {`These Terms & Conditions ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.`}
        </p>

        {/* 1. Eligibility */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">1. Eligibility</h2>
          <p className="text-sm">
            You must be at least 18 years old and capable of entering into a binding agreement to use our services.
          </p>
        </div>

        {/* 2. Use of Services */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">2. Use of Services</h2>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Our research and advisory services are for personal, non-commercial use only.</li>
            <li>You agree not to copy, reproduce, or distribute our content without permission.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          </ul>
        </div>

        {/* 3. Investment Risk */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">3. Investment Risk</h2>
          <p className="text-sm">
            All investments are subject to market risk. We do not guarantee returns. You are solely responsible for your investment decisions.
          </p>
        </div>

        {/* 4. Refund Policy */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">4. Refund Policy</h2>
          <p className="text-sm">
            Refunds are governed by our Refund Policy. Please refer to the policy document for full details.
          </p>
        </div>

        {/* 5. Termination */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">5. Termination</h2>
          <p className="text-sm">
            We reserve the right to suspend or terminate your access to our services for any violation of these Terms.
          </p>
        </div>

        {/* 6. Changes to Terms */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">6. Changes to Terms</h2>
          <p className="text-sm">
            We may update these Terms at any time. Continued use of our services indicates acceptance of the updated Terms.
          </p>
        </div>

        {/* 7. Governing Law */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">7. Governing Law</h2>
          <p className="text-sm">
            These Terms shall be governed by and construed in accordance with the laws of India.
          </p>
        </div>

        {/* 8. Contact Info */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900">8. Contact Us</h2>
          <p className="text-sm">
            For any queries related to these Terms, please contact us at <a href="mailto:support@yourdomain.com" className="text-blue-600 underline">support@yourdomain.com</a>.
          </p>
        </div>

      </section>
  );
}
