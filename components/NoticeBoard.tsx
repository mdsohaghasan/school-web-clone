import Link from "next/link"
import { FaBullhorn } from "react-icons/fa"

const notices = [
  {
    id: 1,
    title: "ভর্তি পরীক্ষার ফলাফল প্রকাশ",
    date: "১০ জুলাই, ২০২৩",
    link: "/notices/admission-results",
  },
  {
    id: 2,
    title: "গ্রীষ্মকালীন ছুটির সময়সূচি",
    date: "৫ জুলাই, ২০২৩",
    link: "/notices/summer-vacation",
  },
  {
    id: 3,
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা",
    date: "১ জুলাই, ২০২৩",
    link: "/notices/annual-sports",
  },
  {
    id: 4,
    title: "শিক্ষক নিয়োগ বিজ্ঞপ্তি",
    date: "২৮ জুন, ২০২৩",
    link: "/notices/teacher-recruitment",
  },
]

export function NoticeBoard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <ul className="space-y-4">
        {notices.map((notice) => (
          <li key={notice.id}>
            <Link href={notice.link} className="block hover:bg-gray-100 p-2 rounded transition duration-300">
              <div className="flex items-start">
                <FaBullhorn className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">{notice.title}</h4>
                  <p className="text-sm text-gray-600">{notice.date}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-center">
        <Link href="/notices" className="text-green-600 hover:underline">
          সকল নোটিশ দেখুন
        </Link>
      </div>
    </div>
  )
}

