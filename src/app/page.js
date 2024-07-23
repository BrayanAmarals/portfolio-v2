"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const skills = [
  {
    id: 0,
    name: "Graphic/UI Design",
    nome: "Design Gráfico/UI",
    description: `solve visual problems by simplifying people&apos;s lives by providing satisfying experiences;`,
    descricao: `resolver problemas visuais ao simplificar a vida das pessoas através da oferta de experiências satisfatórias;`,
    tools: [
      {
        id: 0.0,
        icon: "solar:figma-bold",
        name: "Figma",
      },
      {
        id: 0.1,
        icon: "mage:photoshop",
        name: "Photoshop",
      },
      {
        id: 0.2,
        icon: "simple-icons:adobexd",
        name: "XD",
      },
      {
        id: 0.3,
        icon: "mage:photoshop",
        name: "Illustrator",
      },
    ],
  },
  {
    id: 1,
    name: "Front-end",
    nome: "Front-end",
    description:
      "development of the graphical interface where the user can view and interact with this website;",
    descricao:
      "desenvolvimento da interface gráfica onde o usuário pode visualizar e interagir com este site;",
    tools: [
      {
        id: 1.0,
        icon: "ri:nextjs-fill",
        name: "NextJS",
      },
      {
        id: 1.1,
        icon: "mdi:tailwind",
        name: "Tailwind",
      },
      {
        id: 1.2,
        icon: "mdi:react",
        name: "React",
      },
      {
        id: 1.3,
        icon: "teenyicons:typescript-outline",
        name: "Typescript",
      },
    ],
  },
  {
    id: 2,
    name: "Tools",
    nome: "Ferramentas",
    description:
      "tools used to facilitate or speed up some of our services or perform specific actions;",
    descricao:
      "ferramentas utilizadas para facilitar ou acelerar alguns de nossos serviços ou realizar ações específicas;",
    tools: [
      {
        id: 2.0,
        icon: "mdi:firebase",
        name: "Firebase",
      },
      {
        id: 2.1,
        icon: "simple-icons:vite",
        name: "Vite",
      },
      {
        id: 2.2,
        icon: "mdi:git",
        name: "Git",
      },
      {
        id: 2.3,
        icon: "simple-icons:shadcnui",
        name: "Shadcn",
      },
    ],
  },
];

const projects = [
  {
    id: 0,
    image: "/images/tutty.png",
    link: "https://bas-tuttymotors-v2.vercel.app/",
    name: "Tutty Motors",
    description:
      "Catalog website for the Tutty Motors automotive store. This site has an administrative login and product management system;",
    descricao:
      "Site de catálogo para a loja de automóveis Tutty Motors. Este site possui um sistema de login administrativo e gestão de produtos;",
    tags: ["NextJS", "Figma", "Firebase"],
  },
  {
    id: 1,
    image: "/images/vortex.png",
    link: "https://github.com/BrayanAmarals/bas-vortex-computadores",
    name: "Vortex Computadores",
    description:
      "Landing page developed for own development. Created from the beginning by me, this project was developed in NextJs, Tailwind and Shadcn, being the first time using this framework and library;",
    descricao:
      "Landing page desenvolvida para desenvolvimento próprio. Criado desde o início por mim, este projeto foi desenvolvido em NextJs, Tailwind e Shadcn, sendo a primeira vez que utilizo este framework e biblioteca;",
    tags: ["NextJS", "Shadcn", "Tailwind"],
  },
  {
    id: 2,
    image: "/images/pet.png",
    link: "https://github.com/BrayanAmarals/bas-petworld",
    name: "Pet World",
    description:
      "Institutional website with catalog page, administrative login page and product management dashboard with removal, addition and editing functions. Powered by NextJS, Tailwind, and Firebase authentication and database services;",
    descricao:
      "Website institucional com página de catálogo, página de login administrativo e painel de gerenciamento de produtos com funções de remoção, adição e edição. Desenvolvido com NextJS, Tailwind e serviços de autenticação e banco de dados do Firebase;",
    tags: ["NextJS", "Tailwind", "Firebase"],
  },
  {
    id: 3,
    image: "/images/teste3.png",
    link: "https://www.figma.com/design/47nVRt9rhKClqcfLNOBGLD/projeto-cqd?node-id=0-1&t=RvWcXu28V4nUdSpa-1",
    name: "Projeto CQD",
    description: `Class System Project, being the best planned design project I&apos;ve done to date, even though it&apos;s not completely executed, I believe it&apos;s interesting to bring it, because in it I was able to demonstrate a little that I learned after a while studying graphic design;`,
    descricao:
      "Projeto de Sistema de Aulas, sendo o projeto de design mais bem planejado que já fiz até agora, mesmo não estando completamente executado, acredito que seja interessante apresentá-lo, pois nele consegui demonstrar um pouco do que aprendi após algum tempo estudando design gráfico;",
    tags: ["Figma", "UI System"],
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const [tanjiroPosition, setTanjiroPosition] = useState("up");
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (
        scrollPosition < skillsRef.current.offsetTop &&
        activeSection !== "about"
      ) {
        setActiveSection("about");
        setTanjiroPosition("up");
      } else if (
        scrollPosition >= skillsRef.current.offsetTop &&
        scrollPosition < projectsRef.current.offsetTop &&
        activeSection !== "skills"
      ) {
        setActiveSection("skills");
        setTanjiroPosition("mid");
      } else if (
        scrollPosition >= projectsRef.current.offsetTop &&
        activeSection !== "projects"
      ) {
        setActiveSection("projects");
        setTanjiroPosition("down");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const handleScrollTo = (ref, sectionId) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const changeLanguage = () => {
    if (language == "en") {
      setLanguage("ptbr");
    } else {
      setLanguage("en");
    }
  };

  return (
    <main className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="flex flex-row gap-5 absolute top-5 right-10 items-center">
        <p>{language == "en" ? "Language: " : "Idioma: "}</p>
        <button onClick={() => changeLanguage()}>
          <Icon
            icon={
              language == "en"
                ? "emojione-v1:flag-for-united-states"
                : "emojione-v1:flag-for-brazil"
            }
            className="text-4xl"
          />
        </button>
      </div>
      <section className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <div className="flex flex-col gap-3">
            <a onClick={() => handleScrollTo(aboutRef, "about")}>
              <h1 className="text-[#E2E8F0] text-5xl font-semibold tracking-tight cursor-pointer">
                Brayan Amaral.
              </h1>
            </a>
            <h2 className="text-lg font-normal tracking-tight text-slate-200 sm:text-xl">
              {language == "en"
                ? "Junior Frontend Engineer"
                : "Engenheiro Frontend Junior"}
            </h2>
            <h3 className="text-[#93A2B7] max-w-xs leading-regular mt-1">
              {language == "en"
                ? "I create works of art in design and programming, where simplicity is beautiful, and I do it with passion."
                : "Eu crio obras de arte em design e programação, onde a simplicidade é bela, e faço isso com paixão."}
            </h3>
          </div>
          <div className="flex flex-col gap-6 mt-16 w-max">
            <a
              onClick={() => handleScrollTo(aboutRef, "about")}
              className="flex flex-row items-center cursor-pointer group"
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                  activeSection === "about"
                    ? "w-16 bg-slate-200"
                    : "group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                }`}
              ></span>
              <p
                className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
                  activeSection === "about"
                    ? "text-white"
                    : "group-hover:text-white group-focus-visible:text-white"
                }`}
              >
                {language == "en" ? "ABOUT" : "SOBRE"}
              </p>
            </a>
            <a
              onClick={() => handleScrollTo(skillsRef, "skills")}
              className="flex flex-row items-center cursor-pointer group"
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                  activeSection === "skills"
                    ? "w-16 bg-slate-200"
                    : "group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                }`}
              ></span>
              <p
                className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
                  activeSection === "skills"
                    ? "text-white"
                    : "group-hover:text-white group-focus-visible:text-white"
                }`}
              >
                {language == "en" ? "SKILLS" : "HABILIDADES"}
              </p>
            </a>
            <a
              onClick={() => handleScrollTo(projectsRef, "projects")}
              className="flex flex-row items-center cursor-pointer group"
            >
              <span
                className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                  activeSection === "projects"
                    ? "w-16 bg-slate-200"
                    : "group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                }`}
              ></span>
              <p
                className={`nav-text text-xs font-bold uppercase tracking-widest text-slate-500 ${
                  activeSection === "projects"
                    ? "text-white"
                    : "group-hover:text-white group-focus-visible:text-white"
                }`}
              >
                {language == "en" ? "PROJECTS" : "PROJETOS"}
              </p>
            </a>
          </div>
        </div>

        <ul className="ml-1 mt-8 flex items-center">
          <li className="mr-3 text-xs shrink-0">
            <Link
              href={"https://api.whatsapp.com/send/?phone=%2B5564996586019"}
              target="_blank"
              className="block "
            >
              <Icon
                icon="ic:baseline-whatsapp"
                className="text-3xl hover:text-slate-200"
              />
            </Link>
          </li>
          <li className="mr-3 text-xs shrink-0">
            <Link
              href={"https://www.instagram.com/brayan_amarals"}
              className="block"
              target="_blank"
            >
              <Icon
                icon="mdi:instagram"
                target="_blank"
                className="text-3xl  hover:text-slate-200"
              />
            </Link>
          </li>
          <li className="mr-3 text-xs shrink-0">
            <Link
              href={"https://github.com/BrayanAmarals"}
              className="block"
              target="_blank"
            >
              <Icon
                icon="mdi:github"
                className="text-3xl  hover:text-slate-200"
              />
            </Link>
          </li>
          <li className="mr-3 text-xs shrink-0">
            <Link
              href={"https://www.linkedin.com/in/brayanamaralss/"}
              className="block"
              target="_blank"
            >
              <Icon
                icon="mdi:linkedin"
                className="text-3xl  hover:text-slate-200"
              />
            </Link>
          </li>
        </ul>
        <Image
          src={`/tanjiro${tanjiroPosition}.png`}
          alt="tanjiro image"
          width={100}
          height={100}
          priority
          className="absolute bottom-0 left-[50%] max-[1024px]:hidden"
        />
      </section>
      <section className="pt-24 lg:w-1/2 lg:py-24">
        <Image
          src="/images/brayanPhoto.png"
          alt="imagem do Brayan"
          width={500}
          height={500}
          priority
          className="mb-10 scroll-mt-10 md:mb-16 lg:mb-30 lg:scroll-mt-18 max-w-96 h-auto "
          ref={aboutRef}
        />
        <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-slate-400 mt-6">
          <h1 className="text-[#E2E8F0] text-3xl font-semibold tracking-tight">
            {language == "en" ? "About" : "Sobre"}
          </h1>
          <p className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-slate-400 mt-6">
            {language == "en" ? (
              <p>
                Hello! I a&apos;m Brayan Amaral, a
                <b> Brazilian Web Developer from Goiânia-GO</b>, passionate
                about front-end and UI/UX design, aiming to become an
                exceptional Full Stack developer. <br />
                <br /> At <b>22, with 4 years of programming experience</b>, I
                am dedicated to professional growth. <br />
                <br />I have a proven ability to develop customized and scalable
                solutions, adhering to the best web development practices. My
                excellent collaboration and communication skills enable me to
                work effectively in team environments. I constantly keep up with
                the latest industry trends and technologies to deliver
                high-quality, impactful solutions to clients. <br />
                <br />
                <b>I am open to new challenges and opportunities </b>to
                contribute to innovative web development projects.
              </p>
            ) : (
              <p>
                Olá! Eu sou Brayan Amaral, um
                <b> Desenvolvedor Web Brasileiro de Goiânia-GO</b>, apaixonado
                por design front-end e UI/UX, com o objetivo de me tornar um
                desenvolvedor Full Stack excepcional. <br />
                <br /> Com <b>22 anos e 4 anos de experiência em programação</b>
                , estou dedicado ao crescimento profissional. <br />
                <br />
                Tenho comprovada habilidade para desenvolver soluções
                personalizadas e escaláveis, seguindo as melhores práticas de
                desenvolvimento web. Minhas excelentes habilidades de
                colaboração e comunicação me permitem trabalhar eficazmente em
                ambientes de equipe. Estou sempre atualizado com as últimas
                tendências e tecnologias da indústria para oferecer soluções de
                alta qualidade e impacto aos clientes. <br />
                <br />
                <b>Estou aberto a novos desafios e oportunidades </b>para
                contribuir em projetos inovadores de desenvolvimento web.
              </p>
            )}
          </p>
        </div>
        <div
          ref={skillsRef}
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-slate-400 mt-6"
        >
          <h1 className="text-[#E2E8F0] text-3xl font-semibold tracking-tight">
            {language == "en" ? "Skills" : "Habilidades"}
          </h1>
          {skills.map((skill) => {
            return (
              <div
                className="flex flex-row justify-between items-center mb-4"
                key={skill.id}
              >
                <div className="w-1/2 py-6">
                  <h1 className="text-[#5de7d2] text-xl font-medium tracking-tight mb-3">
                    {language == "en" ? skill.name : skill.nome}
                  </h1>
                  <p className="text-slate-400 text-base font-regular tracking-tight">
                    {language == "en" ? skill.description : skill.descricao}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {skill.tools.map((tool) => {
                    return (
                      <div
                        className="flex flex-col items-center gap-2"
                        key={tool.id}
                      >
                        <Icon
                          icon={tool.icon}
                          className=" bg-[#1B243A] text-[60px] p-3.5 rounded-full text-[#5de7d2]"
                        />
                        <h1 className="text-xs">{tool.name}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="scroll-mt-16 lg:scroll-mt-24 text-slate-400 mt-6"
          ref={projectsRef}
        >
          <h1 className="text-[#E2E8F0] text-3xl font-semibold tracking-tight mb-8">
            {language == "en" ? "Projects" : "Projetos"}
          </h1>

          <div className="flex flex-col gap-6 group/list">
            {projects.map((project) => {
              return (
                <Link
                  className="flex cursor-pointer group relative transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50 "
                  href={project.link}
                  target="_blank"
                  key={project.id}
                >
                  <div className="flex flex-col gap-5 rounded-md transition motion-reduce:transition-none lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg p-5 w-full md:flex-row ">
                    <Image
                      src={project.image}
                      width={500}
                      height={281}
                      className="w-auto h-auto md:h-28 aspect-video rounded-md"
                      alt={project.name}
                    ></Image>
                    <div className="flex flex-col gap-2 lg:w-2/3 relative">
                      <h1 className="text-[#5de7d2] text-xl font-medium tracking-tight ">
                        {project.name}
                      </h1>
                      <p className="text-slate-400 text-base font-regular tracking-tight">
                        {language == "en"
                          ? project.description
                          : project.descricao}
                      </p>
                      <div className="flex flex-row gap-2">
                        {project.tags.map((tag) => {
                          return (
                            <div
                              className="py-1 px-3 bg-[#112b3a] rounded-full"
                              key={tag}
                            >
                              <p className="text-[#93A2B7] text-xs">{tag}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <Link
            href={"/projects"}
            className="text-[#E2E8F0] text-base font-medium tracking-tight flex flex-row gap-2 mt-10"
          >
            {language == "en"
              ? "View Full Portfolio"
              : "Ver Portfolio Completo"}{" "}
            <Icon icon="mdi:arrow-top-right"></Icon>
          </Link>
        </div>
      </section>
    </main>
  );
}
