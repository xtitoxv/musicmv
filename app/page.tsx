import Link from 'next/link'
import { Music, Sparkles, Wand2, Mic, Scissors, Image, Video } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">MusicMV</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/create" className="hover:text-purple-400">Create</Link>
            <Link href="/library" className="hover:text-purple-400">My Library</Link>
            <Link href="/tools" className="hover:text-purple-400">Tools</Link>
            <Link href="/pricing" className="hover:text-purple-400">Pricing</Link>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 hover:bg-gray-800 rounded-lg">Sign In</button>
            <Link href="/create" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg">Get Started Free</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="text-purple-400">AI Music Generator</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Create AI Songs<br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            With Vocals in Seconds
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Turn your ideas into original songs with AI. Generate music with vocals, 
          lyrics, and full production in under 60 seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/create" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-lg font-semibold flex items-center justify-center gap-2">
            <Wand2 className="w-5 h-5" />
            Start Creating Free
          </Link>
          <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-lg">Watch Demo</button>
        </div>
        <p className="text-sm text-gray-500 mt-4">20 free credits daily • No credit card required</p>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Everything You Need to Create Songs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Music className="w-8 h-8 text-purple-400" />}
            title="AI Song Generator"
            description="Create complete songs with vocals from just a description or lyrics"
          />
          <FeatureCard 
            icon={<Mic className="w-8 h-8 text-purple-400" />}
            title="AI Vocals"
            description="Realistic AI voices in 50+ languages with natural emotion"
          />
          <FeatureCard 
            icon={<Scissors className="w-8 h-8 text-purple-400" />}
            title="Stem Splitter"
            description="Split songs into vocals, drums, bass, and more for remixing"
          />
          <FeatureCard 
            icon={<Wand2 className="w-8 h-8 text-purple-400" />}
            title="Song Editor"
            description="Replace any section of your song with AI-powered editing"
          />
          <FeatureCard 
            icon={<Image className="w-8 h-8 text-purple-400" />}
            title="AI Cover Art"
            description="Generate album art that matches your song's vibe"
          />
          <FeatureCard 
            icon={<Video className="w-8 h-8 text-purple-400" />}
            title="Music Videos"
            description="Create music videos to bring your songs to life"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Make Your First Song?</h2>
          <p className="text-xl text-gray-400 mb-8">Join thousands of creators making AI music</p>
          <Link href="/create" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-lg font-semibold inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Create Your Song Now
          </Link>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-purple-500/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
