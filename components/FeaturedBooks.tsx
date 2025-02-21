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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-card-foreground font-hind-siliguri">
          নির্বাচিত বই সমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {featuredBooks.map((book) => (
            <div key={book.id} className="bg-background rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={book.cover}
                  alt={book.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground font-hind-siliguri">
                  {book.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-hind-siliguri">{book.author}</p>
                <Link
                  href={`/books/${book.id}`}
                  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition duration-300 font-hind-siliguri"
                >
                  বিস্তারিত দেখুন
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

