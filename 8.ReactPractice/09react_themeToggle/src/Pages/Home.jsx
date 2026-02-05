import HowItWorks from "../components/home/HowItWorks";
import SmartFeatures from "../components/home/SmartFeatures";
import ScrollIndicator from "../components/ScrollIndicator";
export default function Home() {
  return (
    <>
      <section className="relative h-screen">
        <img
          src="/home_bg.jpg"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20 flex items-center justify-center h-1/2">
          <h1 className="text-white text-7xl font-bold">
            Your journey begins here
          </h1>
        </div>

        <div
          className="
    relative z-20
    mx-auto
    bg-white
    rounded-xl
    shadow-lg
    p-6
    w-[90%] max-w-5xl
    grid grid-cols-4 gap-4
    mt-40
  "
        >
          <div className="flex flex-col">
            <label className="text-sm font-semibold">Where</label>
            <input
              className="border p-2 rounded"
              placeholder="City or destination"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">Pickup</label>
            <input className="border p-2 rounded" placeholder="Date & Time" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold">DropOff</label>
            <input className="border p-2 rounded" placeholder="Date & Time" />
          </div>

          <div className="flex items-end">
            <button className="bg-red-500 text-white p-3 rounded w-full">
              Search
            </button>
          </div>
        </div>
        <ScrollIndicator />
      </section>
      <section className="relative z-20 bg-white">
        <HowItWorks />
      </section>
      <section>
        <SmartFeatures />
      </section>
    </>
  );
}
