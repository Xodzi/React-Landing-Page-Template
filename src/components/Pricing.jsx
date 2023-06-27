import React from 'react';

import config from "../data/data.json";

const Pricing = () => {
  const { pricing } = config;
  const { items, title } = pricing;
  const [firstPlan, secondPlan, thirdplan] = items;

  return (
    
    <div className="text-center test" id="pricing" style={{marginBottom: "15px"}}>
      <div className={``}>
        <h1
          className={`my-2 font-bold text-center text-primary`}
        >
          {title}
        </h1>
        <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center price`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-800 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {firstPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                <li className={`w-full pt-6 text-3xl text-gray-800 font-bold text-center`}>{firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span></li>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b text-2xl py-4`}
                    key={`${firstPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            > 
            </div>
          </div>
          <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-800 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {secondPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
              <li className={`w-full pt-6 text-3xl text-gray-800 font-bold text-center`}>{secondPlan?.price}
                <span className={`text-base`}> {secondPlan?.priceDetails}</span></li>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b text-2xl py-4`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col sm:flex-row justify-center price`}
        >
          <div
            className={`flex flex-col w-5/6 lg:w-2/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-1`}
          >
            <div
              className={`flex-1 bg-background text-gray-800 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <ul className={`w-full text-center text-sm`}>
                {thirdplan?.features.map((feature) => (
                  <li
                    className={`border-b text-2xl py-4`}
                    key={`${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
                <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
