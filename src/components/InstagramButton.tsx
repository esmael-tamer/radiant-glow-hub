import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/aromamore.kw?igshid=NGVhN2U2NjQ0Yg%3D%3D";

const InstagramButton = () => {
    const handleClick = () => {
        window.open(INSTAGRAM_URL, "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-[160px] sm:bottom-[170px] right-4 sm:right-6 z-50 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group min-w-[48px] min-h-[48px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2"
            aria-label="تابعنا على انستقرام"
        >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />

            {/* Tooltip - hidden on mobile */}
            <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                تابعينا على انستقرام 📸
            </span>
        </button>
    );
};

export default InstagramButton;
