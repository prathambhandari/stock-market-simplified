import Link from "next/link";

export default function RefundPolicy() {
    return (
        <div className="w-full bg-white mx-auto px-8 py-10 rounded-2xl mt-2">
            <Link href="\">
                <h1 className="underline underline-offset-8 hover:text-lime-300 mb-6 text-xl font-semibold w-fit"> ← Back </h1>
            </Link>
            <h1 className="text-3xl font-bold text-neutral-700 mb-4">Refund Policy</h1>

            <section>
                <h2 className="text-2xl font-semibold text-neutral-700 mt-6">No Refund Policy</h2>
                <p className="text-neutral-600 mt-2">
                    At <strong>prathambhandari.com</strong>, all course purchases are considered <strong>final</strong>, and we do not offer refunds once a course is purchased.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-neutral-700 mt-6">Exceptions for Duplicate Payments</h2>
                <p className="text-neutral-600 mt-2">
                    If you experience a <strong>technical issue resulting in a duplicate payment</strong>, we will issue a refund for the duplicate amount.
                    <br />
                    <span className="italic">Note:</span> Any applicable refund processing charges will be deducted from the refunded amount.
                </p>
            </section>

            <hr className="border-neutral-300 my-6" />

            <section>
                <h2 className="text-2xl font-semibold text-neutral-700">How to Request a Refund for Duplicate Payments</h2>

                <div>
                    <h3 className="text-xl font-medium text-neutral-600 mt-4">1. Contact Us</h3>
                    <ul className="list-disc list-inside text-neutral-600 mt-2">
                        <li>
                            Email: <strong>support@prathambhandari.com</strong>
                        </li>
                        <li>
                            Use the subject line: <strong>"Refund Request: [Your Full Name]"</strong>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-medium text-neutral-600 mt-4">2. Provide Supporting Documentation</h3>
                    <p className="text-neutral-600 mt-2">
                        Include <strong>proof of the duplicate payment or technical glitch</strong>, such as:
                    </p>
                    <ul className="list-disc list-inside text-neutral-600 mt-2 space-y-1">
                        <li>Transaction receipts</li>
                        <li>Screenshots</li>
                        <li>Bank statements</li>
                        <li>Any other relevant documentation</li>
                    </ul>
                    <p className="text-neutral-600 mt-2 italic">
                        Note: While bank proof is not mandatory, providing it may help expedite the refund process.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-medium text-neutral-600 mt-4">3. Payment Details</h3>
                    <ul className="list-disc list-inside text-neutral-600 mt-2 space-y-1">
                        <li>Provide the <strong>email address</strong> associated with your course account.</li>
                        <li>
                            Share details of the payment(s) in question, including:
                            <ul className="list-decimal list-inside ml-6 mt-1">
                                <li>
                                    <strong>Transaction IDs</strong>, if available.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>

            <hr className="border-neutral-300 my-6" />

            <section>
                <h2 className="text-2xl font-semibold text-neutral-700">Processing Time</h2>
                <p className="text-neutral-600 mt-2">
                    Once your request is <strong>received and verified</strong>, we will process the refund within <strong>20 business days</strong>.
                    <br />
                    <span className="italic">Note:</span> Refund charges may apply and will be deducted from the refunded amount.
                </p>
            </section>
        </div>
    );
}
