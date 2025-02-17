"use client"

import { EventCard } from "@/components/EventCard"
import { FacultyCard } from "@/components/FacultyCard"
import { FeaturedBooks } from "@/components/FeaturedBooks"
import { Gallery } from "@/components/Gallery"
import { NoticeBoard } from "@/components/NoticeBoard"
import { StatCard } from "@/components/StatCard"
import { VideoPreview } from "@/components/VideoPreview"
import { aboutSection, eventsSection, facultySection, footerData, heroSection, statsSection } from "@/lib/contents"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${heroSection.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">{heroSection.title}</h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
            {heroSection.subtitle}
          </p>
          <Link
            href="#about"
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300 animate-fade-in-up animation-delay-600"
          >
            {heroSection.ctaText}
          </Link>
        </div>
      </div>

      <main>
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">{aboutSection.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">{aboutSection.description}</p>
                <ul className="space-y-4">
                  {aboutSection.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="text-green-600 mr-2" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-96">
                <Image
                  src={aboutSection.image}
                  alt="আল-হিকমা ক্যাম্পাস"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">{statsSection.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statsSection.stats.map((stat, index) => (
                <StatCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
              ))}
            </div>
          </div>
        </section>

        <FeaturedBooks />
        <VideoPreview />

        {/* Events Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">{eventsSection.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {eventsSection.events.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Faculty Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12">{facultySection.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultySection.faculty.map((member, index) => (
                <FacultyCard
                  key={index}
                  name={member.name}
                  designation={member.designation}
                  image={member.image}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href={facultySection.ctaLink}
                className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300"
              >
                {facultySection.ctaText}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold mb-8">গ্যালারি</h2>
                <Gallery />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-8">নোটিশ বোর্ড</h2>
                <NoticeBoard />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">{footerData.contact.title}</h3>
              <p className="mb-2">{footerData.contact.address}</p>
              <p className="mb-2">{footerData.contact.phone}</p>
              <p>{footerData.contact.email}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{footerData.quickLinks.title}</h3>
              <ul className="space-y-2">
                {footerData.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-green-300 transition duration-300">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{footerData.social.title}</h3>
              <div className="flex space-x-4">
                {footerData.social.links.map((link, index) => (
                  <Link key={index} href={link.href} className="hover:text-green-300 transition duration-300">
                    <span className="sr-only">{link.platform}</span>
                    {/* Social icons remain the same */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p>{footerData.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

