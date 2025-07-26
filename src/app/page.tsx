import type { About, Feature, FeatureExplanation, Instructor, Pointer, ResponseData } from "./types/course.types";
import { MetaItem } from "./types/seo.types";
import HeroSection from "./components/features/course/HeroSection";
import InstructorsCard from "./components/features/course/InstructorsCard";
import CourseOverview from "./components/features/course/CourseOverview";
import LearningTopics from "./components/features/course/LearningTopics";
import ExclusiveFeatures from "./components/features/course/ExclusiveFeatures";
import CourseDetails from "./components/features/course/CourseDetails";
import CourseCtaCard from "./components/features/course/CourseCtaCard";
import { Metadata } from "next";
import { courseService } from "./services/courseService";

export async function generateMetadata(): Promise<Metadata> {

  const res = await courseService.fetchCourseDetails();

  const seo = res?.seo;

  const { title, description } = res;

  return {
    title: title,
    description: description,
    keywords: seo?.keywords,
    openGraph: {
      title: title,
      description: description,
    },
    other: {
      ...(seo?.defaultMeta.reduce(
        (acc: Record<string, string>, meta: MetaItem) => ({
          ...acc,
          [meta.type]: meta.content,
        }),
        {},
      ) ?? {}),
    },
  };
}

export default async function Home() {
  const details = await courseService.fetchCourseDetails();
  const { title, description, media, cta_text, checklist }: ResponseData = details;

  let instructors: Instructor[] = [];
  let features: Feature[] = [];
  let pointers: Pointer[] = [];
  let explanations: FeatureExplanation[] = [];
  let about: About[] = [];

  for (const section of details.sections) {
    switch (section.type) {
      case "instructors":
        instructors = section.values as Instructor[];
        break;
      case "features":
        features = section.values as Feature[];
        break;
      case "pointers":
        pointers = section.values as Pointer[];
        break;
      case "feature_explanations":
        explanations = section.values as FeatureExplanation[];
        break;
      case "about":
        about = section.values as About[];
        break;
    }
  }

  return (
    <main>
      <HeroSection title={title} description={description} />

      <section className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="col-span-2 py-8 space-y-10">
            {/* Course Instructor */}
            {
              instructors.length > 0 && (
                <InstructorsCard instructors={instructors} />
              )
            }

            {/* How the course is laid out */}
            {
              features.length > 0 && (
                <CourseOverview features={features} />
              )
            }

            {/* What you will learn by doing the course */}
            {
              pointers.length > 0 && (
                <LearningTopics pointers={pointers} />
              )
            }

            {/* What you will learn by doing the course */}
            {
              explanations.length > 0 && (
                <ExclusiveFeatures explanations={explanations} />
              )
            }

            {/* Course details */}
            {
              about.length && (

                <CourseDetails about={about} />
              )
            }
          </div>

          <div className="col-span-1 -mt-60">
            <CourseCtaCard media={media} cta_text={cta_text} checklist={checklist} />
          </div>
        </div>
      </section>
    </main>
  );
}
