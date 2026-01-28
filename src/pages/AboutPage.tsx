import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Award, Truck, Shield } from "lucide-react";

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-cream" dir="rtl">
            {/* Header */}
            <div className="bg-primary text-primary-foreground py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">من نحن</h1>
                    <p className="text-lg text-primary-foreground/80">
                        تعرفي على قصتنا وشغفنا بالجمال الطبيعي
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Our Story */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                        <Heart className="w-6 h-6 text-gold" />
                        قصتنا
                    </h2>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            نحن <strong className="text-gold">أروما مور</strong> - متجر كويتي متخصص في منتجات العناية بالبشرة والجمال الطبيعي.
                            بدأت رحلتنا من شغفنا بتقديم منتجات عالية الجودة تجمع بين الفعالية والمكونات الطبيعية.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            مجموعة جايدن هي فخرنا وإنجازنا، حيث طورنا هذه المجموعة المتكاملة لتلبي احتياجات البشرة العربية
                            وتناسب مناخ الخليج. كل منتج في المجموعة مصمم بعناية ليعمل بتناغم مع المنتجات الأخرى.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            نؤمن بأن كل امرأة تستحق أن تشعر بالجمال والثقة، ولهذا نقدم منتجات تحقق نتائج حقيقية
                            بأسعار مناسبة للجميع.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                        <Award className="w-6 h-6 text-gold" />
                        لماذا تختارينا؟
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-xl p-5 shadow-md">
                            <h3 className="font-bold text-primary mb-2">منتجات أصلية 100%</h3>
                            <p className="text-gray-600 text-sm">جميع منتجاتنا أصلية ومضمونة الجودة</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 shadow-md">
                            <h3 className="font-bold text-primary mb-2">مكونات طبيعية</h3>
                            <p className="text-gray-600 text-sm">نستخدم أفضل المكونات الطبيعية الآمنة على البشرة</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 shadow-md">
                            <h3 className="font-bold text-primary mb-2">توصيل سريع</h3>
                            <p className="text-gray-600 text-sm">توصيل لجميع مناطق الكويت خلال 1-3 أيام</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 shadow-md">
                            <h3 className="font-bold text-primary mb-2">خدمة عملاء متميزة</h3>
                            <p className="text-gray-600 text-sm">فريقنا متاح دائماً للإجابة على استفساراتك</p>
                        </div>
                    </div>
                </section>

                {/* Jayden Collection */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-primary mb-6">مجموعة جايدن</h2>
                    <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-6 shadow-lg">
                        <p className="leading-relaxed mb-4">
                            مجموعة جايدن الكاملة تتكون من 4 منتجات متكاملة للعناية بالبشرة:
                        </p>
                        <ul className="space-y-2 mb-4">
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full"></span>
                                <strong>صابونية جايدن:</strong> تنظيف عميق وتفتيح
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full"></span>
                                <strong>سكراب جايدن:</strong> تقشير لطيف وإزالة الجلد الميت
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full"></span>
                                <strong>زبدة جايدن:</strong> ترطيب مكثف ونعومة فائقة
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full"></span>
                                <strong>عطر كاليدا:</strong> رائحة فاخرة تدوم طويلاً
                            </li>
                        </ul>
                        <p className="text-gold font-bold">
                            احصلي على المجموعة الكاملة بخصم 55%! 🌟
                        </p>
                    </div>
                </section>

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

export default AboutPage;
