import React from "react"

const InfiniteScroll = () => {
  const images = [
    "/logos/logo1.png",
    "/logos/logo2.png",
    "/logos/logo3.png",
    "/logos/logo4.png",
    "/logos/logo5.png",
    "/logos/logo6.png",
  ]

  const finalImages = [...images,...images]

  return (
    <div className="bg-gray-200 w-full">
      <div className="max-w-7xl mx-auto my-8">
        <h1 className="text-sm text-zinc-600 font-semibold text-center mb-6">
          Invest in their stock and be part of the business
        </h1>
        <div className="max-w-7xl mx-auto overflow-hidden faded-mask ">
          <ul className="flex py-2 gap-6 infinite_scroll w-fi">
            {finalImages.map((image, index) => (
              <li key={index}>
                <img
                  src={image}
                  alt="logo"
                  className="w-72 h-w-72 object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InfiniteScroll
