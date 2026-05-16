'use client'
import { useTransition } from 'react'
import { deletePost } from '@/app/admin/actions'

interface Props {
  postId: string
  variant?: 'inline' | 'danger'
}

export default function DeletePostButton({ postId, variant = 'inline' }: Props) {
  const [pending, startTransition] = useTransition()

  function handleClick() {
    if (!confirm('¿Borrar este post permanentemente? Esta acción no se puede deshacer.')) return
    startTransition(() => { deletePost(postId) })
  }

  if (variant === 'danger') {
    return (
      <button
        onClick={handleClick}
        disabled={pending}
        className="text-sm text-red-500 hover:text-red-700 transition-colors disabled:opacity-50"
      >
        {pending ? 'Borrando…' : 'Delete post'}
      </button>
    )
  }

  return (
    <button
      onClick={handleClick}
      disabled={pending}
      className="text-slate-400 hover:text-red-600 transition-colors text-sm font-medium disabled:opacity-40"
    >
      {pending ? '…' : 'Delete'}
    </button>
  )
}
