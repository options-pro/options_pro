import React from "react";
import { links } from "../data/dummyLinks";
import { NavLink } from "react-router-dom";

const Features = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <p className="text-5xl mb-5 text-blue-900 dark:text-white font-bold">
          Features
        </p>
      </div>
      <div
        className="flex flex-col items-center justify-center gap-5
      xs:flex-row xs:flex-wrap xs:gap-3 sm:grid sm:grid-cols-3 lg:grid-cols-2 sm:gap-y-6 sm:gap-x-10 lg:gap-x-24 xl:ml-14"
      >
        {links.map((link, index) => (
          <NavLink
            to={`/page${index + 1}`}
            key={link.name}
            style={{ textDecoration: "none" }}
          >
            <div
              key={link.name}
              className="bg-white w-[160px] xl:w-[200px] xl:h-[150px] p-5 rounded-3xl shadow-xl h-[120px] xl:px-8 dark:bg-secondary-dark-bg"
            >
              <img
                src={require(`../images/${link.icon}`)}
                alt={link.name}
                width="40px"
                height="40px"
                className="mb-2"
              />
              <span className="capitalize xl:text-lg font-semibold dark:text-white text-black">
                {link.name}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Features;

/**
 * <div className="flex flex-col gap-3 justify-center">
      <p className="text-5xl text-blue-900 dark:text-white font-bold">
        Features
      </p>
      <div className="px-20 mt-20">
        <div className="grid grid-cols-2 gap-x-24 gap-y-10">
          {links.map((link, index) => (
            <NavLink
              to={`/page${index + 1}`}
              key={link.name}
              style={{ textDecoration: "none" }}
            >
              <div
                key={link.name}
                className="bg-white w-[160px] p-5 rounded-3xl shadow-xl h-[120px] dark:bg-secondary-dark-bg"
              >
                <img
                  src={require(`../images/${link.icon}`)}
                  alt={link.name}
                  width="40px"
                  height="40px"
                  className="mb-2"
                />
                <span className="capitalize font-semibold dark:text-white">
                  {link.name}
                </span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
 */
