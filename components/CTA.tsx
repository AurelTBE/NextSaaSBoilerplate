import Link from 'next/link'

const CTA = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Free Trial Today!</h2>
        <p className="mb-8">
          Experience the power of SaaSify with a 14-day free trial. No credit card required. Get started now and see how easy it is to build your SaaS application.
        </p>
        <Link href="#" className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300">
          Get Started Now
        </Link>
      </div>
    </section>
  )
}

export default CTA
