import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Cat</span>
            <h1 className="h1 mb-6  text-amber-700">
              Hello I'm Lokum <br />
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a playful cat, I will be a very good friend to you, I love
              dried cat food and sleep. I also get along well with other cats.
            </p>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0"> <Photo/></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
