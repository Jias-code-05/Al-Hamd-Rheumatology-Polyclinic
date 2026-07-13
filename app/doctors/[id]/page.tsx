import { DOCTORS } from '@/lib/data'
import DoctorDetailClient from './DoctorDetailClient'

export function generateStaticParams() {
  return DOCTORS.map(d => ({ id: d.id }))
}

export default function DoctorDetailPage({ params }: { params: { id: string } }) {
  return <DoctorDetailClient id={params.id} />
}
