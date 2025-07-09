import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronRight, 
  BookOpen, 
  Users, 
  Award, 
  MapPin, 
  Phone, 
  Mail,
  Star,
  Calendar,
  CheckCircle,
  ArrowRight,
  School,
  Trophy,
  Heart,
  Target,
  Camera,
  Play,
  Zap,
  Globe
} from 'lucide-react';

// Import components and configuration
import ParticleBackground from './components/ParticleBackground.jsx';
import AnimatedSection from './components/AnimatedSection.jsx';
import FloatingElements from './components/FloatingElements.jsx';
import { imageConfig } from './assets/images/imageConfig.js';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-bluke-100 to-blue-100 p-2 rounded-xl shadow-lg">
              <img 
              src="/src/assets/images/logo1.jpeg" 
              alt="School Logo"
              className="h-12 w-14 object-contain"
              />
              </div>
              <div>
                <h1 className={`font-bold text-lg transition-all duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white text-shadow'
                }`}>
                  Sri Vivekananda Vidyalaya
                </h1>
                <p className={`text-sm transition-all duration-300 ${
                  scrolled ? 'text-gray-600' : 'text-blue-100'
                }`}>
                  Excellence in Education
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Academics', 'Facilities', 'Sports', 'Achievements', 'Gallery', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-yellow-300'
                  }`}
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>

          {/* Enhanced Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {['Home', 'About', 'Academics', 'Facilities', 'Sports', 'Achievements', 'Gallery', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground id="hero-particles" className="absolute inset-0" />
        
        {/* Floating Elements */}
        <FloatingElements />
        
        {/* Background Layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url("${imageConfig.hero.background}")` }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl md:text-8xl font-bold mb-6 leading-tight text-shadow-lg"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Sri Vivekananda Vidyalaya
              <motion.span 
                className="block text-3xl md:text-5xl text-yellow-400 mt-4 gradient-text-warm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Matric Hr.Sec.School
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-4 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              📍 Mailpatti, Pernambut
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-200 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              🌟 Nurturing minds, shaping futures. Excellence in education since our inception.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <motion.button
                onClick={() => scrollToSection('admissions')}
                className="btn-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                🎓 Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => scrollToSection('about')}
                className="glass border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                📖 Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronRight className="h-8 w-8 text-white rotate-90 opacity-70" />
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 gradient-text"
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.8 }}
            >
              🏫 About Our School
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Committed to providing quality education that empowers students to achieve their full potential and become responsible global citizens.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-8">
                {[
                  {
                    icon: Target,
                    title: "🎯 Our Mission",
                    description: "To provide holistic education that develops intellectual, emotional, and social capabilities of every student, preparing them for future challenges.",
                    color: "text-blue-600"
                  },
                  {
                    icon: Heart,
                    title: "❤️ Our Values",
                    description: "Integrity, Excellence, Compassion, and Innovation guide everything we do in nurturing the next generation of leaders.",
                    color: "text-red-500"
                  },
                  {
                    icon: Trophy,
                    title: "🏆 Our Achievement",
                    description: "Consistent academic excellence with 100% pass rates and numerous awards in academics, sports, and cultural activities.",
                    color: "text-yellow-500"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover-lift"
                    whileHover={{ x: 10 }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <item.icon className={`h-8 w-8 ${item.color} mt-1 animate-pulse-glow`} />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={imageConfig.about.schoolExterior}
                  alt="🏫 School Building"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
                <motion.div 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Camera className="h-6 w-6 text-blue-600" />
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>

          {/* Enhanced Statistics */}
          <AnimatedSection className="mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '25+', label: 'Years of Excellence', icon: '🎓' },
                { number: '1000+', label: 'Students', icon: '👥' },
                { number: '50+', label: 'Qualified Teachers', icon: '👨‍🏫' },
                { number: '100%', label: 'Pass Rate', icon: '📊' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-lg hover-lift"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Academics Section */}
      <section id="academics" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 gradient-text-cool">
              🎓 Academic Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive curriculum designed to foster critical thinking, creativity, and academic achievement at every level.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: '📚 Primary Education',
                description: 'Strong foundation with focus on fundamental skills, creative learning, and character development.',
                features: ['Classes I-V', 'Activity-based Learning', 'Art & Craft', 'Sports Integration'],
                image: imageConfig.academics.smartClassroom,
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Users,
                title: '🔬 Secondary Education',
                description: 'Comprehensive middle school program preparing students for higher secondary education.',
                features: ['Classes VI-X', 'CBSE Curriculum', 'Science Labs', 'Computer Education'],
                image: imageConfig.academics.biologyClass,
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Award,
                title: '🎯 Higher Secondary',
                description: 'Specialized streams to prepare students for competitive exams and higher education.',
                features: ['Classes XI-XII', 'Science & Commerce', 'Career Guidance', 'Exam Preparation'],
                image: imageConfig.academics.physicsClass,
                color: 'from-purple-500 to-purple-600'
              }
            ].map((program, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift card-hover"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-80`}></div>
                    <div className="absolute top-4 left-4">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <ul className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Facilities Section */}
      <section id="facilities" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 gradient-text-warm">
              🏢 World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              State-of-the-art infrastructure and modern amenities to support comprehensive learning and development.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '💻 Smart Classrooms',
                description: 'Interactive whiteboards and digital learning tools for enhanced education.',
                image: imageConfig.facilities.computerLab,
                icon: '💻'
              },
              {
                title: '🔬 Science Laboratories',
                description: 'Well-equipped physics, chemistry, and biology labs for practical learning.',
                image: imageConfig.facilities.scienceLab,
                icon: '🔬'
              },
              {
                title: '📚 Library & Resources',
                description: 'Extensive collection of books, journals, and digital resources.',
                image: imageConfig.facilities.library,
                icon: '📚'
              },
              {
                title: '⚽ Sports Complex',
                description: 'Multiple sports facilities including playground, courts, and indoor games.',
                image: imageConfig.facilities.playground,
                icon: '⚽'
              },
              {
                title: '🖥️ Computer Lab',
                description: 'Modern computers with high-speed internet for digital literacy.',
                image: imageConfig.facilities.computerLab,
                icon: '🖥️'
              },
              {
                title: '🎭 Auditorium',
                description: 'Spacious auditorium for cultural events, seminars, and presentations.',
                image: imageConfig.facilities.auditorium,
                icon: '🎭'
              }
            ].map((facility, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover-lift card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 text-3xl">
                      {facility.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* New Sports Section */}
      <section id="sports" className="py-20 bg-gradient-to-br from-green-50 to-blue-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 gradient-text-cool">
              ⚽ Sports & Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Promoting physical fitness, teamwork, and sportsmanship through diverse athletic programs and recreational activities.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: '🏏 Cricket',
                description: 'Professional cricket coaching and inter-school tournaments.',
                image: imageConfig.sports.cricket,
                icon: '🏏'
              },
              {
                title: '🏐 Volleyball',
                description: 'Team building through volleyball matches and training.',
                image: imageConfig.sports.volleyball,
                icon: '🏐'
              },
              {
                title: '🏃‍♂️ Sports Day',
                description: 'Annual sports day celebration with various competitions.',
                image: imageConfig.sports.sportsDay,
                icon: '🏃‍♂️'
              },
              {
                title: '🎮 Kids Activities',
                description: 'Fun recreational activities for overall development.',
                image: imageConfig.sports.kidsPlaying,
                icon: '🎮'
              }
            ].map((sport, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="bg-white rounded-2xl overflow-hidden shadow-xl hover-lift"
                  whileHover={{ y: -10, rotateY: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={sport.image}
                      alt={sport.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-3xl mb-2">{sport.icon}</div>
                      <h3 className="text-lg font-semibold">{sport.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600">{sport.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* New Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 gradient-text-warm">
              🏆 Student Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Celebrating the outstanding accomplishments of our students in academics, sports, and extracurricular activities.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                {[
                  {
                    title: '🥇 Academic Excellence',
                    description: 'State-level toppers in board examinations with 100% pass rate.',
                    stats: '95% First Class'
                  },
                  {
                    title: '🏆 Sports Champions',
                    description: 'District and state level winners in various sports competitions.',
                    stats: '50+ Medals'
                  },
                  {
                    title: '🎨 Cultural Awards',
                    description: 'Recognition in dance, music, drama, and art competitions.',
                    stats: '25+ Trophies'
                  }
                ].map((achievement, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-lg hover-lift"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ x: 10 }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 mb-2">{achievement.description}</p>
                    <div className="text-blue-600 font-semibold">{achievement.stats}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  imageConfig.achievements.childAchievement1,
                  imageConfig.achievements.childAchievement2,
                  imageConfig.achievements.awards,
                  imageConfig.achievements.celebration
                ].map((image, index) => (
                  <motion.div 
                    key={index}
                    className="relative overflow-hidden rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image}
                      alt={`Achievement ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* New Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <ParticleBackground id="gallery-particles" className="absolute inset-0 opacity-30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              📸 School Gallery
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Capturing memorable moments and milestones in our school's journey of excellence.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.values(imageConfig.gallery).map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div 
                  className="relative overflow-hidden rounded-xl shadow-2xl group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <ParticleBackground id="contact-particles" className="absolute inset-0 opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">📞 Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We're here to help you with any questions about admissions, academics, or our school community.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">📍 Contact Information</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Address",
                      content: ["Sri Vivekananda Vidyalaya Matric Hr.Sec.School", "Mailpatti, Pernambut", "Tamil Nadu, India"],
                      color: "text-yellow-400"
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      content: ["+91 XXXXX XXXXX", "+91 XXXXX XXXXX"],
                      color: "text-green-400"
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      content: ["info@svvschool.edu.in", "admissions@svvschool.edu.in"],
                      color: "text-blue-400"
                    }
                  ].map((contact, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <contact.icon className={`h-6 w-6 ${contact.color} mt-1 animate-pulse-glow`} />
                      <div>
                        <h4 className="font-medium mb-1">{contact.title}</h4>
                        {contact.content.map((line, idx) => (
                          <p key={idx} className="text-gray-300">{line}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-2xl font-semibold mb-6">💌 Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.input
                      type="text"
                      placeholder="Your Name"
                      className="form-input bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 backdrop-blur-sm"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.input
                      type="email"
                      placeholder="Your Email"
                      className="form-input bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 backdrop-blur-sm"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <motion.input
                    type="text"
                    placeholder="Subject"
                    className="form-input w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 backdrop-blur-sm"
                    whileFocus={{ scale: 1.02 }}
                  />
                  <motion.textarea
                    rows={4}
                    placeholder="Your Message"
                    className="form-input w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 resize-none backdrop-blur-sm"
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                  <motion.button
                    type="submit"
                    className="w-full btn-secondary text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    📤 Send Message
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-black text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg">
                  <School className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sri Vivekananda Vidyalaya</h3>
                  <p className="text-sm text-gray-400">Excellence in Education</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                🌟 Committed to nurturing young minds and shaping the leaders of tomorrow through quality education and values.
              </p>
            </motion.div>

            {[
              {
                title: "🔗 Quick Links",
                links: ['About Us', 'Academics', 'Admissions', 'Facilities', 'Contact']
              },
              {
                title: "📚 Programs",
                links: ['Primary Education (I-V)', 'Secondary Education (VI-X)', 'Higher Secondary (XI-XII)', 'Extracurricular Activities']
              },
              {
                title: "📞 Contact Info",
                links: ['Mailpatti, Pernambut', 'Tamil Nadu, India', 'Phone: +91 XXXXX XXXXX', 'Email: info@svvschool.edu.in']
              }
            ].map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      {index === 0 ? (
                        <button
                          onClick={() => scrollToSection(link.toLowerCase().replace(' ', ''))}
                          className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                        >
                          {link}
                        </button>
                      ) : (
                        <span className="text-gray-400">{link}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="border-t border-gray-800 mt-8 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-400 text-sm">
              © 2024 Sri Vivekananda Vidyalaya Matric Hr.Sec.School. All rights reserved. 
              <span className="ml-2">🚀 Built with React & Tailwind CSS</span>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;