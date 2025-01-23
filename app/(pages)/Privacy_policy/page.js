import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="w-full bg-white mx-auto px-8 py-10 rounded-2xl mt-2">
            <Link href="\">
                <h1 className="underline underline-offset-8 hover:text-lime-300 mb-6 text-xl font-semibold w-fit"> ← Back </h1>
            </Link>
            <h1 className="text-3xl font-bold text-neutral-700 mb-4">Privacy Policy for prathambhandari.com</h1>
            <p className="text-neutral-600">
                At <strong>prathambhandari.com</strong>, we value your privacy and are committed to protecting it. This Privacy Policy outlines how we collect, use, store, and share your personal information when you visit our website (<strong>prathambhandari.com</strong>) and access the course platform at <strong>course.prathambhandari.com</strong>, powered by Trainer Central.
                By using our website and course platform, you consent to the practices described in this Privacy Policy.
            </p>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">1. Information We Collect</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li><strong>Personal Information</strong>: When you sign up for a course or create an account on <strong>course.prathambhandari.com</strong>, we collect information such as your name, email address, and any other details you provide.</li>
                    <li><strong>Payment Information</strong>: If you make a purchase, your payment details (e.g., credit card) will be processed by Trainer Central, but we do not store this information.</li>
                    <li><strong>Usage Data</strong>: Information about how you use our website and course platform, such as your browsing activity and progress through the course.</li>
                    <li><strong>Technical Data</strong>: IP address, device type, and browser details used to access our website.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">2. How We Use Your Information</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li><strong>Course Access and Support</strong>: To manage your account, grant access to course materials, and provide you with customer support.</li>
                    <li><strong>Improvement of Services</strong>: To enhance the website, course platform, and your overall learning experience.</li>
                    <li><strong>Communication</strong>: To send you updates regarding the course, notifications about your account, and, if applicable, promotional offers.</li>
                    <li><strong>Transaction Processing</strong>: To process payments for the course through Trainer Central.</li>
                    <li><strong>Legal Compliance</strong>: To meet legal obligations and protect our rights.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">3. How We Protect Your Information</h2>
                <p className="text-neutral-600 mt-2">
                    We take reasonable security measures to protect your personal information, including encryption and secure data storage. However, please understand that no method of transmitting data over the internet or storing data is completely secure, and we cannot guarantee absolute security.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">4. Sharing Your Information</h2>
                <p className="text-neutral-600 mt-2">
                    We do not sell or rent your personal information. However, we may share your data in the following cases:
                </p>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li><strong>Trainer Central</strong>: To provide course services, your data may be shared with Trainer Central, the platform used to sell and deliver the course.</li>
                    <li><strong>Legal Compliance</strong>: We may disclose your information if required by law or legal process, such as in response to a subpoena or to protect our legal rights.</li>
                </ul>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-neutral-600 mt-2">
                    We use cookies to enhance your user experience on our website and course platform. These technologies help us remember your preferences and collect data on how you use the platform, which we use to improve our services.
                    You can control cookies through your browser settings, but disabling cookies may affect your ability to use some features of the platform.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">6. Your Rights and Choices</h2>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li><strong>Access and Update</strong>: You can access and update your account information at any time through the platform.</li>
                    <li><strong>Opt-Out</strong>: If you no longer wish to receive marketing communications, you can opt out by following the unsubscribe link in any email or by contacting us directly.</li>
                    <li><strong>Data Deletion</strong>: You may request to delete your personal data, subject to certain legal conditions.</li>
                </ul>
                <p className="text-neutral-600 mt-2">
                    To exercise these rights, please contact us at <strong>support@prathambhandari.com</strong>.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">7. Children’s Privacy</h2>
                <p className="text-neutral-600 mt-2">
                    Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we learn that we have inadvertently collected personal information from a child under 13, we will take steps to delete it.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">8. Third-Party Links</h2>
                <p className="text-neutral-600 mt-2">
                    Our website and course platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">9. Changes to This Privacy Policy</h2>
                <p className="text-neutral-600 mt-2">
                    We may update this Privacy Policy to reflect changes in our practices or legal requirements. When we make changes, we will update the "Effective Date" at the top of this policy. Please review this policy periodically for updates.
                </p>
            </section>

            <section className="mt-6">
                <h2 className="text-2xl font-semibold text-neutral-700 mt-4">10. Contact Us</h2>
                <p className="text-neutral-600 mt-2">
                    If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
                </p>
                <ul className="list-decimal list-inside text-neutral-600 mt-2 space-y-1">
                    <li>Email: <strong>support@prathambhandari.com</strong></li>
                    <li>Website: <strong>prathambhandari.com</strong></li>
                    <li className= "text-xs">Kordel house, Tenkayedapadavu ,Dakshina kannada,Karnataka,574144 </li>
                </ul>
            </section>
        </div>
    );
}
