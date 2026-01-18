import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "ما هي فوائد زيت الخروع للشعر؟",
    answer:
      "زيت الخروع غني بحمض الريسينوليك الذي يعزز نمو الشعر ويقويه من الجذور. يساعد في علاج تساقط الشعر، ترطيب فروة الرأس، منع القشرة، وإضافة لمعان طبيعي للشعر.",
  },
  {
    question: "كيف أستخدم زيت الخروع على شعري؟",
    answer:
      "قومي بتدفئة كمية صغيرة من الزيت ودلكي فروة الرأس بحركات دائرية لمدة 5-10 دقائق. وزعي الزيت على أطراف الشعر، ثم غطي شعرك بمنشفة دافئة واتركيه لمدة ساعة إلى ليلة كاملة. اغسليه بشامبو لطيف.",
  },
  {
    question: "كم مرة يجب استخدام زيت الخروع؟",
    answer:
      "للحصول على أفضل النتائج، ننصح باستخدام زيت الخروع 2-3 مرات أسبوعياً. يمكنك رؤية النتائج الأولية خلال 4-6 أسابيع من الاستخدام المنتظم.",
  },
  {
    question: "هل زيت الخروع مناسب لجميع أنواع الشعر؟",
    answer:
      "نعم! زيت الخروع مناسب لجميع أنواع الشعر سواء كان جافاً، دهنياً، مجعداً أو ناعماً. يمكن للجميع الاستفادة من خصائصه المغذية والمرطبة.",
  },
  {
    question: "متى سيصل طلبي؟",
    answer:
      "نقوم بشحن الطلبات خلال 24-48 ساعة من تأكيد الطلب. مدة التوصيل تتراوح بين 3-7 أيام عمل حسب موقعك. ستتلقى رقم تتبع فور شحن طلبك.",
  },
  {
    question: "هل يوجد ضمان على المنتج؟",
    answer:
      "نعم! نقدم ضمان استرداد الأموال لمدة 30 يوماً. إذا لم تكن راضياً عن المنتج لأي سبب، يمكنك إرجاعه واسترداد كامل المبلغ.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            الأسئلة الشائعة
          </h2>
          <p className="text-muted-foreground text-lg">
            كل ما تحتاج معرفته عن منتجنا
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-sm"
            >
              <AccordionTrigger className="text-right text-lg font-medium hover:text-primary transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
