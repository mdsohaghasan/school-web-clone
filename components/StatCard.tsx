import type { IconType } from "react-icons"
import { FaUsers, FaUserTie, FaFlask, FaBook } from "react-icons/fa"

interface StatCardProps {
  title: string
  value: string
  icon: string
}

const iconMap: { [key: string]: IconType } = {
  users: FaUsers,
  "user-tie": FaUserTie,
  flask: FaFlask,
  book: FaBook,
}

export function StatCard({ title, value, icon }: StatCardProps) {
  const Icon = iconMap[icon] || FaUsers

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <Icon className="text-4xl text-blue-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Hind Siliguri' }}>{title}</h3>
      <p className="text-3xl font-bold text-blue-700" style={{ fontFamily: 'Hind Siliguri' }}>{value}</p>
    </div>
  )
}

