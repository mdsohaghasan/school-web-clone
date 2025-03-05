import type { IconType } from "react-icons"
import { FaBook, FaFlask, FaUsers, FaUserTie } from "react-icons/fa"
import { useEffect, useState } from "react"

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
  const [count, setCount] = useState(0)
  const targetValue = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const increment = targetValue / steps
    const interval = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCount(Math.min(Math.floor(increment * currentStep), targetValue))
      
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [targetValue])

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <Icon className="text-4xl text-foreground mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-high font-hind-siliguri">{title}</h3>
      <p className="text-3xl font-bold text-foreground font-hind-siliguri">
        {count.toLocaleString()}{suffix}
      </p>
    </div>
  )
}

