import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Truck, RefreshCw, CreditCard, AlertCircle } from "lucide-react";

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-cream" dir="rtl">
            {/* Header */}
            <div className="bg-primary text-primary-foreground py-12 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">شروط الخدمة</h1>
                    <p className="text-lg text-primary-foreground/80">
                        الشروط والأحكام الخاصة بالتسوق من أروما مور
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* General Terms */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold text-primary">الشروط العامة</h2>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                باستخدامك لموقعنا أو شرائك لمنتجاتنا، فإنك توافق على هذه الشروط والأحكام
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                جميع الأسعار معروضة بالدينار الكويتي وتشمل الضرائب
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                نحتفظ بالحق في تعديل الأسعار والعروض دون إشعار مسبق
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                العروض والخصومات صالحة حتى نفاذ الكمية
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Delivery */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <Truck className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold text-primary">التوصيل</h2>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                <span><strong>مدة التوصيل:</strong> 1-3 أيام عمل داخل الكويت</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                <span><strong>رسوم التوصيل:</strong> مجانية على جميع الطلبات</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                سيتم التواصل معك قبل التوصيل لتأكيد الموعد
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                يرجى التأكد من صحة رقم الهاتف والعنوان عند الطلب
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Payment */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <CreditCard className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold text-primary">الدفع</h2>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                <span><strong>الدفع عند الاستلام:</strong> نقداً عند استلام الطلب</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                يرجى تجهيز المبلغ المطلوب عند التوصيل
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                يمكن التحويل البنكي قبل التوصيل (تواصل معنا للتفاصيل)
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Returns */}
                <section className="mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <RefreshCw className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold text-primary">الاستبدال والاسترجاع</h2>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                يمكن استبدال المنتج خلال 7 أيام من الاستلام
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                يجب أن يكون المنتج في حالته الأصلية وغير مفتوح
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                لا يمكن استرجاع المنتجات المفتوحة أو المستخدمة لأسباب صحية
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                للاستبدال، تواصلي معنا عبر واتساب
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Important Notes */}
                <section className="mb-8">
                    <div className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground rounded-2xl p-6 shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="w-8 h-8 text-gold" />
                            <h2 className="text-xl font-bold">ملاحظات هامة</h2>
                        </div>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                جميع منتجاتنا أصلية ومضمونة 100%
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                ننصح بإجراء اختبار على منطقة صغيرة من الجلد قبل الاستخدام
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2"></span>
                                يحفظ بعيداً عن أشعة الشمس المباشرة والحرارة
                            </li>
                        </ul>
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

export default TermsPage;
