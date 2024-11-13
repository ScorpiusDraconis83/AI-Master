import { FC } from 'react';
import { features } from '../constants';

const FeatureSection: FC = () => {
  return (
    <div className="relative mt-20 min-h-[800px] border-b border-neutral-800">
      <div className="text-center">
        <span className="h-6 rounded-full bg-neutral-900 px-2 py-1 text-sm font-medium uppercase text-purple-500">
          Feature
        </span>
        <h2 className="mt-10 text-3xl tracking-wide sm:text-5xl lg:mt-20 lg:text-6xl">
          Easily build
          <span className="bg-gradient-to-r from-purple-500 to-purple-800 bg-clip-text text-transparent">
            {' '}
            your code
          </span>
        </h2>
      </div>
      <div className="mt-10 flex flex-wrap lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="mx-6 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 p-2 text-purple-700">
                {feature.icon}
              </div>
              <div>
                <h5 className="mb-6 mt-1 text-xl">{feature.text}</h5>
                <p className="text-md mb-20 p-2 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
