import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '```json
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
```',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}