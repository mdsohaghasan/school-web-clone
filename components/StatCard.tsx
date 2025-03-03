import type { IconType } from "react-icons"
import { FaBook, FaFlask, FaUsers, FaUserTie } from "react-icons/fa"

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
      <Icon className="text-4xl text-foreground mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-high font-hind-siliguri">{title}</h3>
      <p className="text-3xl font-bold text-foreground font-hind-siliguri">{value}</p>
    </div>
  )
}

