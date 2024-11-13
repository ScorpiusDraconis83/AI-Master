import { FC } from 'react';
import { communityLinks, platformLinks, resourcesLinks } from '../constants';

const Footer: FC = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        <div className="flex flex-col items-center justify-between">
          <ul className="space-y-2">
            <h3 className="text-md mb-4 text-left font-semibold">Resources</h3>
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between">
          <ul className="space-y-2">
            <h3 className="text-md mb-4 font-semibold">Platform</h3>
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-between">
          <ul className="space-y-2">
            <h3 className="text-md mb-4 font-semibold">Community</h3>
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
