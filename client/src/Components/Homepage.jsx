import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Homepage() {
  return (
    <div>
      <div className="container">
        <h1 className="heading text-white font-belle text-[5vh] my-10 py-5">
          Seeing the weather of the whole world with{" "}
          <span className="text-[6vh] font-aldrich text-orange-500">
            Weatherly!
          </span>
        </h1>
        <div className="searchFilter container flex flex-col md:flex-row md:space-x-[25%] mt-2 mb-20 md:mt-3 md:mb-24 md:mx-[10%]">
          <div class="searchBox shadow-lg shadow-black mx-[18%] md:mx-0 mb-8 md:mb-0">
            <input
              className="searchInput mr-5 "
              type="text"
              name=""
              placeholder="Search something"
            />
            <button className="searchButton" href="#">
              <FaSearch className="text-[25px] bg-transparent ml-3" />
            </button>
          </div>
          <div className="filter relative flex flex-col md:flex-row shadow-lg shadow-black md:px-20 mx-[8%] md:mr-[10%]">
            <span className="font-bold font-chakra text-[2.5vh] md:text-[3.5vh] py-3 px-3">
              Filters
            </span>
            <select
              className="border border-gray-400 rounded-lg my-2 mx-3"
              name=""
              id="one"
            >
              <option value="">Coldest</option>
              <option value="">Hottest</option>
            </select>
            <select
              className="border border-gray-400 rounded-lg my-2 mx-3"
              name=""
              id="two"
            >
              <option value="">10℃ - 20℃</option>
              <option value=""></option>
            </select>
            <select
              className="border border-gray-400 rounded-lg my-2 mx-3"
              name=""
              id="three"
            >
              <option value="">Rainy</option>
              <option value="">Sunny</option>
            </select>
          </div>
        </div>
        <div className="cards flex flex-col md:flex-row">
          <div className="relative card box-border shadow-lg shadow-gray-800 py-16 md:py-20 px-[4%] md:px-[6%] mb-16 mx-[20%] md:mx-[10%]">
            <div>
              <img
                className="absolute pb-32 ml-32 w-36 bg-transparent"
                src="/images/sunwithcloud-bgr.png"
                alt=""
              />
            </div>
            <h1>Tehran 35℃</h1>
            <p>wind speed : 11km</p>
            <p>Tuesday : 1952</p>
            <p>Cloudy</p>
          </div>
          <div className="card box-border shadow-lg shadow-gray-800 py-16 md:py-20 px-[4%] md:px-[6%] mb-16 mx-[20%] md:mx-[0%]">
            <h1>Tehran 35℃</h1>
            <p>wind speed : 11km</p>
            <p>Tuesday : 1952</p>
            <p>Cloudy</p>
          </div>
          <div className="card box-border shadow-lg shadow-gray-800 py-16 md:py-20 px-[4%] md:px-[6%] mb-16 mx-[20%] md:mx-[10%]">
            <h1>Tehran 35℃</h1>
            <p>wind speed : 11km</p>
            <p>Tuesday : 1952</p>
            <p>Cloudy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
