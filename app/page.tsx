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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${heroSection.backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-primary-foreground animate-fade-in-up font-hind-siliguri">
            {heroSection.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 font-hind-siliguri">
            {heroSection.subtitle}
          </p>
          <Link
            href="#about"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition duration-300 animate-fade-in-up animation-delay-600 font-hind-siliguri"
          >
            {heroSection.ctaText}
          </Link>
        </div>
      </div>
 
      <main>
        {/* About Section */}
        <section id="about" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-card-foreground font-hind-siliguri">
              {aboutSection.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 font-hind-siliguri">{aboutSection.description}</p>
                <ul className="space-y-4">
                  {aboutSection.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon className="text-blue-600 mr-2" />
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
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-muted-foreground font-hind-siliguri">
              {statsSection.title}
            </h2>
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
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-card-foreground font-hind-siliguri">
              {eventsSection.title}
            </h2>
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
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-muted-foreground font-hind-siliguri">
              {facultySection.title}
            </h2>
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
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition duration-300"
              >
                {facultySection.ctaText}
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold mb-8 text-card-foreground font-hind-siliguri">গ্যালারি</h2>
                <Gallery />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-8 text-card-foreground font-hind-siliguri">নোটিশ বোর্ড</h2>
                <NoticeBoard />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-hind-siliguri">{footerData.contact.title}</h3>
              <p className="mb-2 font-hind-siliguri">{footerData.contact.address}</p>
              <p className="mb-2 font-hind-siliguri">{footerData.contact.phone}</p>
              <p className="font-hind-siliguri">{footerData.contact.email}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-hind-siliguri">{footerData.quickLinks.title}</h3>
              <ul className="space-y-2">
                {footerData.quickLinks.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-blue-300 transition duration-300">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-hind-siliguri">{footerData.social.title}</h3>
              <div className="flex space-x-4">
                {footerData.social.links.map((link, index) => (
                  <Link key={index} href={link.href} className="hover:text-primary/80 transition duration-300">
                    <span className="sr-only">{link.platform}</span>
                    {/* Social icons remain the same */}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="font-hind-siliguri">{footerData.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

