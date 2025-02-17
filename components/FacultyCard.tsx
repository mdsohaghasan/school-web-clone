import Image from "next/image"

interface FacultyCardProps {
  name: string
  designation: string
  image: string
}

export function FacultyCard({ name, designation, image }: FacultyCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
        <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-green-600">{designation}</p>
    </div>
  )
}

