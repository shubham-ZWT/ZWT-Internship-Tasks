"use client";

import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { useRouter } from "next/navigation";
import TheFutureIsHere from "@/components/TheFutureIsHere";
import { TfiArrowTopRight } from "react-icons/tfi";

export default function Home() {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/learn-more");
  };

  const handleServicesClick = () => {
    router.push("/services");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-[50vh] py-16 flex items-center justify-center">
        <div className="flex flex-col gap-6 items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight">
            Experience the Technology of the Future
          </h1>

          <p className="max-w-3xl text-base md:text-lg lg:text-xl text-center px-2">
            Discover the latest innovations and explore the possibilities of
            tomorrow&apos;s technology. From AI to blockchain, we bring you
            insights
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <PrimaryButton text="Get Started" />
            <SecondaryButton text="Learn More" onclick={handleLearnMoreClick} />
          </div>
        </div>
      </div>

      <TheFutureIsHere />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
        <div className="flex flex-col gap-4 items-start">
          <SecondaryButton text="Services" onclick={handleServicesClick} />

          <h3 className="text-2xl md:text-3xl">Explore our Services</h3>

          <p className="text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            nostrum accusamus atque, rem minima repudiandae, magni labore
            perspiciatis porro similique reprehenderit modi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 py-6">
          <div className="bg-primary text-white p-6 flex flex-col justify-between gap-6 rounded-xl transition-transform duration-200 h-full">
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Molestiae, voluptas beatae? Eius id molestias ipsam pariatur magni
              maiores!
            </p>

            <TfiArrowTopRight className="text-2xl mt-2 self-end" />
          </div>

          <div className="bg-soft-gray text-primary p-6 flex flex-col justify-between gap-6 rounded-xl transition-transform duration-200 h-full">
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              iusto obcaecati quod consequuntur corrupti inventore voluptatem
              magnam consequatur animi quo.
            </p>
            <TfiArrowTopRight className="text-2xl mt-2 self-end" />
          </div>
        </div>
      </div>
    </div>
  );
}

// **Tailwind breakpoint reminder:**
// sm  = 640px+   (large phones, small tablets)
// md  = 768px+   (tablets)
// lg  = 1024px+  (laptops)
// xl  = 1280px+  (desktops)
