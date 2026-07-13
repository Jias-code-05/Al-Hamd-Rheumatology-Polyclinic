import { HEALTH_POSTS } from '@/lib/data'
import HealthPostClient from './HealthPostClient'

export function generateStaticParams() {
  return HEALTH_POSTS.map(p => ({ id: p.id }))
}

export default function HealthPostPage({ params }: { params: { id: string } }) {
  return <HealthPostClient id={params.id} />
}
