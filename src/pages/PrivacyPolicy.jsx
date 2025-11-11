import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        
        <Link to="/">
          <motion.button
            className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 mb-8 transition-colors"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy <span className="text-emerald-400">Policy</span>
          </h1>
          <p className="text-gray-400 mb-8">Last updated: November 10, 2025</p>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-emerald-400">Information We Collect</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              We collect the following information to provide you with our services:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Account Information:</strong> Name, DIU email, student ID for verification</li>
              <li><strong>Profile Data:</strong> Profile picture, contact details, location</li>
              <li><strong>Product Listings:</strong> Photos, descriptions, prices, categories</li>
              <li><strong>Messages:</strong> Chat history with other users via Firebase</li>
              <li><strong>Device Information:</strong> Device type, OS version for push notifications</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-emerald-400">How We Use Your Information</h2>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Verify your DIU student status</li>
              <li>Enable product listings and marketplace features</li>
              <li>Facilitate real-time messaging between buyers and sellers</li>
              <li>Send push notifications for messages and updates</li>
              <li>Improve app performance and user experience</li>
              <li>Prevent fraud and ensure community safety</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-emerald-400">Data Storage & Security</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your data is securely stored using Firebase (Google Cloud Platform) with industry-standard encryption. Images are hosted on Cloudinary CDN. We use Firebase Authentication to protect your account with secure password hashing and email verification.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-emerald-400">Data Sharing</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-3">
              We do <strong>NOT</strong> sell your personal information. Your data is shared only in the following ways:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>With Other Users:</strong> Your profile, listings, and messages visible to other verified DIU students</li>
              <li><strong>Service Providers:</strong> Firebase (authentication & database), Cloudinary (image storage), OneSignal (notifications)</li>
              <li><strong>Legal Requirements:</strong> If required by law or to protect user safety</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Your Rights</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access your personal data at any time</li>
              <li>Update or correct your profile information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of push notifications (in app settings)</li>
              <li>Request a copy of your data</li>
            </ul>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Cookies & Tracking</h2>
            <p className="text-gray-300 leading-relaxed">
              We use Firebase Analytics to understand app usage patterns. No third-party advertising cookies are used. Location data is only collected when you enable location services for product listings.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              DIU Recycle is intended for university students aged 18+. We do not knowingly collect data from children under 18 without parental consent.
            </p>
          </section>

          <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              For privacy concerns or data requests, contact us at:<br />
              <strong className="text-emerald-400">syedsabbirahmed.contact@gmail.com</strong>
            </p>
          </section>
        </motion.div>

      </div>
    </div>
  );
}

export default PrivacyPolicy;
