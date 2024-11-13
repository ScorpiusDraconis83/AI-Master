import { FC } from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection: FC = () => {
  return (
    <div className="mt-6 flex flex-col items-center lg:mt-20">
      <h1 className="text-center text-4xl tracking-wide sm:text-6xl lg:text-7xl">
        Unlock Your Potential with AI
        <span className="bg-gradient-to-r from-purple-500 to-pink-800 bg-clip-text text-transparent">
          {' '}
          Development Tools
        </span>
      </h1>
      <p className="mt-10 max-w-4xl text-center text-lg text-neutral-500">
        Supercharge your development projects with our AI-driven tools and
        resources. Whether you're a seasoned developer or just starting out, our
        platform provides everything you need to bring your innovative ideas to
        life.
      </p>
      <div className="my-10 flex justify-center">
        <a
          href="#"
          className="mx-3 rounded-md bg-gradient-to-r from-purple-500 to-purple-800 px-4 py-3">
          Start for free
        </a>
        <a href="#" className="mx-3 rounded-md border px-4 py-3">
          Documentation
        </a>
      </div>
      <div className="mt-10 flex justify-center">
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 rounded-lg border border-purple-700 shadow-purple-400">
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="mx-2 my-4 w-1/2 rounded-lg border border-purple-700 shadow-purple-400">
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
