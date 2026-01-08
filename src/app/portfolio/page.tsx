import Link from "next/link";

// Placeholder data - replace with actual before/after photos from Jr.
const projects = [
  {
    id: 1,
    title: "Modern Master Bathroom",
    location: "Phoenix, AZ",
    description: "Complete transformation with new tile, vanity, and fixtures. Completed in 5 days.",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  {
    id: 2,
    title: "Guest Bathroom Refresh",
    location: "Glendale, AZ",
    description: "Updated flooring, new vanity, and modern lighting. 4-day project.",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  {
    id: 3,
    title: "Full Bathroom Remodel",
    location: "Scottsdale, AZ",
    description: "Complete gut renovation with custom tile work. Finished in 5 days.",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
  {
    id: 4,
    title: "Half Bath Upgrade",
    location: "Mesa, AZ",
    description: "Quick 3-day transformation with new fixtures and paint.",
    beforeImage: "/placeholder-before.jpg",
    afterImage: "/placeholder-after.jpg",
  },
];

export default function Portfolio() {
  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the transformations we&apos;ve completed for Phoenix homeowners. Every project showcases our commitment to quality and fast turnaround.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              {/* Before/After Comparison */}
              <div className="relative aspect-video bg-gray-200">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gray-300 flex items-center justify-center border-r-2 border-white">
                    <div className="text-center">
                      <p className="text-gray-500 font-medium">BEFORE</p>
                      <p className="text-gray-400 text-sm mt-2">Photo coming soon</p>
                    </div>
                  </div>
                  <div className="w-1/2 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-gray-500 font-medium">AFTER</p>
                      <p className="text-gray-400 text-sm mt-2">Photo coming soon</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-orange-500 text-sm mb-2">{project.location}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready for Your Transformation?</h2>
          <p className="text-gray-600 mb-6">
            Join the hundreds of Phoenix homeowners who&apos;ve transformed their bathrooms with Powerhouse.
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
