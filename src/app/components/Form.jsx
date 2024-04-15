"use client"
import { useState } from "react"

const Form = () => {
  const [formDetails, setFormDetails] = useState({
    symbol: "",
    price: { x: 0, y: Infinity, comparison: "lt" },
    volume: 0,
    dollarVolume: 0,
    gap: { x: 0, y: Infinity, comparison: "lt" },
    change: { x: 0, y: Infinity, comparison: "lt" },
    range: { x: 0, y: Infinity, comparison: "lt" },
    marketCap: { x: 0, y: Infinity, comparison: "lt" },
  })

  return (
    <div className="rounded-md text-xs text-semibold text-gray-500 shadow-lg ring-1 ring-gray-100  bg-white px-2 py-2 w-full h-full">
      <form action="" className="h-full">
        <div className="flex flex-col sm:flex-wrap gap-4 sm:h-56 pt-4  content-evenly h-full ">
          <div className="flex text-sm gap-2 sm:justify-between">
            <label
              htmlFor="symbol"
              className="text-xs text-violet-950 font-semibold self-center"
            >
              Symbol
            </label>

            <input
              value={formDetails.symbol}
              type="number"
              required
              min={0}
              name="symbol"
              id="symbol"
              onChange={(e) =>
                setFormDetails({ ...formDetails, symbol: e.target.value })
              }
              placeholder="$$$"
              className="number-input w-48 text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
            />
          </div>

    

          <div className="flex text-sm gap-2 sm:justify-between">
            <label
              htmlFor="volume"
              className="text-xs text-violet-950 font-semibold self-center"
            >
              Volume
            </label>

            <input
              value={formDetails.volume}
              type="number"
              required
              min={0}
              name="volume"
              id="volume"
              className="number-input w-48 text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none"
              onChange={(e) =>
                setFormDetails({ ...formDetails, volume: e.target.value })
              }
            />
          </div>

          <div className="flex text-sm gap-2 sm:justify-between">
            <label
              htmlFor="dollarVolume"
              className="text-xs text-violet-950 font-semibold self-center"
            >
              $ Volume
            </label>
            <input
              value={formDetails.dollarVolume}
              type="number"
              required
              min={0}
              name="dollarVolume"
              id="dollarVolume"
              onChange={(e) =>
                setFormDetails({ ...formDetails, dollarVolume: e.target.value })
              }
              className="number-input w-48 text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
            />
          </div>

          <div className="flex text-sm gap-2 sm:justify-between">
            <label
              htmlFor="Price"
              className="text-xs text-violet-950 font-semibold self-center"
            >
              Price
            </label>
            <div className="flex gap-1">
              {formDetails.price.comparison === "between" ? (
                <>
                  <input
                    value={formDetails.price.x}
                    type="number"
                    required
                    min={0}
                    name="Price"
                    id="Price"
                    placeholder="&ge;"
                    className="number-input w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none text-left"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        price: { ...formDetails.price, x: e.target.value },
                      })
                    }
                  />
                  <input
                    value={formDetails.price.y}
                    type="number"
                    required
                    min={0}
                    name="Price1"
                    id="Price1"
                    placeholder="&le;"
                    className="number-input w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none text-left"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        price: { ...formDetails.price, y: e.target.value },
                      })
                    }
                  />
                </>
              ) : (
                <input
                  
                  type="number"
                  required
                  min={0}
                  name="Price1"
                  id="Price1"
                  className="number-input w-40 text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
                  onChange={(e) => {
                    if (formDetails.price.comparison === "lt")
                      setFormDetails({
                        ...formDetails,
                        price: { ...formDetails.price, y: e.target.value },
                      })
                    else
                      setFormDetails({
                        ...formDetails,
                        price: { ...formDetails.price, x: e.target.value },
                      })
                  }}
                />
              )}
              <div className="relative">
                <select
                  className="appearance-none bg-white text-xs font-semibold text-violet-950 px-1 py-1 rounded-full shadow leading-tight focus:outline-none text-center"
                  name="relation"
                  id="relation"
                  value={formDetails.price.comparison}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      price: {
                        ...formDetails.price,
                        comparison: e.target.value,
                      },
                    })
                  }
                >
                  <option
                    value="lt"
                    className="font-semibold text-center"
                  >
                    &le;
                  </option>
                  <option value="gt" className="font-semibold text-center">
                    {" "}
                    &ge;
                  </option>
                  <option value="between" className="font-semibold text-center">
                    {" "}
                    &le; | &ge;{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex text-sm gap-2 sm:justify-between">
            <label
              htmlFor="gap"
              className="text-xs text-violet-950 font-semibold self-center"
            >
              gap%{" "}
            </label>
            <div className="flex gap-1">
              {formDetails.gap.comparison === "between" ? (
                <>
                  <input
                    
                    type="number"
                    required
                    min={0}
                    name="gap"
                    id="gap"
                    placeholder="&ge;"
                    className="number-input  w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        gap: { ...formDetails.gap, x: e.target.value },
                      })
                    }
                  />
                  <input
                    
                    type="number"
                    required
                    min={0}
                    name="gap1"
                    id="gap1"
                    placeholder="&le;"
                    className="number-input  w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        gap: { ...formDetails.gap, y: e.target.value },
                      })
                    }
                  />
                </>
              ) : (
                <input
                  
                  type="number"
                  required
                  min={0}
                  name="gap"
                  id="gap"
                  className="number-input w-40 text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
                  onChange={(e) => {
                    if (formDetails.gap.comparison === "lt")
                      setFormDetails({
                        ...formDetails,
                        gap: { ...formDetails.gap, y: e.target.value },
                      })
                    else
                      setFormDetails({
                        ...formDetails,
                        gap: { ...formDetails.gap, x: e.target.value },
                      })
                  }}
                />
              )}
              <div className="relative">
                <select
                  value={formDetails.gap.comparison}
                  className="appearance-none bg-white text-xs font-semibold text-violet-950 px-1 py-1 rounded-full shadow leading-tight focus:outline-none  text-center"
                  name="relation"
                  id="relation"
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      gap: { ...formDetails.gap, comparison: e.target.value },
                    })
                  }
                >
                  <option
                    value="lt"
                    className="font-semibold text-center"
                  >
                    &le;
                  </option>
                  <option value="gt" className="font-semibold text-center">
                    {" "}
                    &ge;
                  </option>
                  <option value="between" className="font-semibold text-center">
                    {" "}
                    &le; | &ge;{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex text-sm gap-2 sm:justify-between">
            <label
              htmlFor="change"
              className="text-xs text-violet-950 font-semibold self-center"
            >
              change%{" "}
            </label>
            <div className="flex gap-1">
              {formDetails.change.comparison === "between" ? (
                <>
                  <input
                    
                    type="number"
                    required
                    min={0}
                    name="change"
                    id="change"
                    placeholder="&ge;"
                    className="number-input w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none text-left"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        change: { ...formDetails.change, x: e.target.value },
                      })
                    }
                  />
                  <input
                    
                    type="number"
                    required
                    min={0}
                    name="change1"
                    id="change1"
                    placeholder="&le;"
                    className="number-input w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none text-left"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        change: { ...formDetails.change, y: e.target.value },
                      })
                    }
                  />
                </>
              ) : (
                <input
                  
                  type="number"
                  required
                  min={0}
                  name="change"
                  id="change"
                  className="number-input w-40 text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
                  onChange={(e) => {
                    if (formDetails.change.comparison === "lt")
                      setFormDetails({
                        ...formDetails,
                        change: { ...formDetails.change, y: e.target.value },
                      })
                    else
                      setFormDetails({
                        ...formDetails,
                        change: { ...formDetails.change, x: e.target.value },
                      })
                  }}
                />
              )}
              <div className="relative">
                <select
                  value={formDetails.change.comparison}
                  className="appearance-none bg-white text-xs font-semibold text-violet-950 px-1 py-1 rounded-full shadow leading-tight focus:outline-none  text-center"
                  name="relation"
                  id="relation"
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      change: {
                        ...formDetails.change,
                        comparison: e.target.value,
                      },
                    })
                  }
                >
                  <option
                    value="lt"
                    className="font-semibold text-center"
                    
                  >
                    &le;
                  </option>
                  <option value="gt" className="font-semibold text-center">
                    {" "}
                    &ge;
                  </option>
                  <option value="between" className="font-semibold text-center">
                    {" "}
                    &le; | &ge;{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex text-sm gap-2 sm:justify-between">
            <label
              htmlFor="marketCap"
              className="text-xs text-violet-950 font-semibold self-center"
            >
              range%{" "}
            </label>
            <div className="flex gap-1">
              {formDetails.range.comparison === "between" ? (
                <>
                  <input
                    
                    type="number"
                    required
                    min={0}
                    name="range"
                    id="range"
                    placeholder="&ge;"
                    className="w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none text-left"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        range: { ...formDetails.range, x: e.target.value },
                      })
                    }
                  />
                  <input
                    
                    type="number"
                    required
                    min={0}
                    name="range1"
                    id="range1"
                    placeholder="&le;"
                    className="number-input w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none text-left"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        range: { ...formDetails.range, y: e.target.value },
                      })
                    }
                  />
                </>
              ) : (
                <input
                  
                  type="number"
                  required
                  min={0}
                  name="range"
                  id="range"
                  className="number-input w-40 text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
                  onChange={(e) => {
                    if (formDetails.range.comparison === "lt")
                      setFormDetails({
                        ...formDetails,
                        range: { ...formDetails.range, y: e.target.value },
                      })
                    else
                      setFormDetails({
                        ...formDetails,
                        range: { ...formDetails.range, x: e.target.value },
                      })
                  }}
                />
              )}

              <div className="relative">
                <select
                  value={formDetails.range.comparison}
                  className="appearance-none bg-white text-xs font-semibold text-violet-950 px-1 py-1 rounded-full shadow leading-tight focus:outline-none text-center"
                  name="relation"
                  id="relation"
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      range: {
                        ...formDetails.range,
                        comparison: e.target.value,
                      },
                    })
                  }
                >
                  <option
                    value="lt"
                    className="font-semibold text-center"
                  >
                    &le;
                  </option>
                  <option value="gt" className="font-semibold text-center">
                    {" "}
                    &ge;
                  </option>
                  <option value="between" className="font-semibold text-center">
                    {" "}
                    &le; | &ge;{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex text-sm gap-2 sm:justify-between">
            <label
              htmlFor="marketCap"
              className="text-xs text-violet-950 font-semibold self-center"
            >
              Market Cap{" "}
            </label>
            <div className="flex gap-1">
              {formDetails.marketCap.comparison === "between" ? (
                <>
                  <input
                    
                    type="number"
                    required
                    min={0}
                    name="marketCap"
                    id="marketCap"
                    placeholder="&ge;"
                    className="number-input w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none text-left"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        marketCap: {
                          ...formDetails.marketCap,
                          x: e.target.value,
                        },
                      })
                    }
                  />
                  <input
                    
                    type="number"
                    required
                    min={0}
                    name="marketCap1"
                    id="marketCap1"
                    placeholder="&le;"
                    className="number-input w-[5rem] text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none text-left"
                    onChange={(e) =>
                      setFormDetails({
                        ...formDetails,
                        marketCap: {
                          ...formDetails.marketCap,
                          y: e.target.value,
                        },
                      })
                    }
                  />
                </>
              ) : (
                <input
                  
                  type="number"
                  required
                  min={0}
                  name="marketCap"
                  id="marketCap"
                  className="number-input w-40 text-xs text-semibold text-gray-500 shadow-md ring-1 ring-gray-200 rounded-full px-3 py-1 focus:outline-none "
                  onChange={(e) => {
                    if (formDetails.marketCap.comparison === "lt")
                      setFormDetails({
                        ...formDetails,
                        marketCap: {
                          ...formDetails.marketCap,
                          y: e.target.value,
                        },
                      })
                    else
                      setFormDetails({
                        ...formDetails,
                        marketCap: {
                          ...formDetails.marketCap,
                          x: e.target.value,
                        },
                      })
                  }}
                />
              )}

              <div className="relative">
                <select
                  className=" umber-input appearance-none bg-white text-xs font-semibold text-violet-950 px-1 py-1 rounded-full shadow leading-tight focus:outline-none  text-center "
                  name="relation"
                  id="relation"
                  value={formDetails.marketCap.comparison}
                  onChange={(e) =>
                    setFormDetails({
                      ...formDetails,
                      marketCap: {
                        ...formDetails.marketCap,
                        comparison: e.target.value,
                      },
                    })
                  }
                >
                  <option
                    value="lt"
                    className="font-semibold text-center"
                  >
                    &le;
                  </option>
                  <option value="gt" className="font-semibold text-center">
                    {" "}
                    &ge;
                  </option>
                  <option value="between" className="font-semibold text-center">
                    {" "}
                    &le; | &ge;{" "}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>


        <div className="w-full flex justify-end mb-2 pr-2">
          <button
            type="submit"
            className="text-xs bg-[#2196f3] text-white rounded-md px-6 py-1  mb-2 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
