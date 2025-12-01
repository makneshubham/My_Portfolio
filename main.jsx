import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Code, Database, Server, Award, Menu, X, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = {
    languages: ['Java', 'SQL'],
    frameworks: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Hibernate'],
    databases: ['MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Maven', 'Gradle', 'IntelliJ IDEA', 'Eclipse'],
    testing: ['JUnit', 'Mockito', 'Log4j'],
    deployment: ['Apache Tomcat', 'AWS (Basic)'],
    methodologies: ['RESTful APIs', 'OOP', 'Design Patterns', 'Agile/Scrum']
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">Shubham Makne</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {['about', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-medium transition-all duration-200 ${
                    activeSection === section
                      ? 'text-blue-600 scale-105'
                      : 'text-slate-600 hover:text-blue-500'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-800 p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-slate-200">
              {['about', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-4 py-3 capitalize font-medium transition-colors ${
                    activeSection === section
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-32 pb-20 mt-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <div className="relative">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%234a5568' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='60' text-anchor='middle' dy='.3em' fill='%23fff'%3ESM%3C/text%3E%3C/svg%3E"
                  alt="Shubham Makne"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4">Shubham Makne</h1>
              <h2 className="text-xl md:text-2xl mb-3 md:mb-4 text-blue-100">Java Backend Developer</h2>
              <p className="text-base md:text-lg mb-6 text-blue-50">
                1.5+ years of experience building robust and scalable backend solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="mailto:makneshubham561@gmail.com"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Mail size={20} />
                  Email Me
                </a>
                <a
                  href="tel:8805612101"
                  className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone size={20} />
                  Call Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <ChevronDown size={32} className="mx-auto animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Award className="text-blue-600" />
            About Me
          </h2>
          <div className="bg-slate-50 rounded-xl p-6 md:p-8 shadow-md">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              Java Backend Developer with <span className="font-semibold text-blue-600">1.5+ years of experience</span> in designing, 
              developing, and maintaining robust backend solutions. Currently working at <span className="font-semibold">SOFREGO PRIVATE LIMITED</span>, 
              I specialize in Java, Spring Boot, RESTful APIs, and database management with MySQL/PostgreSQL.
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mt-4">
              I'm passionate about implementing scalable server-side logic, optimizing performance, and ensuring high-quality 
              code through unit testing and best practices. Strong understanding of object-oriented programming, design patterns, 
              and agile methodologies, with proven ability to collaborate effectively in cross-functional teams.
            </p>
            <div className="mt-6 flex items-center gap-2 text-slate-600">
              <MapPin size={20} className="text-blue-600" />
              <span>Pune, Maharashtra, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-50 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Code className="text-blue-600" />
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-blue-600">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-green-600">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-purple-600">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => (
                  <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-orange-600">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-red-600">Testing & Deployment</h3>
              <div className="flex flex-wrap gap-2">
                {[...skills.testing, ...skills.deployment].map((skill) => (
                  <span key={skill} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-indigo-600">Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {skills.methodologies.map((skill) => (
                  <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Server className="text-blue-600" />
            Professional Experience
          </h2>
          
          {/* Company */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 shadow-lg mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-800">Java Developer</h3>
                <p className="text-lg md:text-xl text-blue-600 font-semibold">SOFREGO PRIVATE LIMITED</p>
              </div>
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
                June 2024 - Present
              </span>
            </div>
            
            {/* Project */}
            <div className="mt-6 bg-white rounded-lg p-5 md:p-6 shadow-md">
              <h4 className="text-lg md:text-xl font-bold text-slate-800 mb-2">Barclays Bank TM</h4>
              <p className="text-sm text-slate-600 mb-4">Role: Java Backend Developer</p>
              
              <p className="text-sm md:text-base text-slate-700 mb-4">
                A comprehensive banking application designed to manage customer transactions, accounts, and banking 
                operations efficiently. The system provides seamless, secure, and real-time transaction processing 
                while integrating with various banking modules to ensure operational accuracy and compliance.
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-slate-800 mb-2">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'Spring MVC', 'Hibernate', 'MySQL', 'RESTful APIs', 'Maven', 'Git', 'JUnit', 'Mockito', 'Apache Tomcat'].map((tech) => (
                    <span key={tech} className="bg-slate-100 text-slate-700 px-2 md:px-3 py-1 rounded-md text-xs md:text-sm border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold text-slate-800 mb-3">Key Responsibilities:</h5>
                <ul className="space-y-2">
                  <li className="flex gap-2 text-sm md:text-base text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Developed and maintained backend services using Java, Spring Boot, and Hibernate</span>
                  </li>
                  <li className="flex gap-2 text-sm md:text-base text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Designed and implemented RESTful APIs for seamless communication between frontend and backend</span>
                  </li>
                  <li className="flex gap-2 text-sm md:text-base text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Integrated and managed database operations using MySQL, ensuring data integrity and performance</span>
                  </li>
                  <li className="flex gap-2 text-sm md:text-base text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Implemented unit testing using JUnit and Mockito to ensure code quality and reliability</span>
                  </li>
                  <li className="flex gap-2 text-sm md:text-base text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Participated in code reviews, debugging, and performance optimization of backend modules</span>
                  </li>
                  <li className="flex gap-2 text-sm md:text-base text-slate-700">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Collaborated with cross-functional teams in an Agile/Scrum environment to deliver features on time</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-slate-50 rounded-xl p-6 md:p-8 shadow-md">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">Education</h3>
            <h4 className="text-base md:text-lg font-semibold text-slate-800">B.Tech in Information Technology</h4>
            <p className="text-blue-600 font-semibold mt-2">Savitribai Phule Pune University (SPPU)</p>
            <p className="text-slate-600 mt-1">Expected Graduation: 2025</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8">Let's Connect</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-blue-100">
            I'm always open to discussing new projects and opportunities
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <a
              href="mailto:makneshubham561@gmail.com"
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 md:gap-3 shadow-lg"
            >
              <Mail size={20} />
              <span className="text-sm md:text-base">makneshubham561@gmail.com</span>
            </a>
            <a
              href="tel:8805612101"
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2 md:gap-3 shadow-lg"
            >
              <Phone size={20} />
              <span className="text-sm md:text-base">8805612101</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base">© 2024 Shubham Makne. All rights reserved.</p>
          <p className="mt-2 text-sm md:text-base">Java Backend Developer | 1.5+ Years Experience</p>
        </div>
      </footer>
    </div>
  );
}
