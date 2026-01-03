// app/page.tsx

import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import HeroPage from "./components/sections/Hero";
import ScrollToTop from "./components/ui/ScrollToTop";


import { dbConnect } from "./lib/db";

import Hero from "./models/Hero";
import AboutModel from "./models/About";
import EducationModel from "./models/Education";
import ExperienceModel from "./models/Experience";
import ProjectModel from "./models/Project";
import Projects from "./components/sections/Projects";

import { personSchema, serviceSchema } from "./lib/schema";
import Navbar from "./components/layout/Navbar";

export default async function HomePage() {
  await dbConnect();

  const hero = await Hero.findOne().lean();
  const about = await AboutModel.findOne().lean();
  const education = await EducationModel.find().lean();
  const experience = await ExperienceModel.find().lean();
  const projects = await ProjectModel.find().lean();

  return (
    <main>
         <Navbar />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema()) }}
      />

      {/* HERO */}
      <HeroPage
      id="home"
        name={hero?.name}
        headlineH1={hero?.headlineH1}
        subheadlineH2={hero?.subheadlineH2}
        bullets={hero?.bullets}
        ctaText={hero?.ctaText}
        profileImageSrc={hero?.profileImageSrc}
      />

      {/* ABOUT */}
      <About
      id="about"
        paragraphs={about?.paragraphs}
        tools={about?.tools}
      />

      {/* EXPERIENCE */}
      <Experience id="experience" items={experience} />

      {/* PROJECTS */}
      <Projects id="projects" projects={projects} />

      {/* EDUCATION */}
      <Education id="education" items={education} />
            {/* SCROLL TO TOP (hidden on home) */}
      <ScrollToTop />

    </main>
  );
}
