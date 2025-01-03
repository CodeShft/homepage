import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-start xl:pl-2 space-y-8 xl:space-y-0 xl:space-x-16 xl:pt-8 xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6 text-amber-700">
              Hello I am Lokum <br />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a playful cat, I will be a very good friend to you, I love
              dried cat food and sleep. I also get along well with other cats.
            </p>
          </div>
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
