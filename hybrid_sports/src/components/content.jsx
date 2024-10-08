import styles from "../style";

const Content = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-6 mt-10 w-full">
      {/* Left Section */}
      <div className={`${styles.flexCenter} flex-col flex-auto w-full md:w-1/2 bg-slate-900 rounded-lg shadow-lg p-6 mb-6 md:mb-0`}>
        <h2 className="text-2xl font-semibold mb-4">Trainer Platform</h2>
        <p className={`${styles.paragraph} max-w-[470px] mb-4`}>
          Trainer Platform is a comprehensive service designed specifically for sports instructors, coaches, and trainers. Our platform enables you to:
        </p>

        <ul className={`${styles.paragraph} max-w-[470px] list-disc list-inside mb-6`}>
          <li>Create a professional profile showcasing your expertise, certifications, and experience.</li>
          <li>Manage bookings, scheduling, and client communication.</li>
          <li>Track your performance, client progress, and revenue.</li>
          <li>Expand your reach and visibility to potential clients.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-3">Key Features:</h3>
        <ul className={`${styles.paragraph} max-w-[470px] list-disc list-inside mb-6`}>
          <li>Profile Creation: Highlight your skills, certifications, and experience.</li>
          <li>Service Listing: Showcase your training services, packages, and pricing.</li>
          <li>Booking Management: Effortlessly manage client bookings, scheduling, and cancellations.</li>
          <li>Client Communication: Secure messaging system for seamless communication.</li>
          <li>Performance Tracking: Monitor client progress, sessions, and revenue.</li>
          <li>Payment Processing: Secure and efficient payment management.</li>
          <li>Reviews and Ratings: Collect client feedback to enhance your reputation.</li>
          <li>Search Visibility: Increase your visibility to potential clients.</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className={`${styles.flexCenter} flex-col flex-auto w-full md:w-1/2 bg-slate-900 rounded-lg shadow-lg p-6`}>
        <h3 className="text-xl font-semibold mb-3">Getting Started:</h3>
        <ol className={`${styles.paragraph} max-w-[470px] list-decimal list-inside mb-6`}>
          <li>Sign-up for a trainer account.</li>
          <li>Complete your profile (100% profile completion recommended).</li>
          <li>Set up your services and pricing.</li>
          <li>Start receiving bookings and managing clients.</li>
        </ol>

        <h3 className="text-xl font-semibold mb-3">Subscription Plans:</h3>
        <ul className={`${styles.paragraph} max-w-[470px] list-disc list-inside`}>
          <li>Basic (Free): Profile creation, limited booking management.</li>
          <li>Premium ($X/month): Advanced booking management, performance tracking, payment processing.</li>
          <li>Pro ($Y/month): Additional features, priority support, enhanced visibility.</li>
        </ul>
      </div>
    </div>
  );
}

export default Content;
