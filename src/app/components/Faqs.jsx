import Question from "./Question";
import { Abyssinica_SIL, Alexandria } from "next/font/google";

const abyssinica = Abyssinica_SIL({
  weight: "400",
  subsets: ["latin"],
});

const alexandria = Alexandria({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const faqData = [
  {
    question:
      "I submitted a Digital Assignment through the VITian app. Will it be automatically updated in the AssignoFast app?",
    answer:
      "No, the assignment will not be automatically updated. To ensure your submission is reflected in AssignoFast, you must log in to the VTOP website. This action triggers the auto-update process.",
  },
  {
    question: "When are assignments updated? Is the update instantaneous?",
    answer:
      "Digital Assignments are automatically updated after each login to the VTOP website. Additionally, updates occur whenever you switch to a new semester.",
  },
  {
    question:
      "Do I have to use vitstudent.ac.in email only? Can I use my personal email?",
    answer:
      "Yes you only can sign in with vitstudent email id only. Personal Email can only work in app to manage your own custom tasks only.",
  },
  {
    question:
      "Will the personal tasks be shown to us if we delete the app and install it again?",
    answer:
      "No, the personal tasks are saved locally in your device and if you delete and reinstall the app then it won't be loaded again.",
  },
  {
    question: "Will I see the notifications if I don't allow them?",
    answer:
      "No, you won't receive notifications for tasks and assignments if notifications are turned off, and you might miss important reminders as a result, so its important to have it on.",
  },
];

export default function Faqs() {
  const colors = ["#003700", "#21661D"];
  const rows = Math.ceil(faqData.length / 2);

  return (
    <div
      id="faq"
      className={`bg-black h-auto text-white p-4 pt-[10vh] ${abyssinica.className}`}
    >
      <h1
        className={`text-3xl md:text-5xl m-4 text-center font-semibold ml-6 ${alexandria.className}`}
      >
        Frequently Asked Questions
      </h1>
      <div className="m-4">
        {Array.from({ length: rows }).map((_, row) => (
          <div
            key={row}
            className="flex flex-col justify-center md:flex-row md:space-x-4"
          >
            {[0, 1].map((col) => {
              const faqIndex = row * 2 + col;
              if (faqIndex >= faqData.length) return null;

              const isMobile = row % 2 === 0;
              const bgColor = isMobile ? colors[col] : colors[(row + col) % 2];

              return (
                <Question
                  key={col}
                  bgColor={bgColor}
                  question={faqData[faqIndex].question}
                  answer={faqData[faqIndex].answer}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
