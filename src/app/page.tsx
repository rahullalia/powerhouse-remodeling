import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Bathroom in Just 5 Days
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Phoenix&apos;s trusted bathroom remodeling experts. Licensed, insured, and backed by 13+ years of experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Your Free Quote
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
              Limited Time Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
              $5,000 Bathroom Remodel Special
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Complete bathroom transformation including new tile, vanity, and fixtures. Done in 5 days or less.
            </p>
            <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Licensed & Insured (13+ years)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Completed in 5 days or less</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>Free in-home estimate</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-green-500 text-xl">✓</span>
                <span>No shortcuts, quality guaranteed</span>
              </li>
            </ul>
            <Link
              href="#quote"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Claim Your Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Bathroom Remodels", time: "~5 days", icon: "🚿" },
              { title: "Roofing", time: "3-4 days", icon: "🏠" },
              { title: "Exterior Painting", time: "~4 days", icon: "🎨" },
              { title: "Flooring", time: "1 week+", icon: "🪵" },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Phoenix Homeowners Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">13+ Years Experience</h3>
              <p className="text-gray-600">Trusted by Phoenix homeowners since 2011. We know local homes inside and out.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Most bathroom remodels completed in just 5 days. Minimal disruption to your life.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind. Quality work, guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Get Your Free Quote</h2>
          <p className="text-gray-400 text-center mb-8">
            Fill out the form below and we&apos;ll contact you within 24 hours.
          </p>
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
