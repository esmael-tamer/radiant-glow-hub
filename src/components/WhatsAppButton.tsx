import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "96598882565";

const WhatsAppButton = () => {
    const handleClick = () => {
        const message = encodeURIComponent(
            `ابي اطلب عرض جايدن 🌟`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    };

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-[100px] sm:bottom-[110px] right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group min-w-[48px] min-h-[48px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
            aria-label="تواصل معنا عبر واتساب"
        >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />

            {/* Tooltip - hidden on mobile */}
            <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                تواصلي معنا 💬
            </span>

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></span>
        </button>
    );
};

export default WhatsAppButton;
