import Image from "next/image"
import Link from "next/link"

const featuredBooks = [
  {
    id: 1,
    title: "ইসলামের ইতিহাস",
    author: "ড. মুহাম্মদ আলী",
    cover: "https://source.unsplash.com/random/300x400?islamic+book",
  },
  { id: 2, title: "কুরআন তাফসীর", author: "মাওলানা আব্দুল করিম", cover: "https://source.unsplash.com/random/300x400?quran" },
  { id: 3, title: "হাদিস শরীফ", author: "ইমাম বুখারী", cover: "https://source.unsplash.com/random/300x400?hadith" },
  {
    id: 4,
    title: "ইসলামি আইন",
    author: "ড. জাকির নায়েক",
    cover: "https://source.unsplash.com/random/300x400?islamic+law",
  },
]

export function FeaturedBooks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">বইয়ের সংগ্রহশালা</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <Image
                src={book.cover || "/placeholder.svg"}
                alt={book.title}
                width={300}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                <p className="text-gray-600 mb-4">{book.author}</p>
                <Link href={`/books/${book.id}`} className="text-green-600 hover:text-green-700 font-semibold">
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/books"
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            সকল বই দেখুন
          </Link>
        </div>
      </div>
    </section>
  )
}

