export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Ideas from: Smart Contract Auditor AI
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          ```json
[
  {
    "title": "AI-Powered Smart Contract Validator",
    "description": "أداة تستخدم الذكاء الاصطناعي للتحقق من صحة العقود الذكية والتأكد من توافقها مع المعايير القانونية والتقنية.",
    "mvp_plan": "تطوير نموذج أولي يقوم بتحليل العقود الذكية باستخدام خوارزميات التعلم الآلي لتحديد الأخطاء الشائعة والتوصيات. استخدام مكتبات مفتوحة المصدر لتحليل الكود."
  },
  {
    "title": "Smart Contract Risk Assessment Tool",
    "description": "منصة تقدم تقييمات فورية لمخاطر العقود الذكية بناءً على تحليل البيانات التاريخية والتوجهات الحالية.",
    "mvp_plan": "إنشاء واجهة بسيطة تتيح للمستخدمين إدخال كود العقد الذكي والحصول على تقرير سريع عن المخاطر المحتملة باستخدام نماذج تحليل البيانات."
  },
  {
    "title": "Decentralized Audit Marketplace",
    "description": "سوق لربط مطوري العقود الذكية مع مدققي الأمان المستقلين، مدعومًا بالذكاء الاصطناعي لتقييم جودة المدققين.",
    "mvp_plan": "بناء منصة أساسية تسمح للمستخدمين بنشر عقودهم الذكية والبحث عن مدققين، مع نظام تقييم يعتمد على الذكاء الاصطناعي لتقدير جودة المدققين بناءً على تجارب سابقة."
  }
]
```
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="/auth" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a 
            href="/dashboard" 
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Dashboard
          </a>
        </div>
      </div>
    </main>
  )
}