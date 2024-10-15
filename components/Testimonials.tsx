const testimonials = [
  {
    name: "John Doe",
    title: "CEO of TechCorp",
    quote: "SaaSify transformed our development process. We launched in record time and our users love the performance."
  },
  {
    name: "Jane Smith",
    title: "CTO of Innovate Inc.",
    quote: "The flexibility and support we received were top-notch. Highly recommend for any SaaS startup."
  }
]

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
