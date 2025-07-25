import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <main className="">
      <section className="bg-[url('/images/hero-banner-bg.jpeg')] bg-cover bg-center py-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-white space-y-2">
            <h1 className="text-4xl font-bold">IELTS Course by Munzereen Shahid</h1>
            <p className="text-base">(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</p>
            <p className="text-base text-gray-400">Get complete preparation of Academic IELTS and General Training IELTS in one course! Join our IELTS Course today to achieve your desired band score under the guidance of the best IELTS Instructor in the country.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
