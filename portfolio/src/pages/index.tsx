import Description from "@/components/description";
import Experience, { TExperience } from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import { experienceData } from "public/experience_data";

export default function Home() {
  return (
    <>
      <div className="px-3 pt-4">
        <Navbar />
        <Hero />
        <Description />

        <div>
          <h1 className="text-4xl font-inter font-extrabold mt-20 mb-10">
            Experience
          </h1>

          {experienceData.map((experience: TExperience) => {
            return (
              <Experience
                title={experience.title}
                company={experience.company}
                description={experience.description}
                startDate={experience.startDate}
                endDate={experience.endDate}
                key={experience.company}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
