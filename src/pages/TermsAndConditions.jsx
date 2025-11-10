import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        
        {/* Back Button */}
        <Link to="/">
          <motion.button
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 mb-8 transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms & <span className="text-emerald-400">Conditions</span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: November 10, 2025</p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="prose prose-invert max-w-none space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using DIU Recycle, you accept and agree to be bound by the terms and provisions of this agreement. This app is exclusively for Daffodil International University (DIU) students.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">2. User Eligibility</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              To use DIU Recycle, you must:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Be a current student of Daffodil International University</li>
              <li>Provide a valid DIU email address for verification</li>
              <li>Be at least 18 years old or have parental consent</li>
              <li>Agree to conduct transactions responsibly and honestly</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">3. Product Listings</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              When listing products, users must:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Provide accurate product descriptions and images</li>
              <li>Set fair and honest prices</li>
              <li>Not list prohibited items (weapons, drugs, counterfeit goods)</li>
              <li>Update or remove listings when items are sold</li>
              <li>Meet buyers on campus or in safe public locations</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">4. User Conduct</h2>
            <p className="text-gray-300 leading-relaxed">
              Users are expected to maintain respectful communication, complete transactions as agreed, and report any suspicious or fraudulent activity. Harassment, spam, or misuse of the platform will result in account suspension.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">5. Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              DIU Recycle acts as a platform to connect buyers and sellers. We are not responsible for the quality, safety, or legality of items listed, the accuracy of listings, or the ability of users to complete transactions. All transactions are between users.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">6. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or compromise the safety of the community.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">7. Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              For questions about these Terms & Conditions, please contact us at support@diurecycle.com
            </p>
          </section>
        </motion.div>

      </div>
    </div>
  );
}

export default TermsAndConditions;
