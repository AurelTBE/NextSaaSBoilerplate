import Link from 'next/link'

const TopBar = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          SaaSify
        </Link>
        <div className="space-x-4">
          <Link href="#features" className="text-gray-600 hover:text-gray-800">Features</Link>
          <Link href="#pricing" className="text-gray-600 hover:text-gray-800">Pricing</Link>
          <Link href="#about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default TopBar
