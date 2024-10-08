import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt=""
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Reach Out to Us
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, your thoughts are valuable to us. Fill out the form below, and our team will get back to you as soon as possible.
          </p>
          <p className="text-center font-light text-sm xs:text-base">
            Connect with us to explore collaborations, partnerships, or to discuss your ideas and projects. Your messages are important to us!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
