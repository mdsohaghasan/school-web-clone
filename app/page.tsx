"use client"

import { EventCard } from "@/components/EventCard"
import { FacultyCard } from "@/components/FacultyCard"
import { FeaturedBooks } from "@/components/FeaturedBooks"
import { Gallery } from "@/components/Gallery"
import { NoticeBoard } from "@/components/NoticeBoard"
import { StatCard } from "@/components/StatCard"
import { VideoPreview } from "@/components/VideoPreview"
import { aboutSection, eventsSection, facultySection, statsSection, heroSection } from "@/lib/contents"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <div
        className="h-screen w-full h-full bg-contain bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('${heroSection.backgroundImage}')`,
        }}
      >
        
      </div>

     {/* <Carousel></Carousel> */}
 
      <main>
        {/* About Section */}
        <section id="about" className="py-20 ms-12 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-card-foreground ">
              {aboutSection.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-high mb-6">{aboutSection.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                  {aboutSection.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <feature.icon className="text-foreground mr-2 mt-1 flex-shrink-0 " />
                      <span className="font-hind-siliguri text-mid">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96">
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
            <h2 className="text-4xl text-center font-bold mb-12 text-muted-foreground">
              {statsSection.title}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
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
            <h2 className="text-4xl text-center font-bold mb-12 text-card-foreground ">
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
            <h2 className="text-4xl font-bold text-center mb-12 text-muted-foreground">
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
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full text-lg  hover:bg-primary/90 transition duration-300"
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
                <h2 className="text-4xl font-bold mb-8 text-card-foreground">গ্যালারি</h2>
                <Gallery />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-8 text-card-foreground">নোটিশ বোর্ড</h2>
                <NoticeBoard /> 
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

