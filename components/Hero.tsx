import Link from 'next/link'

const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to SaaSify: Your Ultimate SaaS Solution</h1>
        <p className="text-xl mb-8">Transform Your Business with Our Next.js SaaS Boilerplate</p>
        <p className="text-lg mb-8">
          SaaSify is designed to accelerate your SaaS development process. With our robust, scalable, and customizable Next.js boilerplate, you can focus on building features that matter to your users.
        </p>
        <Link href="#" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Get Started Now
        </Link>
      </div>
    </section>
  )
}

export default Hero
