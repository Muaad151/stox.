import Link from "next/link"

function HeroSection() {
  return (
    <div className="w-full  bg-white">
      <div className="flex flex-col sm:flex-row gap-12 items-start sm:items-center justify-center  mx-auto max-w-5xl pb-24 pt-12 px-8">
        <div className="textarea sm:w-6/12">
          <h4 className="text-sm text-sky-500 font-semibold ">
            Smart Investation
          </h4>
          <h1 className="text-3xl font-semibold  leading-snug">
            Your Guide to Stock Success Through
            <span className="text-sky-500"> Strategic Selection</span>
          </h1>
          <p className="text-gray-500 text-xs mt-4">
            Optimize your investment potential in the dynamic world of the
            capital markets with the convenience and multitude of features
            offered by Stox.
          </p>
          <button className="bg-sky-500 text-white rounded-md px-5 py-3 mt-6 text-sm hover:scale-105 hover:bg-sky-500 transition-all ease-out">
            <Link href="/dashboard" className="">Get Started</Link>
          </button>
        </div>
        <div className="">
          <img src="/stonks.png" alt="stock Image" className="w-100 h-100 " />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
