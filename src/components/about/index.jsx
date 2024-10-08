import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className="col-span-full lg:col-span-8 row-span-2 flex-col items-start"
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Architect of Digital Solutions
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I'm Shruti Pandey, a passionate software engineer with over 3 years
            of experience in web and application development. With expertise in
            frameworks like React.js, Vue.js, and Node.js, I specialize in
            creating responsive, high-performance, and dynamic web applications.
            My journey includes building cross-platform desktop applications,
            working with cloud platforms like Microsoft Azure, and integrating
            AI-based features into products. Driven by problem-solving and
            innovation, I continuously explore new technologies to shape the
            future of web development.
          </p>
        </ItemLayout>

        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            5+ <sub className="font-semibold text-base">projects completed</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className="col-span-full xs:col-span-6 lg:col-span-4 text-accent"
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          Expertised In {" "}
            <sub className="font-semibold text-base"></sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className="col-span-full sm:col-span-12 md:col-span-8 !p-0"
        >
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,react,vue,angular,html,nodejs,mongodb,aws,azure,git,css,bootstrap,bitbucket`}
            alt="Shruti's Top Languages"
            loading="lazy"
          />

        </ItemLayout>
        <ItemLayout
          className="col-span-full xs:col-span-12 lg:col-span-12 text-accent"
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          Worked On Many {" "}
            <sub className="font-semibold text-base"></sub>
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full">
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,react,vue,angular,nodejs,html,mongodb,aws,azure,docker,git,tailwind,electron,css,bootstrap,materialui,bitbucket,nextjs`}
            alt="Shruti's Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className="col-span-full md:col-span-6 !p-0">
        <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          <div className="mb-4 ml-4">
          <sub className="font-semibold text-base"> OpenAi, Research&Development ,C , C++</sub>
          </div>
          </p>

        </ItemLayout>

      </div>
    </section>
  );
};

export default AboutDetails;
