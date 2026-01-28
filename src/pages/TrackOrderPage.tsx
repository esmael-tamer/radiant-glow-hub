import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Package, Truck, CheckCircle, Clock, Phone } from "lucide-react";

const TrackOrderPage = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [searched, setSearched] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (phoneNumber.trim()) {
            setSearched(true);
        }
    };

    return (
        <div className="min-h-screen bg-cream" dir="rtl">
            {/* Header */}
            <div className="bg-primary text-primary-foreground py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">تتبع طلبك</h1>
                    <p className="text-lg text-primary-foreground/80">
                        أدخلي رقم هاتفك لمعرفة حالة طلبك
                    </p>
                </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 py-12">
                {/* Search Form */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                    <form onSubmit={handleSearch} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                رقم الهاتف المستخدم في الطلب
                            </label>
                            <div className="flex gap-3">
                                <Input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="مثال: 98882565"
                                    className="flex-1 text-right"
                                    dir="ltr"
                                />
                                <Button type="submit" className="bg-gold hover:bg-gold/90 text-primary">
                                    <Search className="w-4 h-4 ml-2" />
                                    بحث
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Search Result */}
                {searched && (
                    <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                        <div className="text-center py-8">
                            <Package className="w-16 h-16 text-gold mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-primary mb-2">
                                لم نجد طلبات مرتبطة بهذا الرقم
                            </h3>
                            <p className="text-gray-600 mb-6">
                                إذا قمتِ بالطلب مؤخراً، يرجى الانتظار قليلاً حتى يتم تسجيل الطلب في النظام.
                            </p>
                            <div className="bg-cream rounded-xl p-4">
                                <p className="text-sm text-gray-700 mb-2">
                                    للاستفسار عن طلبك، تواصلي معنا مباشرة:
                                </p>
                                <a
                                    href="https://wa.me/96598882565"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline"
                                >
                                    <Phone className="w-4 h-4" />
                                    واتساب: 96598882565+
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* Order Status Guide */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                    <h2 className="text-xl font-bold text-primary mb-6">مراحل الطلب</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Clock className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary">تم استلام الطلب</h3>
                                <p className="text-sm text-gray-600">تم استلام طلبك وجاري معالجته</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Package className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary">جاري التجهيز</h3>
                                <p className="text-sm text-gray-600">يتم تجهيز طلبك وتغليفه</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Truck className="w-5 h-5 text-gold" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary">في الطريق</h3>
                                <p className="text-sm text-gray-600">طلبك في طريقه إليك</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary">تم التوصيل</h3>
                                <p className="text-sm text-gray-600">تم توصيل طلبك بنجاح</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Support */}
                <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-6 shadow-lg mb-8">
                    <h2 className="text-xl font-bold mb-4">تحتاجين مساعدة؟</h2>
                    <p className="mb-4">
                        فريق خدمة العملاء متاح لمساعدتك في أي استفسار عن طلبك
                    </p>
                    <a
                        href="https://wa.me/96598882565"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        تواصل معنا عبر واتساب
                    </a>
                </div>

                {/* Back Button */}
                <div className="text-center">
                    <Link to="/">
                        <Button className="bg-gold hover:bg-gold/90 text-primary font-bold px-8 py-3">
                            <ArrowRight className="w-4 h-4 ml-2" />
                            العودة للرئيسية
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrackOrderPage;
