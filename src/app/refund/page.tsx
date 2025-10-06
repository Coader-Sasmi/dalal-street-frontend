export default function Refund() {
  return (
      <section className="main-container py-12 space-y-8 text-gray-800">

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#bd3f41]">Refund Policy</h1>

        {/* Policy Points */}
        <div className="space-y-4">
          <ol className="list-decimal list-inside space-y-2">
            <li>
              If the client is not satisfied with our advisory services within 30 days of subscription, a written refund request may be submitted.
            </li>
            <li>
              On termination by either party before the subscription ends, a pro rata refund for the unused portion will be provided, after deducting any applicable breakage fee.
            </li>
            <li>
              Refunds are not available for services already rendered, or for dissatisfaction arising solely due to market outcomes or losses.
            </li>
            <li>
              Refunds will be processed within 7–14 business days via the original payment method, unless otherwise agreed.
            </li>
            <li>
              In case of SEBI registration suspension, revocation, or cancellation, we will refund any unutilised fees from the effective date.
            </li>
            <li>
              All refunds are subject to SEBI regulations and the terms of the client agreement.
            </li>
          </ol>
        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

        {/* Legal Points */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Key Legal / Regulatory Points (Under SEBI Rules)</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              {`Clients may request refunds for the unexpired portion ("unearned fees") upon early termination.`}
            </li>
            <li>
              A breakage fee (deduction) is allowed under SEBI rules, up to a maximum of one quarter’s fee for Investment Advisers.
            </li>
            <li>
              All fees, refunds, breakage fees, and payment terms must be clearly stated in the client agreement.
            </li>
            <li>
              SEBI prohibits any form of guaranteed or assured returns — refund policies must not imply performance guarantees.
            </li>
            <li>
              Advance fee collection and related refund/breakage terms are regulated. For individual/HUF clients, SEBI permits advance charging up to one year with consent.
            </li>
          </ul>
        </div>

      </section>
  );
}
