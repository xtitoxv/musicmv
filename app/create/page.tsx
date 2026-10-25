'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Music, Sparkles, Wand2, Plus } from 'lucide-react'

export default function CreatePage() {
  const [mode, setMode] = useState<'description' | 'lyrics'>('description')
  const [prompt, setPrompt] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [instrumental, setInstrumental] = useState(false)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Music className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">MusicMV</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">20 credits left</span>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg">Upgrade</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AI Music Generator</h1>
          <p className="text-gray-400">Create a complete song with AI vocals in seconds</p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          {/* Mode Selector */}
          <div className="flex gap-2 mb-6 bg-gray-800 p-1 rounded-lg w-fit">
            <button
              onClick={() => setMode('description')}
              className={`px-4 py-2 rounded-md ${mode === 'description' ? 'bg-purple-600' : 'hover:bg-gray-700'}`}
            >
              Description Mode
            </button>
            <button
              onClick={() => setMode('lyrics')}
              className={`px-4 py-2 rounded-md ${mode === 'lyrics' ? 'bg-purple-600' : 'hover:bg-gray-700'}`}
            >
              Lyrics Mode
            </button>
          </div>

          {mode === 'description' ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Song Description</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe your song... e.g., 'A warm acoustic song about summer love, upbeat and cheerful with female vocals'"
                  className="w-full h-32 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <p className="text-xs text-gray-500 mt-1">{prompt.length}/500 characters</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Style Tags (Optional)</label>
                <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g., pop, acoustic, upbeat, female vocal"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Lyrics</label>
                <textarea
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  placeholder="[Verse]\nYour lyrics here...\n\n[Chorus]\n..."
                  className="w-full h-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 font-mono text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">{lyrics.length}/5000 characters</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Style Tags</label>
                  <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="e.g., pop, rock, hip-hop"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Song Title (Optional)</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="My Song"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 mt-6 mb-6">
            <input
              type="checkbox"
              id="instrumental"
              checked={instrumental}
              onChange={(e) => setInstrumental(e.target.checked)}
              className="w-4 h-4"
            />
            <label htmlFor="instrumental" className="text-sm">Instrumental only (no vocals)</label>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-lg font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Generate Music (10 Credits) • Get 2 Songs
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Quick Tips</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div className="p-4 bg-gray-900/30 rounded-lg">
              <strong className="text-white">Be specific:</strong> Include genre, mood, tempo, and vocal style
            </div>
            <div className="p-4 bg-gray-900/30 rounded-lg">
              <strong className="text-white">Use section markers:</strong> Add [Verse], [Chorus], [Bridge] in lyrics mode
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
