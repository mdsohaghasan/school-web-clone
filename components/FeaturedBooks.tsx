import Image from "next/image"
import Link from "next/link"

const featuredBooks = [
  {
    id: 1,
    title: "কুরআন ও সহীহ হাদীসের আলোকে ইস্তিগফার",
    author: "মোস্তাফিজুর রহমান আল-মাদানী",
    cover: "/images/dummy/book/কুরআন-ও-সহীহ-হাদীসের-আলোকে-ইস্তিগফার.png",
  },
  { id: 2, 
    title: "প্রত্যেক মুসলিমের জন্যে যা জানা অপরিহার্য", 
    author: "মোস্তাফিজুর রহমান আল-মাদানী", 
    cover: "/images/dummy/book/প্রত্যেক-মুসলিমের-জন্যে-যা-জানা-অপরিহার্য.png", 
   },
  { id: 3, 
    title: "নাবী (সাঃ) যেভাবে পবিত্রতা অর্জন করতেন", 
    author: "মোস্তাফিজুর রহমান আল-মাদানী", 
    cover: "/images/dummy/book/নাবী-(সাঃ)-যেভাবে-পবিত্রতা-অর্জন-করতেন.png", 
  },
  {
    id: 4,
    title: "রাসূল সাঃ এর ২৪ ঘন্টার আমল",
    author: "মোস্তাফিজুর রহমান আল-মাদানী",
    cover: "/images/dummy/book/রাসূল-সাঃ-এর-২৪-ঘন্টার-আমল.png", 
  },
  {
    id: 5,
    title: "কুরআন ও সহীহ হাদীসের আলোকে নিষিদ্ধ কর্মকান্ড",
    author: "মোস্তাফিজুর রহমান আল-মাদানী",
    cover: "/images/dummy/book/নিষিদ্ধ-কর্মকাণ্ড.png", 
  },
 
]

export function FeaturedBooks() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-card-foreground font-hind-siliguri">
          নির্বাচিত বই সমূহ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {featuredBooks.map((book) => (
            <div key={book.id} className="bg-background rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={book.cover}
                  alt={book.title}
                  // layout="fill"
                  className="object-contain mx-auto"
                  width={230}
                  height={256}
                
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-high font-hind-siliguri">
                  {book.title}
                </h3>
                <p className="text-mid mb-4 font-hind-siliguri">{book.author}</p>
                <Link
                  href="#"
                  // href={`/books/${book.id}`}
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

