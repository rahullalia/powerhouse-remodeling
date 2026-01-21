import Link from "next/link";

export default function About() {
  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Powerhouse Remodeling</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Phoenix&apos;s trusted remodeling experts since 2011
          </p>
        </div>

        {/* Owner Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="bg-gray-200 aspect-square rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-500 font-medium">Jr.&apos;s Photo</p>
              <p className="text-gray-400 text-sm mt-2">Coming soon</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet Jr.</h2>
            <p className="text-gray-600 mb-4">
              With over 13 years of experience in the remodeling industry, Jr. founded Powerhouse Remodeling with a simple mission: deliver quality bathroom transformations fast, without cutting corners.
            </p>
            <p className="text-gray-600 mb-4">
              &ldquo;I&apos;ve been in this business long enough to know what matters to homeowners: quality work, honest pricing, and getting the job done when we say we will. That&apos;s what Powerhouse is all about.&rdquo;
            </p>
            <p className="text-gray-600 mb-6">
              Jr. personally oversees every project to ensure it meets the high standards that have made Powerhouse a trusted name in Phoenix remodeling.
            </p>
            <div className="flex gap-4">
              <div className="bg-orange-50 px-4 py-2 rounded-lg">
                <p className="text-orange-500 font-semibold">Licensed</p>
              </div>
              <div className="bg-orange-50 px-4 py-2 rounded-lg">
                <p className="text-orange-500 font-semibold">Insured</p>
              </div>
              <div className="bg-orange-50 px-4 py-2 rounded-lg">
                <p className="text-orange-500 font-semibold">13+ Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Speed Without Shortcuts</h3>
              <p className="text-gray-600">
                We complete most bathroom remodels in 5 days or less, but never at the expense of quality.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Honest Communication</h3>
              <p className="text-gray-600">
                No hidden fees, no surprises. We give you an honest quote and stick to it.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Every tile, every fixture, every detail—we take pride in work that lasts.
              </p>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-6">Service Area</h2>
          <p className="text-center text-gray-600 mb-4">
            We proudly serve Phoenix and the surrounding areas within a 35-mile radius.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Phoenix",
              "Glendale",
              "Scottsdale",
              "Mesa",
              "Tempe",
              "Chandler",
              "Gilbert",
              "Peoria",
              "Surprise",
              "Avondale",
            ].map((city) => (
              <span
                key={city}
                className="bg-white px-4 py-2 rounded-full text-gray-700 border border-gray-200"
              >
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🚿</span>
              <h3 className="text-lg font-semibold mb-2">Bathroom Remodels</h3>
              <p className="text-gray-600 text-sm">Complete transformations in ~5 days</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🏠</span>
              <h3 className="text-lg font-semibold mb-2">Roofing</h3>
              <p className="text-gray-600 text-sm">Quality roofing in 3-4 days</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🎨</span>
              <h3 className="text-lg font-semibold mb-2">Exterior Painting</h3>
              <p className="text-gray-600 text-sm">Fresh look in ~4 days</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <span className="text-3xl mb-3 block">🪵</span>
              <h3 className="text-lg font-semibold mb-2">Flooring</h3>
              <p className="text-gray-600 text-sm">Beautiful floors in 1 week+</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-6">
            Get your free in-home estimate and see why Phoenix homeowners trust Powerhouse.
          </p>
          <Link
            href="/#quote"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
