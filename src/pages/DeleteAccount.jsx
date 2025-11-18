import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, AlertTriangle, Mail, User } from 'lucide-react';

const DeleteAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    confirmation: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the request to your backend
    console.log('Account deletion request:', formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6">
            <Trash2 className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Delete Account Request
          </h1>
          <p className="text-gray-400 text-lg">
            We're sorry to see you go. Please fill out the form below to request account deletion.
          </p>
        </motion.div>

        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            {/* Warning Alert */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-red-500 font-semibold mb-1">Important Notice</h3>
                <p className="text-gray-300 text-sm">
                  Deleting your account is permanent and cannot be undone. All your data, including your profile, 
                  recycling history, and rewards will be permanently removed from our system.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Full Name
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </div>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white"
                  placeholder="Enter your registered email"
                />
              </div>

              {/* Reason Field */}
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2">
                  Reason for Deletion (Optional)
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-white resize-none"
                  placeholder="Help us improve by telling us why you're leaving..."
                />
              </div>

              {/* Confirmation Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirmation"
                  name="confirmation"
                  checked={formData.confirmation}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 bg-gray-900 border-gray-600 rounded focus:ring-2 focus:ring-green-500"
                />
                <label htmlFor="confirmation" className="text-sm text-gray-300">
                  I understand that this action is permanent and cannot be undone. I confirm that I want to 
                  delete my account and all associated data from DIU Recycle.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={!formData.confirmation}
                  className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Submit Deletion Request
                </button>
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
              <Mail className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Request Submitted</h2>
            <p className="text-gray-400 mb-6">
              Your account deletion request has been received. We'll process your request within 24-48 hours 
              and send a confirmation email to <span className="text-green-500 font-semibold">{formData.email}</span>.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              If you change your mind, please contact our support team immediately.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Return to Home
            </button>
          </motion.div>
        )}

        {/* Additional Information */}
        {!submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center text-gray-400 text-sm"
          >
            <p>
              Need help? Contact us at{' '}
              <a href="mailto:support@diurecycle.com" className="text-green-500 hover:underline">
                support@diurecycle.com
              </a>
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DeleteAccount;
