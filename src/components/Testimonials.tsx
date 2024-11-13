import { FC } from 'react';
import { testimonials } from '../constants';

const Testimonials: FC = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="my-10 text-center text-3xl sm:text-5xl lg:my-20 lg:text-6xl">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full px-4 py-2 sm:w-1/2 lg:w-1/3">
            <div className="bg-neutral text-md rounded-md border border-neutral-800 p-6 font-thin">
              <p>{testimonial.text}</p>
              <div className="mt-8 flex items-start">
                <img
                  className="mr-6 h-12 w-12 rounded-full border bg-neutral-300"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
