function FeatureSection() {
  return (
    <div className="w-full bg-white">
      <div className=" max-w-4xl mx-auto py-20">
        <h1 className="text-sm text-sky-500 font-semibold text-center mb-6">
          OUR FEATURES
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-start  flex-wrap gap-4 sm:gap-2 items-center justify-center">
          <div className="sm:w-1/3 w-72 px-2 py-2 shadow rounded-md bg-gray-100 h-68  sm:h-auto sm:bg-transparent sm:shadow-none">
            <h2 className="text-lg text-black font-semibold mb-6">
              Receive market update quickly everytime
            </h2>
            <p className="text-left text-xs text-gray-500  text-balance">
              Equipped with comprehensive analysis tools and Artificial
              Intelligent, it makes it easier and gives you a profitable
              experience in the form of market updates quickly everytime, so it
              is not too late to make the best investment decisions.
            </p>
          </div>

          <div className="sm:w-1/3 w-72 px-2 py-2 shadow rounded-md bg-gray-100 h-68  sm:h-auto sm:bg-transparent sm:shadow-none">
            <h2 className="text-lg text-black font-semibold mb-6">
              Easy Way to Invest and Get Profit{" "}
            </h2>
            <p className="text-left text-xs text-gray-500 text-balance">
              Using the Tradiant Application is an easy way to invest and
              benefit, equipped with comprehensive analysis tools and Artificial
              Intelligent (AI) that helps automation in monitoring and
              transactions.
            </p>
          </div>

          <div className="sm:w-1/3 w-72 px-2 py-2 shadow rounded-md bg-gray-100 h-68  sm:h-auto sm:bg-transparent sm:shadow-none">
            <h2 className="text-lg text-black font-semibold mb-6">
              Invest based on the expert analysis and volatilities
            </h2>
            <p className="text-left text-xs text-gray-500 text-balance">
              Using the Tradiant Application is an easy way to invest and
              benefit, equipped with comprehensive analysis tools and Artificial
              Intelligent (AI) that helps automation in monitoring and
              transactions.
            </p>
          </div>

          <div className="sm:w-1/3 w-72 px-2 py-2 shadow rounded-md bg-gray-100 h-68  sm:h-auto sm:bg-transparent sm:shadow-none">
            <h2 className="text-lg text-black font-semibold mb-6">
              Calculations based on the volume of transactions
            </h2>
            <p className="text-left text-xs text-gray-500 text-balance">
              Using the Tradiant Application is an easy way to invest and
              benefit, equipped with comprehensive analysis tools and Artificial
              Intelligent (AI) that helps automation in monitoring and
              transactions.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FeatureSection
