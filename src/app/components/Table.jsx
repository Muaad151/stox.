import React from "react"

const Table = () => {
  return (
    <div>
      <div className=" mx-auto">
        <div className="">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-1 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider">
                      Marketcup
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider">
                      Balance
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider">
                      Price
                    </th>

                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider">
                      7D
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider">
                      30D
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider">
                      1Y
                    </th>
                    <th className="px-5 py-6 border-b-2 border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-400 capitalize tracking-wider">
                      Today
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* .map() content  */}
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="/google.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-600 whitespace-no-wrap text-ba">
                            Google
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">20B</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">$5,777</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative text-gray-600">0.0038</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-green-500">+5.1%</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-red-500">-5.23%</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-gray-600">+1M</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-red-500">+1.23%</span>
                    </td>
                  </tr>
                  {/* --------------------------------   */}

                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="/google.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-600 whitespace-no-wrap text-ba">
                            Google
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">20B</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">$5,777</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative text-gray-600">0.0038</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-green-500">+5.1%</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-red-500">-5.23%</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-gray-600">+1M</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-red-500">+1.23%</span>
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="/google.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-600 whitespace-no-wrap text-ba">
                            Google
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">20B</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">$5,777</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative text-gray-600">0.0038</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-green-500">+5.1%</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-red-500">-5.23%</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-gray-600">+1M</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-red-500">+1.23%</span>
                    </td>
                  </tr>


                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                          <img
                            className="w-full h-full rounded-full"
                            src="/google.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-gray-600 whitespace-no-wrap text-ba">
                            Google
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">20B</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-600 whitespace-no-wrap">$5,777</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative text-gray-600">0.0038</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-green-500">+5.1%</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-red-500">-5.23%</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-gray-600">+1M</span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                      <span className="text-red-500">+1.23%</span>
                    </td>
                  </tr>


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
