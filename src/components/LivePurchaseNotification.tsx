import { useState, useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";

const customerNames = [
    "سارة من الكويت",
    "نورة من حولي",
    "هند من السالمية",
    "ريم من الجهراء",
    "دانة من الفروانية",
    "لولوة من العاصمة",
    "مريم من الأحمدي",
    "فاطمة من مبارك الكبير",
    "عائشة من الفحيحيل",
    "منى من صباح السالم",
    "نوف من العقيلة",
    "جود من الرقعي",
    "شيماء من الصليبية",
    "أمل من الرميثية",
    "لمياء من بيان",
    "رنا من مشرف",
    "سلمى من القادسية",
    "هيا من الشامية",
    "وعد من الدسمة",
    "غدير من كيفان",
];

const products = [
    "مجموعة جايدن الكاملة",
    "عطر كاليدا",
];

const timeAgo = [
    "الآن",
    "منذ دقيقة",
    "منذ دقيقتين",
    "منذ 3 دقائق",
    "منذ 5 دقائق",
];

const LivePurchaseNotification = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [notification, setNotification] = useState({
        name: "",
        product: "",
        time: "",
    });

    useEffect(() => {
        const showNotification = () => {
            const randomName = customerNames[Math.floor(Math.random() * customerNames.length)];
            const randomProduct = products[Math.floor(Math.random() * products.length)];
            const randomTime = timeAgo[Math.floor(Math.random() * timeAgo.length)];

            setNotification({
                name: randomName,
                product: randomProduct,
                time: randomTime,
            });
            setIsVisible(true);

            // Hide after 3 seconds
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        };

        // Show first notification after 3 seconds
        const initialTimeout = setTimeout(showNotification, 3000);

        // Show notifications every 8-12 seconds
        const interval = setInterval(() => {
            const randomDelay = Math.floor(Math.random() * 4000) + 8000;
            setTimeout(showNotification, randomDelay);
        }, 10000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-24 left-4 z-40 animate-in slide-in-from-left-full duration-500">
            <div className="bg-white rounded-xl shadow-xl border border-gold/20 p-3 sm:p-4 max-w-[280px] sm:max-w-xs relative">
                {/* Close Button */}
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-1 right-1 w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                    aria-label="إغلاق"
                >
                    <X className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center flex-shrink-0">
                        <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                            <span className="font-bold text-gold">{notification.name}</span>
                            {" "}اشترت{" "}
                            <span className="font-bold">{notification.product}</span>
                        </p>
                        <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                            {notification.time}
                        </p>
                    </div>
                </div>

                {/* Verified Badge */}
                <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[10px] text-green-600 font-medium">طلب مؤكد ✓</span>
                </div>
            </div>
        </div>
    );
};

export default LivePurchaseNotification;
