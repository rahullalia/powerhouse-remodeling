"use client";

import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function SimplePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={scaleVariants}
        className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full shadow-2xl rounded-2xl overflow-hidden my-4 md:my-8 border border-gray-100"
      >

        {/* Left Column: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            <motion.div variants={itemVariants} className="mb-8">
              <img
                src="/logo.jpg"
                alt="Powerhouse Remodeling Logo"
                className="h-16 w-auto mb-8"
              />
              <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-bold text-sm tracking-wide uppercase mb-6">
                Limited Time Special
              </span>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                Complete Bathroom Remodel for <span className="text-orange-600">$5,000</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your bathroom in 5 days or less without the stress. Licensed, insured, and trusted by Phoenix homeowners.
              </p>
            </motion.div>

            <motion.ul variants={containerVariants} className="space-y-5 mb-10">
              {[
                "Complete transformation in ~5 days",
                "Licensed & Insured (13+ years)",
                "Free in-home estimate",
                "100% Satisfaction Guaranteed",
              ].map((item, i) => (
                <motion.li key={i} variants={itemVariants} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Transformations</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={`/images/gallery/${num}.jpg`}
                      alt={`Bathroom remodel transformation ${num}`}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What Our Customers Say</h3>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-2 mb-8">
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-orange-600">500+</div>
                  <div className="text-xs text-gray-600 font-medium leading-tight">Projects</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-orange-600">13+</div>
                  <div className="text-xs text-gray-600 font-medium leading-tight">Years</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <div className="text-xl font-bold text-orange-600">5.0</div>
                  <div className="text-xs text-gray-600 font-medium leading-tight">Rating</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    id: 1,
                    name: "Denise Dreyer",
                    text: "Couldn't be happier with this company. Jr. was very responsive and took all my needs into consideration... His team was wonderful, very efficient, cleaned up every day after work and very kind! If you're considering remodel... reach out to them!!",
                    rating: 5
                  },
                  {
                    id: 2,
                    name: "Lucina Chavez",
                    text: "Power House Remodeling is a phenomenal company... Guillermo attention to detail, transparency, and communication was impeccable! Their team works incredibly fast, was always on time, and finished ahead of schedule.",
                    rating: 5
                  },
                  {
                    id: 3,
                    name: "Randy Miller",
                    text: "Had a bathtub/shower installation done. Gio's crew did a fantastic job. They were very professional and always left their work area clean and tidy... Very reasonably priced, and Junior was very easy to work with.",
                    rating: 5
                  },
                  {
                    id: 4,
                    name: "Nick Ramos",
                    text: "The job was done perfectly and professionally... Guillermo went above and beyond keeping us up to date and informing us on dates of arrival... Being out of town Power House made this process worry free!",
                    rating: 5
                  }
                ].map((review) => (
                  <div key={review.id} className="bg-gray-50 p-4 rounded-xl text-sm h-full flex flex-col">
                    <div className="flex text-yellow-500 mb-2 text-xs">{"★".repeat(review.rating)}</div>
                    <p className="text-gray-700 italic mb-3 flex-grow leading-relaxed">&ldquo;{review.text}&rdquo;</p>
                    <p className="font-bold text-gray-900 text-xs">— {review.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8 text-center bg-gray-900 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2">Ready to Start?</h3>
              <p className="text-gray-400 text-sm mb-4">Get your free quote today.</p>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  const form = document.getElementById('quote-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-block w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition-colors"
              >
                Get Free Quote
              </a>
            </motion.div>

            <div className="mt-auto pt-8 border-t border-gray-100 text-sm text-gray-400">
              <div className="flex gap-4">
                <span></span>
                <Link href="https://phoenixremodelingaz.com/privacy" className="underline hover:text-gray-600" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
              </div>
              <div className="mt-2">
                © {new Date().getFullYear()} Powerhouse Remodeling LLC
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Form */}
        <div id="quote-form" className="w-full md:w-1/2 bg-gray-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="max-w-md mx-auto w-full"
          >
            <h2 className="text-3xl font-bold mb-2">Get Your Free Quote</h2>
            <p className="text-gray-400 mb-8">
              Fill out the form below. We&apos;ll call you within 24 hours.
            </p>

            <div className="bg-gray-800/50 p-1 rounded-xl">
              <QuoteForm />
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              No obligation. Your information is 100% secure.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
