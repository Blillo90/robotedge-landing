import type { Post } from '@/types'

export const demoPosts: Post[] = [
  {
    id: 'demo-1',
    title: 'Cómo construí mi primer robot de trading en Python paso a paso',
    slug: 'primer-robot-trading-python',
    excerpt:
      'Desde la idea hasta el bot operando en live: te cuento exactamente qué hice, qué errores cometí y cómo evitarlos.',
    content: '',
    published: true,
    created_at: '2025-04-07T00:00:00Z',
    updated_at: '2025-04-07T00:00:00Z',
  },
  {
    id: 'demo-2',
    title: 'Por qué el trading discrecional te destruye (y cómo salir de ahí)',
    slug: 'trading-discrecional-problema',
    excerpt:
      'El problema no es tu psicología. El problema es que estás operando sin reglas claras. Los números lo demuestran.',
    content: '',
    published: true,
    created_at: '2025-03-24T00:00:00Z',
    updated_at: '2025-03-24T00:00:00Z',
  },
  {
    id: 'demo-3',
    title: 'Backtesting serio: valida tu estrategia antes de arriesgar un euro',
    slug: 'backtesting-serio-guia',
    excerpt:
      'La mayoría hace backtesting mal. Overfitting, data snooping, métricas que no importan. Aquí tienes el proceso correcto.',
    content: '',
    published: true,
    created_at: '2025-03-10T00:00:00Z',
    updated_at: '2025-03-10T00:00:00Z',
  },
]
