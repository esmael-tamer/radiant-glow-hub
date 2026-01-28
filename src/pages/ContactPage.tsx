import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Phone, Mail, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `مرحباً أروما مور! 👋

الاسم: ${formData.name}
رقم الهاتف: ${formData.phone}

الرسالة:
${formData.message}`;

        const whatsappUrl = `https://wa.me/96598882565?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="min-h-screen bg-cream" dir="rtl">
            {/* Header */}
            <div className="bg-primary text-primary-foreground py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">اتصل بنا</h1>
                    <p className="text-lg text-primary-foreground/80">
                        نسعد بتواصلك معنا في أي وقت
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6">معلومات التواصل</h2>

                        <div className="space-y-4 mb-8">
                            <a
                                href="https://wa.me/96598882565"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary">واتساب</h3>
                                    <p className="text-gray-600" dir="ltr">+965 9888 2565</p>
                                </div>
                            </a>

                            <a
                                href="https://instagram.com/aromamore.kw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                    <Instagram className="w-6 h-6 text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary">انستغرام</h3>
                                    <p className="text-gray-600">@aromamore.kw</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md">
                                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary">الموقع</h3>
                                    <p className="text-gray-600">الكويت - توصيل لجميع المناطق</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-md">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary">أوقات العمل</h3>
                                    <p className="text-gray-600">كل يوم من 9 صباحاً - 10 مساءً</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Buttons */}
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/96598882565"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-colors w-full"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                راسلنا على واتساب
                            </a>
                            <a
                                href="https://instagram.com/aromamore.kw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 text-white font-bold py-4 px-6 rounded-xl transition-opacity w-full"
                            >
                                <Instagram className="w-5 h-5" />
                                تابعنا على انستغرام
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-6">أرسل رسالتك</h2>
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        الاسم
                                    </label>
                                    <Input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="اسمك الكريم"
                                        required
                                        className="text-right"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        رقم الهاتف
                                    </label>
                                    <Input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="مثال: 98882565"
                                        required
                                        className="text-right"
                                        dir="ltr"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        رسالتك
                                    </label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="اكتبي رسالتك هنا..."
                                        required
                                        rows={5}
                                        className="text-right resize-none"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-gold hover:bg-gold/90 text-primary font-bold py-3"
                                >
                                    <MessageCircle className="w-4 h-4 ml-2" />
                                    إرسال عبر واتساب
                                </Button>
                            </form>
                        </div>

                        {/* FAQ Suggestion */}
                        <div className="mt-6 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-5">
                            <h3 className="font-bold mb-2">لديك سؤال؟</h3>
                            <p className="text-sm text-primary-foreground/80 mb-3">
                                قد تجدين إجابتك في قسم الأسئلة الشائعة
                            </p>
                            <Link
                                to="/#faq"
                                className="text-gold font-bold hover:underline text-sm"
                            >
                                اذهبي للأسئلة الشائعة ←
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center mt-12">
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

export default ContactPage;
