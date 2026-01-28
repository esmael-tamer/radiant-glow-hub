import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPage = () => {
    return (
        <div className="min-h-screen bg-cream" dir="rtl">
            {/* Header */}
            <div className="bg-primary text-primary-foreground py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">سياسة الخصوصية</h1>
                    <p className="text-lg text-primary-foreground/80">
                        نلتزم بحماية خصوصيتك وبياناتك الشخصية
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Introduction */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold text-primary">مقدمة</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed">
                            نحن في أروما مور نقدر ثقتك بنا ونلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام
                            وحماية معلوماتك الشخصية عند استخدام موقعنا أو شراء منتجاتنا.
                        </p>
                    </div>
                </section>

                {/* Data Collection */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold text-primary">البيانات التي نجمعها</h2>
                        </div>
                        <p className="text-gray-700 mb-4">نجمع المعلومات التالية لإتمام طلبك وتوصيله:</p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                <span><strong>الاسم الكامل:</strong> لتوجيه الطلب بشكل صحيح</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                <span><strong>رقم الهاتف:</strong> للتواصل بخصوص التوصيل</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                <span><strong>العنوان:</strong> لتوصيل الطلب إليك</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                <span><strong>المنطقة:</strong> لتحديد منطقة التوصيل</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Data Usage */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <Eye className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold text-primary">كيف نستخدم بياناتك</h2>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                معالجة وتنفيذ طلباتك
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                التواصل معك بخصوص حالة الطلب
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                توصيل المنتجات إلى عنوانك
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                تحسين خدماتنا ومنتجاتنا
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Data Protection */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <Lock className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold text-primary">حماية البيانات</h2>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            نتخذ إجراءات أمنية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                لا نشارك بياناتك مع أطراف ثالثة إلا لغرض التوصيل
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                لا نبيع أو نؤجر معلوماتك الشخصية
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                نحتفظ ببياناتك فقط للمدة اللازمة لإتمام الخدمة
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Contact */}
                <section className="mb-8">
                    <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-6 shadow-lg">
                        <h2 className="text-xl font-bold mb-4">تواصل معنا</h2>
                        <p className="leading-relaxed mb-4">
                            إذا كان لديك أي استفسار حول سياسة الخصوصية، يمكنك التواصل معنا عبر:
                        </p>
                        <p className="text-gold font-bold">واتساب: 96598882565+</p>
                        <p className="text-gold font-bold">انستغرام: @aromamore.kw</p>
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

export default PrivacyPage;
