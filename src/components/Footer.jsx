
import Accordian from "./Accordian";


const Footer = () => {
 
   

 

  return (
    // <div className="bg-black min-h-screen flex flex-col justify-start p-40 font-altivo ">
    //   <h1 className="text-white text-2xl mb-8">Frequently Asked Questions</h1>

    <div className="bg-black min-h-screen flex flex-col justify-start p-8 sm:p-20 md:p-40 font-altivo">
      <h1 className="text-white text-xl sm:text-2xl mb-4 sm:mb-8">
        Frequently Asked Questions
      </h1>

      <Accordian
        question="How do I create an account on MovieStream?"
        answer="You can create an account by clicking on the 'Sign Up' button at the top right corner of the homepage. Fill in your details, and you'll be ready to start streaming."
      />

      <Accordian
        question="What payment methods are accepted?"
        answer="We accept major credit cards, PayPal, and Apple Pay. You can update your payment method anytime in your account settings."
      />

      <Accordian
        question="How can I cancel my subscription?"
        answer="To cancel your subscription, go to 'Account Settings' and click on 'Manage Subscription'. From there, you can select 'Cancel Subscription'."
      />

      <Accordian
        question="Why can't I find certain movies?"
        answer="Our content availability depends on licensing agreements, which may vary by region and over time. We continually work to bring more titles to our platform."
      />
      <Accordian
        question="How do I reset my password?"
        answer="If you've forgotten your password, click on 'Forgot Password' on the login page. You'll receive an email with instructions on how to reset it."
      />
      <button className="bg-red-600 rounded-xl flex items-center justify-center text-bold h-10 sm:h-12 w-full sm:w-52 sm:hidden mb-2">
        Get started &#x2192;
      </button>
      <p className="text-neutral-400 text-xs text-center">Marcus MVP is only available for use in our Mobile App.</p>
    </div>
  );
}

export default Footer
