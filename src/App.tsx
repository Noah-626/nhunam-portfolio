import { useState, useRef } from 'react';
import { TextAnimate } from './components/magicui/text-animate';
import CustomCursor from './components/CustomCursor';
import { Copy } from 'lucide-react';
import { BlurFade } from './components/magicui/blur-fade';
import { InteractiveHoverButton } from './components/magicui/interactive-hover-button';
import { Dock, DockIcon } from './components/magicui/dock';
import { BoxReveal } from './components/magicui/box-reveal';
 
export type IconProps = React.HTMLAttributes<SVGElement>;
const projects = [
  {
    id: 1,
    title: "Project #1",
    description: "Creating immersive digital experiences that connect with users on a deeper level",
    image: "https://cdn.prod.website-files.com/62b2c9962e8d1673ea2d636b/62b2de35066ae0fd4e3a83f0_project1%20home%20hover.jpg",
    hoverImage: "https://cdn.prod.website-files.com/62b2c9962e8d1673ea2d636b/62b2dee8b3dd4924f4289f74_project4%20home%20hover.jpg",
    link: "https://github.com/Noah-626"
  },
  {
    id: 2,
    title: "Project #2",
    description: "Evolving brands through strategic design and thoughtful implementation",
    image: "https://cdn.prod.website-files.com/62b2c9962e8d1673ea2d636b/62b2dedddb1895bf2e512636_project5%20home%20hover.jpg",
    hoverImage: "https://cdn.prod.website-files.com/62b2c9962e8d1673ea2d636b/62b2dead0f82207d64e06241_project2%20home%20hover.jpg",
    link: "https://github.com/Noah-626"
  },
  {
    id: 3,
    title: "Project #3",
    description: "Building interactive platforms that engage and inspire users",
    image: "https://cdn.prod.website-files.com/62b2c9962e8d1673ea2d636b/62b2dec1db18952c50512613_project3%20home%20hover.jpg",
    hoverImage: "https://cdn.prod.website-files.com/62b2c9962e8d1673ea2d636b/62b2e53e185721329c3c6b2e_screen4-p-1080.jpeg",
    link: "https://github.com/Noah-626"
  }
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ngnnhunam@gmail.com');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-white via-[#f8f1f1] to-[#fbf7f6] ">
      <CustomCursor />
      
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center pt-[100px] pr-[500px] pl-[500px] pb-[100px] bg-white">
        <a href="/" className="text-2xl font-medium " data-menu-item><TextAnimate animation="blurIn" by='text' duration={2} delay={2}>Nhu Nam</TextAnimate></a>
        <div className="flex items-center justify-between w-full max-w-[200px]">
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center space-x-4"
          data-menu-item
        >
          <span className="text-lg text-medium"><BlurFade duration={1} delay={2} direction='right' inView={true}>Menu</BlurFade></span>
          <div className="w-6 h-4 flex flex-col justify-between pr-10">
            <BlurFade duration={1} delay={2} direction='down'><span className="block w-6 h-[2px] bg-black"></span></BlurFade>
            <BlurFade duration={1} delay={2} direction='up'><span className="block w-4 h-[1px] bg-black"></span></BlurFade>
          </div>
        </button>
        <BlurFade duration={1} delay={2} direction='left'><InteractiveHoverButton><a className='w-[20px] h-[20px]' href="#contact-section">Contact</a></InteractiveHoverButton></BlurFade>
        </div>
      </div>

      {/* Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#0a0a0a] text-white z-50" ref={menuRef}>
          {/* Menu Header */}
          <div className="absolute top-0 left-0 w-full flex justify-between items-center p-8">
            <a href="/" className="text-2xl font-medium" data-menu-item>BC</a>
            <button 
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-4"
              data-menu-item
            >
              <span className="text-lg">Close</span>
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="block w-6 h-[1px] bg-white rotate-45 absolute"></span>
                <span className="block w-6 h-[1px] bg-white -rotate-45 absolute"></span>
              </div>
            </button>
          </div>

          {/* Menu Content */}
          <div className="h-screen pt-32 pb-8 px-8 ">
            <div className="h-full flex justify-between p-[500px] ">
              {/* Navigation Links */}
              <div className="flex flex-col justify-center pl-20">
                <nav className="space-y-20">
                  <a href="#about" className="block text-7xl hover:text-neutral-400 transition-colors" data-menu-item>
                  <button onClick={() => setIsOpen(false)}><TextAnimate animation="slideUp" by="word" once={true}>About</TextAnimate></button>
                  </a>
                  <a href="#project" className="block text-7xl hover:text-neutral-400 transition-colors" data-menu-item>
                  <button onClick={() => setIsOpen(false)}><TextAnimate animation="slideUp" by="word" once={true}>Project</TextAnimate></button>
                  </a>
                  <a href="#contact-section" className="block text-7xl hover:text-neutral-400 transition-colors" data-menu-item>
                  <button onClick={() => setIsOpen(false)}><TextAnimate animation="slideUp" by="word" once={true}>Contact</TextAnimate></button>
                  </a>
                </nav>
              </div>

              {/* Contact Section */}
              <div className="flex flex-col justify-center max-w-lg pr-20">
                <div className="space-y-20">
                  <div>
                    <div className="inline-block px-4 py-2 bg-neutral-800 rounded-full mb-8">
                      <span className="text-sm">Limited availability</span>
                    </div>
                    <h2 className="text-6xl font-light mb-8">
                      Want to start a project together? Get in touch
                    </h2>
                  </div>

                  <div>
                    <h3 className="text-neutral-500 mb-4">Email</h3>
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">ngnnhunam@gmail.com</span>
                      <button
                        onClick={handleCopyEmail}
                        className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                        title="Copy email"
                        data-menu-item
                      >
                        <Copy size={20} className={copySuccess ? 'text-green-500' : 'text-white'} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-neutral-500 mb-4">Social</h3>
                    <div className="flex gap-6">
                      <a href="https://www.linkedin.com/in/nam-nguyen-620456304/" className="text-2xl hover:text-neutral-400 transition-colors" data-menu-item>Linkedin</a>
                      <a href="https://www.instagram.com/_nengoilanoah/" className="text-2xl hover:text-neutral-400 transition-colors" data-menu-item>Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="flex flex-col min-h-screen mt-[400px]">
        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center py-20 px-4">
          <div className="max-w-[1700px] w-full space-y-16">
            <TextAnimate animation="slideUp" by="word" once={true} duration={1.4} delay={1} className=" mb-[400px] w-[1500px] text-black text-9xl leading-tight">
              Nhu Nam Nguyen | Noah
               - Software Engineer
            </TextAnimate>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
            <BlurFade delay={3} inView>
              <img 
                src="https://assets.website-files.com/62b2c9962e8d1655b52d6347/62b2de16f9943a2e56767634_hero%20home.jpg"
                alt="Design showcase"
                className="object-cover w-full h-full"
              />
              </BlurFade>
            </div>
          </div>
        </section>

        <section className="py-32 px-4" id="about">
          <div className="max-w-[1700px] mx-auto grid grid-cols-2 gap-20">
            <div className="flex items-center">
              <TextAnimate animation="slideUp" by="word" once={true} delay={1} className="text-black text-8xl leading-tight">
                Aspiring Software Engineer
              </TextAnimate>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-2xl font-medium mb-4"><TextAnimate animation="fadeIn" by="line" className="text-lg text-gray-600" as="p" once={false} delay={1} >OBJECTIVE</TextAnimate></h3>
                <TextAnimate animation="fadeIn" by="line" className="text-lg text-gray-600" as="p"  delay={2} >Seeking the Software Engineering Intern position where I can leverage my expertise in programming, along with my passion for software development, to contribute to innovative projects and drive technological advancements.</TextAnimate>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4"><TextAnimate animation="fadeIn" by="line"  as="p"  delay={1} >EDUCATION</TextAnimate></h3>
                <h4 className="text-xl font-medium text-gray-800"><TextAnimate animation="fadeIn" by="line"  as="p"  delay={1} >Diploma in Computer Programming and Analysis</TextAnimate></h4>
                <div className="flex justify-between items-center mb-2">
                <TextAnimate animation="fadeIn" by="line" className="text-lg text-gray-600" as="p"  delay={2} >George Brown College | Toronto, ON</TextAnimate>
                <TextAnimate animation="fadeIn" by="line" className="text-lg text-gray-600" as="p"  delay={2} >Expected, April 2025</TextAnimate>
                </div>
                <TextAnimate animation="fadeIn" by="line" className="text-lg text-gray-600" as="p"  delay={2} >GPA: 3.14</TextAnimate>
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-4"><TextAnimate animation="fadeIn" by="line"  as="p"  delay={1} >Technical Skills</TextAnimate></h3>
                <div className="flex flex-col justify-between items-start mb-2">
                <TextAnimate animation="fadeIn" by="line" className="text-lg text-gray-600" as="p"  delay={2} >JAVA, C#, Python</TextAnimate>
                <TextAnimate animation="fadeIn" by="line" className="text-lg text-gray-600" as="p"  delay={2} >Object-Oriented design, Data Structure & Algorithm, Machine Learning</TextAnimate>
                <TextAnimate animation="fadeIn" by="line" className="text-lg text-gray-600" as="p"  delay={2} >Adobe Photoshop, React, React-Native</TextAnimate>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4" id="project">
          <div className="max-w-[1500px] mx-auto">
            <h2 className="text-4xl md:text-6xl mb-32"><TextAnimate animation="slideLeft" by="character" delay={4} duration={2}>Selected Projects</TextAnimate></h2>
            <div className="space-y-40">
              {projects.map((project, index) => (
                <a
                  href={project.link}
                  key={project.id}
                  data-project
                  className={`relative block group ${
                    index % 2 === 0 ? 'md:pr-[45%]' : 'md:pl-[45%] md:text-right'
                  }`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                  <BlurFade delay={0.25} inView>
                    <img
                      src={hoveredProject === project.id ? project.hoverImage : project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    </BlurFade>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-3xl font-medium mb-3">{project.title}</h3>
                    <p className="text-gray-600 text-lg">{project.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-black text-white py-32 px-4">
        
          <div className="max-w-[1500px] mx-auto">
            <div className="mb-20">
              <div className="inline-block px-4 py-2 bg-neutral-800 rounded-full mb-6">
                <span className="text-sm">Contact</span>
              </div>
              <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                <h2 className="text-5xl md:text-7xl font-light mb-8">
                  Want to start a project<br />together? Get in touch
                </h2>
              </BoxReveal>
            </div>
         
            <div className="space-y-12">
              <div>
                <h3 className="text-neutral-500 mb-4"><span>Email</span></h3>
                <div className="flex items-center gap-4">
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <span className="text-2xl md:text-3xl">ngnnhunam@gmail.com</span>
                  </BoxReveal>
                  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 hover:bg-neutral-800 rounded-lg transition-colors"
                    title="Copy email"
                    data-menu-item
                  >
                    <Copy size={20} className={copySuccess ? 'text-green-500' : 'text-white'} />
                  </button>
                  </BoxReveal>
                </div>
              </div>

              <div>
                <h3 className="text-neutral-500 mb-4">Social</h3>
                <div className="flex gap-6">
                  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <a href="https://www.linkedin.com/in/nam-nguyen-620456304/" className="text-2xl md:text-3xl hover:text-neutral-400 transition-colors" data-menu-item>Linkedin</a>
                  </BoxReveal>
                  <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                  <a href="https://www.instagram.com/_nengoilanoah/" className="text-2xl md:text-3xl hover:text-neutral-400 transition-colors" data-menu-item>Instagram</a>
                  </BoxReveal>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact-section" className="bg-black text-white py-8 px-4 border-t border-neutral-800">
          <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm text-neutral-500">
              Made with ✦ in Home | Copyright © 2024 Nam Nguyen Digital | 
              <a href="#" className="hover:text-white transition-colors" data-menu-item> Boring Legal Stuff</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;