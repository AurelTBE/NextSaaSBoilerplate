import { FiLayers, FiShield, FiZap } from 'react-icons/fi';

const features = [
  {
    icon: <FiLayers className="w-12 h-12 text-neon-green" />,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business, handling millions of requests with ease.',
  },
  {
    icon: <FiShield className="w-12 h-12 text-electric-blue" />,
    title: 'Advanced Security',
    description: 'State-of-the-art encryption and security measures to protect your data.',
  },
  {
    icon: <FiZap className="w-12 h-12 text-vibrant-purple" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed, delivering results in milliseconds.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Cutting-Edge Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-white text-center mb-4">{feature.title}</h3>
              <p className="text-gray-300 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
