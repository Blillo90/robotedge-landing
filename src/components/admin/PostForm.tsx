'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  cover_image: string | null
  silo: string
  read_time: number
  published: boolean
  created_at: string
  updated_at: string
}

const SILO_OPTIONS = [
  { value: 'trading-algoritmico', label: 'Trading Algorítmico' },
  { value: 'ninjatrader-tecnico', label: 'NinjaTrader Técnico' },
  { value: 'comparativas',        label: 'Comparativas' },
  { value: 'estrategias-reales',  label: 'Estrategias Reales' },
]

interface PostFormProps {
  post?: Post
  action: (formData: FormData) => Promise<{ error?: string }>
}

function toSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function PostForm({ post, action }: PostFormProps) {
  const [title, setTitle] = useState(post?.title ?? '')
  const [slug, setSlug] = useState(post?.slug ?? '')
  const [excerpt, setExcerpt] = useState(post?.excerpt ?? '')
  const [content, setContent] = useState(post?.content ?? '')
  const [coverImage, setCoverImage] = useState(post?.cover_image ?? '')
  const [imagePreview, setImagePreview] = useState(post?.cover_image ?? '')
  const [silo, setSilo] = useState(post?.silo ?? 'trading-algoritmico')
  const [readTime, setReadTime] = useState(post?.read_time ?? 5)
  const [tags, setTags] = useState<string>((post as Post & { tags?: string[] })?.tags?.join(', ') ?? '')
  const [uploading, setUploading] = useState(false)
  const [published, setPublished] = useState(post?.published ?? false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  function handleTitleChange(value: string) {
    setTitle(value)
    if (!post) setSlug(toSlug(value))
  }

  async function handleImageUpload(file: File) {
    if (!file.type.startsWith('image/')) return
    setUploading(true)
    setImagePreview(URL.createObjectURL(file))

    try {
      const supabase = createClient()
      const ext = file.name.split('.').pop()
      const path = `posts/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('post-images')
        .upload(path, file, { upsert: false })

      if (uploadError) throw uploadError

      const { data } = supabase.storage.from('post-images').getPublicUrl(path)
      setCoverImage(data.publicUrl)
      setImagePreview(data.publicUrl)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error al subir la imagen')
      setImagePreview(coverImage)
    } finally {
      setUploading(false)
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) handleImageUpload(file)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData()
    formData.set('title', title)
    formData.set('slug', slug)
    formData.set('excerpt', excerpt)
    formData.set('content', content)
    formData.set('cover_image', coverImage)
    formData.set('silo', silo)
    formData.set('read_time', String(readTime))
    formData.set('tags', tags)
    formData.set('published', String(published))

    const result = await action(formData)

    if (result?.error) {
      setError(result.error)
      setLoading(false)
      return
    }

    router.push('/admin')
    router.refresh()
  }

  const inputClass =
    'w-full border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => handleTitleChange(e.target.value)}
          className={inputClass}
          placeholder="Post title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Slug</label>
        <input
          type="text"
          required
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          className={`${inputClass} font-mono`}
          placeholder="post-slug"
        />
        <p className="text-xs text-slate-400 mt-1">
          URL: /blog/<span className="font-mono">{slug || '...'}</span>
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Excerpt <span className="font-normal text-slate-400">(optional)</span>
        </label>
        <textarea
          rows={2}
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Short description shown in post listings"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Silo</label>
          <select
            value={silo}
            onChange={(e) => setSilo(e.target.value)}
            className={inputClass}
          >
            {SILO_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            Tiempo de lectura <span className="font-normal text-slate-400">(minutos)</span>
          </label>
          <input
            type="number"
            min={1}
            max={60}
            value={readTime}
            onChange={(e) => setReadTime(Number(e.target.value))}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Tags <span className="font-normal text-slate-400">(separados por coma)</span>
        </label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className={inputClass}
          placeholder="NinjaTrader, Backtesting, Futuros CME"
        />
        <p className="text-xs text-slate-400 mt-1">Ej: NinjaTrader, Backtesting, Gestión de riesgo</p>
      </div>

      {/* Cover image upload */}
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Imagen de portada <span className="font-normal text-slate-400">(opcional)</span>
        </label>

        <div
          onClick={() => fileInputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="relative cursor-pointer overflow-hidden rounded-md border-2 border-dashed border-slate-200 bg-slate-50 hover:border-slate-400 transition-colors"
          style={{ minHeight: 160 }}
        >
          {imagePreview ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full object-cover rounded-md"
                style={{ maxHeight: 240 }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-md"
                style={{ background: 'rgba(0,0,0,0.45)' }}
              >
                <span className="text-white text-xs font-medium">Cambiar imagen</span>
              </div>
              {uploading && (
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-md"
                  style={{ background: 'rgba(255,255,255,0.8)' }}
                >
                  <span className="text-xs text-slate-500">Subiendo…</span>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 py-10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
              <p className="text-sm text-slate-400">
                {uploading ? 'Subiendo…' : 'Arrastra una imagen o haz clic para seleccionar'}
              </p>
              <p className="text-xs text-slate-300">JPG, PNG, WebP · máx. 5 MB</p>
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageUpload(f) }}
        />

        <div className="mt-2 flex items-center gap-2">
          <span className="text-xs text-slate-400 shrink-0">o pega una URL:</span>
          <input
            type="url"
            value={coverImage}
            onChange={(e) => { setCoverImage(e.target.value); setImagePreview(e.target.value) }}
            className="flex-1 border border-slate-200 rounded px-2 py-1 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-slate-900 bg-white"
            placeholder="https://ejemplo.com/imagen.jpg"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          Content <span className="ml-2 font-normal text-slate-400 text-xs">HTML supported</span>
        </label>
        <textarea
          required
          rows={18}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={`${inputClass} font-mono text-xs resize-y`}
          placeholder="<p>Write your post here...</p>"
        />
      </div>

      <div className="flex items-center gap-2.5">
        <input
          id="published"
          type="checkbox"
          checked={published}
          onChange={(e) => setPublished(e.target.checked)}
          className="w-4 h-4 rounded border-slate-300 accent-slate-900"
        />
        <label htmlFor="published" className="text-sm text-slate-700">
          Publish immediately
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
          {error}
        </p>
      )}

      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={loading || uploading}
          className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Saving…' : post ? 'Save changes' : 'Create post'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="text-sm text-slate-500 border border-slate-200 px-5 py-2.5 rounded-md font-medium hover:bg-slate-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}
