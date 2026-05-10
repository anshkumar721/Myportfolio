export default function Portfolio() {
  const projects = [
    {
      title: "Road Damage Detection",
      description:
        "YOLOv11-powered AI system for detecting potholes and road cracks using computer vision.",
      tech: ["YOLOv11", "Deep Learning", "Computer Vision"],
      github: "https://github.com/anshkumar721/Road-Damage-Detection",
    },
    {
      title: "SZABIST Gharo Website",
      description:
        "Responsive university website with sliders, animations, and modern UI design.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/anshkumar721/SZABIST_Demo_Design",
    },
    {
      title: "CRUD Desktop App",
      description:
        "Desktop CRUD application developed using .NET Windows Forms and SQL database.",
      tech: [".NET", "Windows Forms", "SQL"],
      github: "https://github.com/anshkumar721/CRUD_Project",
    },
    {
      title: "Plagiarism Detection",
      description:
        "Machine learning based plagiarism detection system for efficient text analysis.",
      tech: ["Python", "Machine Learning"],
      github: "https://github.com/anshkumar721/Plagiarism_Detection",
    },
    {
  title: "Customer Churn Prediction",
  description:
    "A machine learning project designed to predict customer churn behavior using data analytics, predictive modeling, and classification algorithms.",
  tech: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
  github: "https://github.com/anshkumar721/Customer-Churn-Prediction-",
},
  ];

  const skills = [
    "C++",
    "Java",
    "Python",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Machine Learning",
    "MS Office",
    "AI prompting",
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 blur-3xl opacity-20 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 blur-3xl opacity-20 rounded-full" />

      {/* Modern Navbar */}
<nav className="sticky top-0 z-50 backdrop-blur-2xl bg-black/30 border-b border-white/10">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    {/* Logo */}
    <h1 className="text-3xl font-black tracking-widest bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
      PORTFOLIO.
    </h1>

    {/* Navigation */}
    <div className="hidden md:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-xl">

      <a
        href="#about"
        className="px-4 py-2 rounded-full hover:bg-pink-500 hover:text-white transition duration-300"
      >
        About Me
      </a>

      <a
        href="#experience"
        className="px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-black transition duration-300"
      >
        Experience
      </a>

      <a
        href="#skills"
        className="px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition duration-300"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-semibold hover:scale-105 transition"
      >
        Contact
      </a>

    </div>
  </div>
</nav>
      {/* Hero Section */}
      <section
        id="about"
        className="relative z-10 px-6 md:px-16 py-24 flex flex-col lg:flex-row-reverse items-center justify-between gap-16"
      >

        {/* Image */}
        <div className="relative flex justify-center items-center lg:w-1/2">

          <div className="absolute -top-10 -left-8 w-36 h-36 bg-pink-500/30 blur-3xl rounded-full animate-pulse" />

          <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-400/30 blur-3xl rounded-full animate-bounce" />

          <img
            src="/Profile.jpg"
            alt="Ansh Kumar"
            className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-[40px] border-4 border-white/10 shadow-2xl shadow-pink-500/30 hover:scale-105 transition duration-500 relative z-10"
          />
        </div>

        {/* Text */}
        <div className="max-w-2xl lg:w-1/2 text-center lg:text-left">

          <p className="uppercase tracking-[0.4em] text-purple-400 text-sm mb-4">
            BSCS 6th Semester • Developer • AI Enthusiast
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            ABOUT{" "}
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ME
            </span>
            <br />
             </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Hi! I’m{" "}
            <span className="font-bold text-white">
              Ansh Kumar
            </span>{" "}
            a passionate BSCS student at SZABIST University, Gharo Campus with strong
  interest in software engineering, artificial intelligence,
  machine learning, and modern web development. I enjoy building
  creative digital experiences that combine clean design with
  real-world problem solving. From AI-powered systems to responsive
  web applications, I constantly explore new technologies to improve
  my skills and create impactful projects.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-5">

            <a
              href="/Anshresume.pdf"
              download
              className="px-8 py-3 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 font-semibold hover:scale-105 transition"
            >
              📄 Download Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-2xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
            >
              💬 Contact Me
            </a>

          </div>
        </div>
      </section>

      {/* Skills Section */}
<section
  id="skills"
  className="relative z-10 py-24 overflow-hidden"
>

  <h2 className="text-5xl font-black text-center mb-16">
    Skills ⚡
  </h2>

  <div className="relative overflow-hidden">

    <div className="flex gap-6 whitespace-nowrap animate-[scroll_20s_linear_infinite] w-max">

      {[...skills, ...skills].map((skill, index) => (
        <div
          key={index}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-white/10 backdrop-blur-xl text-lg font-semibold hover:scale-110 transition"
        >
          {skill}
        </div>
      ))}

    </div>

  </div>
</section> 
      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 px-6 md:px-16 py-20"
      >

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-black mb-4 text-center">
            GitHub Projects 💻
          </h2>

          <p className="text-center text-gray-400 mb-12">
            A collection of AI, software engineering, and web development projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 hover:border-pink-400/40 transition"
              >

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm bg-pink-500/20 border border-pink-500/20"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-5 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition"
                >
                  View Project
                </a>

              </div>
            ))}

          </div>
        </div>
      </section>
    {/* Experience Section */}
<section
  id="experience"
  className="relative z-10 px-6 md:px-16 py-24"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-black text-center mb-16">
      Experience 🚀
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* Internship 1 */}
      <div className="group bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl hover:border-pink-400/50 hover:-translate-y-3 transition duration-500">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-2xl">
            💻
          </div>

          <div>
            <h3 className="text-2xl font-bold text-pink-400">
              IT Department Intern
            </h3>

            <p className="text-gray-400">
              NJV Government Higher Secondary School, Karachi
            </p>
          </div>
        </div>

        <p className="text-cyan-300 font-semibold mb-4">
          Duration: 3 Months
        </p>

        <p className="text-gray-300 leading-relaxed">
          Assisted the IT department in managing computer systems,
          troubleshooting technical issues, maintaining software,
          and supporting digital infrastructure. Learned practical
          networking concepts, system maintenance, hardware handling,
          and real-world teamwork in an educational environment.
        </p>

      </div>

      {/* Internship 2 */}
      <div className="group bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl hover:border-cyan-400/50 hover:-translate-y-3 transition duration-500">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
            ⚙️
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              Computer Operator
            </h3>

            <p className="text-gray-400">
              Shehbaz Mill, Gharo
            </p>
          </div>
        </div>

        <p className="text-pink-300 font-semibold mb-4">
          Experience
        </p>

        <p className="text-gray-300 leading-relaxed">
          Observed industrial operations and technical workflows
          within the manufacturing environment. Gained exposure to
          operational management, machinery systems, workplace
          discipline, production processes, and problem-solving in
          large-scale industrial settings.
        </p>

      </div>

    </div>
  </div>
</section>
      {/* Education Section */}
<section
  id="education"
  className="relative z-10 px-6 md:px-16 py-24"
>

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-black text-center mb-16">
      Education 🎓
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* University */}
      <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl hover:-translate-y-3 transition duration-500">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-2xl">
            🎓
          </div>

          <div>
            <h3 className="text-2xl font-bold">
              SZABIST University – Gharo Campus
            </h3>

            <p className="text-gray-400">
              Bachelor of Science in Computer Science
            </p>
          </div>

        </div>

        <p className="text-cyan-300 font-semibold mb-4">
          Currently in 6th Semester
        </p>

        <p className="text-gray-300 leading-relaxed">
          Focused on software engineering, artificial intelligence,
          machine learning, web development, and modern computing
          technologies while developing academic and real-world projects.
        </p>

      </div>

      {/* College */}
      <div className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-2xl hover:-translate-y-3 hover:border-cyan-400/40 transition duration-500">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-2xl">
            📚
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cyan-400">
              NJV Government Higher Secondary School
            </h3>

            <p className="text-gray-400">
              Karachi, Pakistan
            </p>
          </div>

        </div>

        <p className="text-pink-300 font-semibold mb-4">
          Intermediate Education — 2023
        </p>

        <p className="text-gray-300 leading-relaxed">
          Completed intermediate education with focus on academic
          growth, technical learning, and foundational computer
          knowledge that inspired the journey toward software
          development and AI technologies.
        </p>

      </div>

    </div>
  </div>
</section>
      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 px-6 md:px-16 py-20"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-black mb-8">
            Let’s Connect 🌐
          </h2>

          <p className="text-gray-300 text-lg mb-12">
            Open to internships, collaborations, and tech opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <a
              href="mailto:anshulochwani395@gmail.com"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-pink-400 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                Email
              </h3>

              <p className="text-gray-400">
                anshulochwani395@gmail.com
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/ansh-kumar-7004702b2/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                LinkedIn
              </h3>

              <p className="text-gray-400">
                Connect with me
              </p>
            </a>

            <a
              href="https://instagram.com/ansh.lochwani"
              target="_blank"
              rel="noreferrer"
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-400 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                Instagram
              </h3>

              <p className="text-gray-400">
                @ansh.lochwani
              </p>
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Ansh Lochwani — Crafted with creativity & code ✨
      </footer>

    </main>
  );
}
