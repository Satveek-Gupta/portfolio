// components/SponsorCard.tsx
import { FaHeart } from "react-icons/fa";

const SponsorCard = () => {
  return (
    <div className="w-full max-w-md mx-auto border border-slate-700 rounded-xl shadow-sm p-6 text-center">
      <FaHeart className="text-pink-500 text-3xl mx-auto mb-3" />
      <h2 className="text-xl font-semibold text-white mb-2">
        Support My Work 💖
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        If you like my projects and want to support my open-source
        contributions, consider sponsoring me on GitHub. Your support helps me
        keep building!
      </p>
      <a
        href="https://github.com/sponsors/Satveek-Gupta"
        target="_blank"
        rel="noopener noreferrer"
        className="px-5 py-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-md shadow-md transition"
      >
        Become a Sponsor
      </a>
    </div>
  );
};

export default SponsorCard;
