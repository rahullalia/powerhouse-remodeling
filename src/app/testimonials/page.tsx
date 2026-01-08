import Link from "next/link";

// Placeholder testimonials - replace with real reviews from Jr.'s customers
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Jr. and his team transformed our outdated bathroom in just 4 days! The quality of work exceeded our expectations. Highly recommend Powerhouse Remodeling.",
    project: "Master Bathroom Remodel",
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Glendale, AZ",
    rating: 5,
    text: "Professional from start to finish. They showed up on time, kept the workspace clean, and delivered exactly what they promised. Our new bathroom looks amazing!",
    project: "Guest Bathroom Renovation",
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "We got quotes from 5 contractors and Powerhouse gave us the best value. The $5,000 special was exactly what we needed. Done in 5 days as promised!",
    project: "Full Bathroom Remodel",
  },
  {
    id: 4,
    name: "David & Maria T.",
    location: "Mesa, AZ",
    rating: 5,
    text: "13 years of experience really shows in their work. Every detail was perfect. We've already recommended them to two of our neighbors.",
    project: "Bathroom + Flooring",
  },
  {
    id: 5,
    name: "Robert K.",
    location: "Chandler, AZ",
    rating: 5,
    text: "Licensed, insured, and truly professional. Jr. personally oversaw our project and made sure everything was done right. No shortcuts!",
    project: "Bathroom Remodel",
  },
  {
    id: 6,
    name: "Amanda S.",
    location: "Tempe, AZ",
    rating: 5,
    text: "Best contractor experience we've ever had. Clear communication, fair pricing, and beautiful results. Our bathroom went from dated to modern in less than a week.",
    project: "Master Bath Transformation",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">What Our Customers Say</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what Phoenix homeowners have to say about their Powerhouse experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="text-center bg-orange-50 rounded-xl p-6">
            <p className="text-3xl font-bold text-orange-500">500+</p>
            <p className="text-gray-600 text-sm">Projects Completed</p>
          </div>
          <div className="text-center bg-orange-50 rounded-xl p-6">
            <p className="text-3xl font-bold text-orange-500">13+</p>
            <p className="text-gray-600 text-sm">Years Experience</p>
          </div>
          <div className="text-center bg-orange-50 rounded-xl p-6">
            <p className="text-3xl font-bold text-orange-500">5★</p>
            <p className="text-gray-600 text-sm">Average Rating</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-700 mt-4 mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="border-t pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
                <p className="text-sm text-orange-500">{testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Note */}
        <div className="text-center bg-gray-50 rounded-2xl p-8 mb-12">
          <p className="text-gray-600 mb-4">
            See more reviews on our Google Business Profile
          </p>
          <p className="text-sm text-gray-400">
            (Google Reviews link coming soon)
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-900 text-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Happy Customers</h2>
          <p className="text-gray-300 mb-6">
            Ready to transform your bathroom? Get your free quote today.
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
