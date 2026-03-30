import React from "react";
import { Search, ChevronDown, SlidersHorizontal, X } from "lucide-react";
import { properties } from "@/app/assets/properties";

// type SaleType = "For Sale" | "For Rent" | "";

type FiltersProps = {
  products: any[];
  saleType: string;
  setSaleType: (saleType: string) => void;
  saleDropdown: boolean;
  setSaleDropdown: (saleDropdown: boolean) => void;
  isMobileFiltersOpen: boolean;
  setIsMobileFiltersOpen: (isMobileFiltersOpen: boolean) => void;
};

const Filters = ({
  products,
  saleType,
  setSaleType,
  saleDropdown,
  setSaleDropdown,
  isMobileFiltersOpen,
  setIsMobileFiltersOpen,
}: FiltersProps) => {
  // const [saleDropdown, setSaleDropdown] = useState(false);
  // const [saleType, setSaleType] = useState("");

  const uniqueLocations = Array.from(
    new Set(products.map((product) => product.location)),
  );
  return (
    <>
      <div className="lg:flex gap-10 items-center hidden">
        <div className="flex justify-between gap-3 pb-3 border-b-2 px-5">
          <input
            type="text"
            placeholder="Enter address"
            className="outline-none focus:outline-none"
          />
          <Search className="text-gray-500 cursor-pointer" size={18} />
        </div>

        {/* FILTER GROUP */}
        <div>
          <select name="location" id="location">
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="relative w-[150px]">
          <div
            onClick={() => setSaleDropdown(!saleDropdown)}
            className="border px-3 py-2 flex justify-between items-center gap-5 cursor-pointer w-full"
          >
            <span>{saleType || "For Sale"}</span>
            <ChevronDown size={18} />
          </div>
          {saleDropdown && (
            <div className="absolute top-full left-0 w-full border mt-2 p-2 bg-white">
              <div
                onClick={() => setSaleType("All")}
                className="flex gap-2 items-center"
              >
                <input
                  type="checkbox"
                  name="saleType"
                  value="All"
                  onChange={(e) => setSaleType(e.target.value)}
                  checked={saleType === "All"}
                />
                <label htmlFor="all">All</label>
              </div>
              <div
                onClick={() => setSaleType("For Sale")}
                className="flex gap-2 items-center"
              >
                <input
                  type="checkbox"
                  name="saleType"
                  value="For Sale"
                  onChange={(e) => setSaleType(e.target.value)}
                  checked={saleType === "For Sale"}
                />
                <label htmlFor="for-sale">For Sale</label>
              </div>
              <div
                onClick={() => setSaleType("For Rent")}
                className="flex gap-2 items-center"
              >
                <input
                  type="checkbox"
                  name="saleType"
                  value="For Rent"
                  onChange={(e) => setSaleType(e.target.value)}
                  checked={saleType === "For Rent"}
                />
                <label htmlFor="for-rent">For Rent</label>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* .......... MOBILE ..................... */}
      <div className="md:hidden w-full">
        <div
          onClick={() => setIsMobileFiltersOpen(true)}
          className="w-full border px-2 py-3 flex justify-between items-center"
        >
          <p>Filters</p>
          <SlidersHorizontal size={20} />
        </div>

        {/* Mobile filter */}
        {isMobileFiltersOpen && (
          <div className="fixed top-0 right-0 w-full h-screen pointer-events-auto bg-white z-50">
            <div>
              <X
                onClick={() => setIsMobileFiltersOpen(false)}
                className="absolute top-4 right-4"
              />
            </div>

            <div className="flex flex-col h-full gap-10 justify-center items-center">
              <div className="flex justify-between gap-3 pb-3 border-b-2 px-5">
                <input
                  type="text"
                  placeholder="Enter address"
                  className="outline-none focus:outline-none"
                />
                <Search className="text-gray-500 cursor-pointer" size={18} />
              </div>

              <div>
                <select name="location" id="location">
                  {uniqueLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filters;
