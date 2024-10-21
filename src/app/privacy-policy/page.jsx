import Navbar from "../components/Navbar";
import { Alexandria } from "next/font/google";

const alexandria = Alexandria({
  weight: "400",
  subsets: ["latin"],
});

export default function Policy() {
  return (
    <div
      className={`h-[100%] w-[100%] bg-black lg:flex overflow-hidden relative font-alexandria ${alexandria.className}`}
    >
      <Navbar />
      <main className="mt-[8vh] md:mt-[10vh] ml-[10vw] mr-[5vw] text-white">
        <h1 className="text-4xl lg:text-6xl mb-8">Privacy Policy</h1>

        <section className="mb-8">
          <p className="text-sm lg:text-base">
            Effective Date: October 11, 2024
          </p>
          <p className="text-sm lg:text-base">
            Assignofast ("we", "our", or "us") respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, and protect information related
            to your use of the Assignofast mobile application ("App").
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl mb-4">
            1. Information We Collect
          </h2>
          <ul className="list-disc list-inside">
            <li className="text-sm lg:text-base mb-2">
              <strong>Google Sign-In Data</strong>: We use Google Sign-In
              through Firebase to authenticate users. This may include your
              email address, profile picture, and other basic profile
              information provided by Google.
            </li>
            <li className="text-sm lg:text-base mb-2">
              <strong>Assignment Data from VTOP</strong>: We retrieve and store
              assignment data from the VTOP system to display and manage your
              assignments within the app.
            </li>
            <li className="text-sm lg:text-base mb-2">
              <strong>Personal Task Data</strong>: The app allows users to add
              personal tasks, which are stored locally on your device.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl mb-4">2. Use of Firebase</h2>
          <p className="text-sm lg:text-base">
            We use Firebase for both Google Sign-In and storing assignment data
            from VTOP. Firebase is a secure backend service provided by Google
            that helps us store data while ensuring your privacy. The types of
            data stored in Firebase include:
          </p>
          <ul className="list-disc list-inside">
            <li className="text-sm lg:text-base mb-2">
              Assignment details (e.g., assignment name, due date, and status).
            </li>
            <li className="text-sm lg:text-base mb-2">
              Basic profile information from Google Sign-In (e.g., email
              address).
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl mb-4">
            3. Local Storage of Personal Tasks
          </h2>
          <p className="text-sm lg:text-base">
            All personal tasks added by you are stored locally on your device.
            These tasks are not uploaded to Firebase or shared with any third
            parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl mb-4">4. Notifications</h2>
          <p className="text-sm lg:text-base">
            Assignofast sends notifications to help you stay on top of your
            assignments and personal tasks. These notifications include:
          </p>
          <ul className="list-disc list-inside">
            <li className="text-sm lg:text-base mb-2">
              Reminders about upcoming assignment deadlines.
            </li>
            <li className="text-sm lg:text-base mb-2">
              Increased frequency of notifications when deadlines are within 48
              hours.
            </li>
            <li className="text-sm lg:text-base mb-2">
              Personal task reminders (based on tasks you set within the app).
            </li>
          </ul>
          <p className="text-sm lg:text-base">
            You can control notification preferences through your device
            settings. We do not use notifications to collect any personal
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl mb-4">5. Data Security</h2>
          <p className="text-sm lg:text-base">
            We use industry-standard security measures to protect the data
            stored on Firebase and on your device. Google Sign-In is a secure
            method of authentication, and all interactions with Firebase are
            encrypted. It is also important to protect your device and use
            strong passwords to ensure your personal tasks remain secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl lg:text-3xl mb-4">
            6. Changes to This Privacy Policy
          </h2>
          <p className="text-sm lg:text-base">
            We may update this Privacy Policy from time to time. If we make
            changes, the new policy will be made available within the app and
            will take effect immediately. We encourage you to review this policy
            periodically.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl lg:text-3xl mb-4">7. Contact Us</h2>
          <p className="text-sm lg:text-base">
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:{" "}
            <a href="mailto:tech.ieeecsvit@gmail.com" className="underline">
              tech.ieeecsvit@gmail.com
            </a>
          </p>
        </section>
      </main>
    </div>
  );
}
