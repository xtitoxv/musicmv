'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Music, Sparkles } from 'lucide-react'

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
            <span className="text-sm text-gray-400">20 créditos restantes</span>
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg">Upgrade</button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Gerador de Músicas com IA</h1>
          <p className="text-gray-400">Crie uma música completa com vocais IA em segundos</p>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <div className="flex gap-2 mb-6 bg-gray-800 p-1 rounded-lg w-fit">
            <button
              onClick={() => setMode('description')}
              className={px-4 py-2 rounded-md }
            >
              Modo Descrição
            </button>
            <button
              onClick={() => setMode('lyrics')}
              className={px-4 py-2 rounded-md }
            >
              Modo Letras
            </button>
          </div>

          {mode === 'description' ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Descrição da Música</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Descreva sua música... ex: 'Uma música acústica sobre o amor de verão, animada e alegre com vocais femininos'"
                  className="w-full h-32 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                />
                <p className="text-xs text-gray-500 mt-1">{prompt.length}/500 caracteres</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tags de Estilo (Opcional)</label>
                <input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="ex: pop, acústico, animado, vocal feminino"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Letras</label>
                <textarea
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  placeholder="[Verso]\nSuas letras aqui...\n\n[Refrão]\n..."
                  className="w-full h-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 font-mono text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">{lyrics.length}/5000 caracteres</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Tags de Estilo</label>
                  <input
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="ex: pop, rock, hip-hop"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Título da Música (Opcional)</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Minha Música"
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
            <label htmlFor="instrumental" className="text-sm">Apenas instrumental (sem vocais)</label>
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg text-lg font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Gerar Música (10 Créditos) • Receba 2 Músicas
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Dicas Rápidas</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div className="p-4 bg-gray-900/30 rounded-lg">
              <strong className="text-white">Seja específico:</strong> Inclua gênero, humor, tempo e estilo vocal
            </div>
            <div className="p-4 bg-gray-900/30 rounded-lg">
              <strong className="text-white">Use marcadores:</strong> Adicione [Verso], [Refrão], [Ponte] no modo letras
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
