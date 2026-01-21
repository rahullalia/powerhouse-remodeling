import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export default function SimplePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full shadow-2xl rounded-2xl overflow-hidden my-4 md:my-8 border border-gray-100">

        {/* Left Column: Content */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-bold text-sm tracking-wide uppercase mb-6">
              Limited Time Special
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Complete Bathroom Remodel for <span className="text-orange-600">$5,000</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your bathroom in 5 days or less without the stress. Licensed, insured, and trusted by Phoenix homeowners.
            </p>
          </div>

          <ul className="space-y-5 mb-10">
            {[
              "Complete transformation in ~5 days",
              "Licensed & Insured (13+ years)",
              "Free in-home estimate",
              "100% Satisfaction Guaranteed",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-sm">✓</span>
                </div>
                <span className="text-lg text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Transformations</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={`/images/gallery/${num}.jpg`}
                    alt={`Bathroom remodel transformation ${num}`}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-gray-100 text-sm text-gray-400">
            <div className="flex gap-4">
              <span>Need help? Call us.</span>
              <Link href="https://phoenixremodelingaz.com/privacy" className="underline hover:text-gray-600" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>
            </div>
            <div className="mt-2">
              © {new Date().getFullYear()} Powerhouse Remodeling LLC
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full md:w-1/2 bg-gray-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-white">
          <div className="max-w-md mx-auto w-full">
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
          </div>
        </div>
      </div>
    </main>
  );
}
