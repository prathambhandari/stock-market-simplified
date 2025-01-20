const { default: Link } = require("next/link");

export default function TermsAndConditions() {
    return (
        <div className="w-full bg-white mx-auto px-8 py-10 rounded-2xl mt-2">
            <Link href="\">
                <h1 className="underline underline-offset-8 hover:text-lime-300 mb-6 text-xl font-semibold w-fit"> ← Back </h1>
            </Link>
            <h1 className="text-3xl font-bold text-neutral-700 mb-4">Terms and Conditions</h1>
            <p className="text-neutral-600">
                Welcome to <strong>StockMarket Simplified: Master the Indian Stock Market</strong>. By enrolling in this course, you agree to abide by the following terms and conditions. Please read them carefully before proceeding.
            </p>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">1. Course Access</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>Upon successful payment, you will receive access to the course materials.</li>
                    <li>Course access is strictly for individual use and cannot be shared, transferred, or sold.</li>
                    <li>Unauthorized distribution or reproduction of course materials is prohibited.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">2. Refund Policy</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>The course fee is non-refundable once payment is made.</li>
                    <li>
                        Exceptions to this policy will only be considered in cases of technical issues preventing access, verified by the course provider.
                    </li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">3. Content Usage</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>
                        All course materials, including videos, text, graphics, and other resources, are the intellectual property of the course provider.
                    </li>
                    <li>You may use the materials for personal learning purposes only.</li>
                    <li>
                        Any attempt to copy, resell, or repurpose the course content is strictly prohibited and may result in legal action.
                    </li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">4. Disclaimer</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>The course is designed for educational purposes only and does not guarantee specific financial outcomes.</li>
                    <li>
                        The course provider is not a certified professional and is sharing knowledge based on personal experience and understanding of the stock market.
                    </li>
                    <li>
                        The course provider is not responsible for any financial decisions or outcomes resulting from the application of course content.
                    </li>
                    <li>Always consult a certified financial advisor before making investment decisions.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">5. Payment Terms</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>All payments are to be made via the specified payment gateway.</li>
                    <li>The course price of ₹449 is subject to change without prior notice for future enrollments.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">6. Technical Support</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>For any technical issues, please contact the course provider at <strong>support@prathambhandari.com</strong>.</li>
                    <li>Support is available during business hours from Monday to Friday.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">7. Modification of Terms</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>
                        The course provider reserves the right to update or modify these terms and conditions at any time without prior notice.
                    </li>
                    <li>Continued use of the course after changes to the terms will constitute acceptance of the revised terms.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">8. Governing Law</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>These terms and conditions are governed by the laws of India.</li>
                    <li>Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in India.</li>
                </ul>
            </section>

            <p className="text-neutral-600 mt-6">
                By enrolling in this course, you acknowledge that you have read, understood, and agreed to these terms and conditions. If you have any questions, feel free to contact the course provider at <strong>support@prathambhandari.com</strong>.
            </p>
        </div>
    );
}
