import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "ما هي مكونات مجموعة جايدن؟",
    answer:
      "مجموعة جايدن تحتوي على 4 منتجات فاخرة: زبدة الجسم بالزبدات الأورغنيك والزيوت الطبيعية، سكراب للتقشير اللطيف، صابون طبيعي منقي، وعطر جايدن المميز بروائح خشبية مع لمسة زهور منعشة.",
  },
  {
    question: "كيف أستخدم زبدة جايدن؟",
    answer:
      "استخدميها بعد الاستحمام ودلكيها جيداً على الجسم لتغذية البشرة. زبدة الجسم Jayden تقدم ترطيب مكثف يدوم طويلاً، مثالية للبشرة الجافة. تحتوي على مزيج من الزبدات الأورغنيك والزيوت الطبيعية.",
  },
  {
    question: "ما فوائد زبدة جايدن للبشرة؟",
    answer:
      "ترمم سطح البشرة وتحميها من الحبوب، تمنع ظهور البثور والتصبغات، وتوفر ترطيب مكثف يدوم طويلاً. مناسبة لجميع أنواع البشرة خاصة البشرة الجافة.",
  },
  {
    question: "كيف أستخدم عطر جايدن؟",
    answer:
      "جايدن عطر يمزج بين الانتعاش والقوة، مصمم ليعطيك ثقة تامة. ضعيه على نقاط النبض بعد الاستحمام للحصول على أفضل النتائج.",
  },
  {
    question: "متى سيصل طلبي في الكويت؟",
    answer:
      "نقوم بشحن الطلبات خلال 24 ساعة من تأكيد الطلب. التوصيل لجميع مناطق الكويت خلال 1-3 أيام عمل. ستتلقين رسالة تأكيد عند شحن طلبك.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background py-10 sm:py-12 lg:py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-3 sm:mb-4">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3">
            الأسئلة الشائعة
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            كل ما تحتاج معرفته عن منتجنا
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg sm:rounded-xl px-4 sm:px-6 shadow-sm"
            >
              <AccordionTrigger className="text-right text-base sm:text-lg font-medium hover:text-primary transition-colors py-4 sm:py-5 min-h-[48px]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-4 sm:pb-5">
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
