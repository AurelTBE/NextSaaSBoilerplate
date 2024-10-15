const plans = [
  {
    name: "Starter Plan",
    price: "$29/month",
    features: [
      "Basic Support",
      "Up to 100 Users",
      "Core Features Access"
    ]
  },
  {
    name: "Pro Plan",
    price: "$79/month",
    features: [
      "Priority Support",
      "Up to 1,000 Users",
      "Advanced Features Access",
      "Custom Integrations"
    ]
  },
  {
    name: "Enterprise Plan",
    price: "Contact Us for Pricing",
    features: [
      "Dedicated Support",
      "Unlimited Users",
      "Full Feature Access",
      "Custom Development Options"
    ]
  }
]

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Plans and Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mb-2">✓ {feature}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
