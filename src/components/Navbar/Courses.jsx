import React, { useState } from 'react';
import {
    Clock,
    Award,
    BookOpen,
    GraduationCap,
    Monitor,
    Palette,
    Calculator,
    Globe,
    Shield,
    Code,
    Smartphone,
    Settings,
    Users,
    ChevronRight,
    Star,
    Calendar
} from 'lucide-react';

function Courses() {
    const [activeCategory, setActiveCategory] = useState('professional');

    const professionalCourses = [
        {
            title: "Term Certificate Courses",
            duration: "1–2 Months",
            description: "Quick skill-building courses for immediate career enhancement",
            color: "bg-blue-50 border-blue-200",
            courses: [
                { name: "MS Office Basics", icon: <Monitor className="w-5 h-5" />, popular: true },
                { name: "Tally Prime Basics", icon: <Calculator className="w-5 h-5" /> },
                { name: "Typing & Data Entry", icon: <BookOpen className="w-5 h-5" /> },
                { name: "Photoshop for Beginners", icon: <Palette className="w-5 h-5" />, popular: true },
                { name: "Basic Video Editing", icon: <Monitor className="w-5 h-5" /> },
                { name: "Social Media for Business", icon: <Globe className="w-5 h-5" /> },
                { name: "HTML & CSS Basics", icon: <Code className="w-5 h-5" /> },
                { name: "Soft Skills & Interview Preparation", icon: <Users className="w-5 h-5" /> },
                { name: "Internet & Email Handling", icon: <Globe className="w-5 h-5" /> },
                { name: "Basic Computer Fundamentals", icon: <Monitor className="w-5 h-5" /> }
            ]
        },
        {
            title: "Certificate Courses",
            duration: "6 Months",
            description: "Comprehensive programs for professional skill development",
            color: "bg-emerald-50 border-emerald-200",
            courses: [
                { name: "Advanced Office Management (with Tally)", icon: <Monitor className="w-5 h-5" />, popular: true },
                { name: "Advanced Graphic Designing", icon: <Palette className="w-5 h-5" /> },
                { name: "Advanced Tally & GST Accounting", icon: <Calculator className="w-5 h-5" /> },
                { name: "Web Designing Fundamentals", icon: <Code className="w-5 h-5" />, popular: true },
                { name: "E-Commerce Website Management", icon: <Globe className="w-5 h-5" /> },
                { name: "Computer Hardware & Networking (Basic)", icon: <Settings className="w-5 h-5" /> },
                { name: "Cyber Security Fundamentals", icon: <Shield className="w-5 h-5" /> },
                { name: "Computerized Financial Accounting (Tally + GST)", icon: <Calculator className="w-5 h-5" /> },
                { name: "Professional Data Entry & Typing Mastery", icon: <BookOpen className="w-5 h-5" /> }
            ]
        },
        {
            title: "Advanced Diploma Courses",
            duration: "1 Year",
            description: "Intensive programs for career specialization and advancement",
            color: "bg-orange-50 border-orange-200",
            courses: [
                { name: "Advanced Diploma in Office Management", icon: <Monitor className="w-5 h-5" /> },
                { name: "Advanced Diploma in Web Designing & Development", icon: <Code className="w-5 h-5" />, popular: true },
                { name: "Advanced Diploma in Digital Marketing", icon: <Globe className="w-5 h-5" />, popular: true },
                { name: "Advanced Diploma in Full Stack Web Development", icon: <Code className="w-5 h-5" /> },
                { name: "Advanced Diploma in Video Editing & Motion Graphics (Pro)", icon: <Monitor className="w-5 h-5" /> },
                { name: "Advanced Diploma in Industrial Designing", icon: <Palette className="w-5 h-5" /> },
                { name: "Advanced Diploma in Mobile App UI (Figma & Flutter)", icon: <Smartphone className="w-5 h-5" /> },
                { name: "Advanced Diploma in Computer Hardware & Networking (Advanced)", icon: <Settings className="w-5 h-5" /> },
                { name: "Advanced Diploma in UI/UX Design & Prototyping", icon: <Palette className="w-5 h-5" /> },
                { name: "Professional Diploma in Digital Office Administration", icon: <Monitor className="w-5 h-5" /> }
            ]
        }
    ];

    const universityCourses = [
        {
            title: "Distance Learning Courses",
            duration: "2-3 Years",
            description: "Flexible university degrees with distance learning support",
            color: "bg-purple-50 border-purple-200",
            courses: [
                { name: "BCA / MCA", icon: <GraduationCap className="w-5 h-5" />, popular: true },
                { name: "BBA / MBA", icon: <GraduationCap className="w-5 h-5" />, popular: true },
                { name: "BA / MA", icon: <GraduationCap className="w-5 h-5" /> },
                { name: "B.Com / M.Com", icon: <GraduationCap className="w-5 h-5" /> }
            ]
        },
        {
            title: "Online Regular Courses",
            duration: "3-4 Years",
            description: "Regular university programs delivered online",
            color: "bg-indigo-50 border-indigo-200",
            courses: [
                { name: "Online B.A. / B.Com / BBA", icon: <Monitor className="w-5 h-5" /> },
                { name: "Online Diploma in IT / HR / Marketing", icon: <Award className="w-5 h-5" /> },
                { name: "Certificate Courses via LMS Access", icon: <BookOpen className="w-5 h-5" /> }
            ]
        },
        {
            title: "B.Voc Courses (NSQF-Aligned)",
            duration: "3 Years",
            description: "Skill-based vocational courses with industry alignment",
            color: "bg-teal-50 border-teal-200",
            courses: [
                { name: "Retail Management", icon: <Users className="w-5 h-5" /> },
                { name: "Hospitality & Hotel Management", icon: <Users className="w-5 h-5" />, popular: true },
                { name: "Beauty & Wellness", icon: <Palette className="w-5 h-5" /> },
                { name: "Electrical / Technician Courses", icon: <Settings className="w-5 h-5" /> },
                { name: "COPA (Computer Operator & Programming Assistant)", icon: <Monitor className="w-5 h-5" /> },
                { name: "Fashion Designing", icon: <Palette className="w-5 h-5" /> },
                { name: "Mobile Repairing", icon: <Smartphone className="w-5 h-5" /> }
            ]
        }
    ];

    const CourseCard = ({ course, sectionColor }) => (
        <div className={`${sectionColor} p-4 rounded-lg border-2 hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="text-gray-600 group-hover:text-blue-600 transition-colors">
                        {course.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                        {course.name}
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    {course.popular && (
                        <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                        </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>
            </div>
        </div>
    );

    const SectionCard = ({ section }) => (
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                    <div className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{section.duration}</span>
                    </div>
                </div>
                <p className="text-gray-600 text-sm">{section.description}</p>
            </div>
            <div className="p-6">
                <div className="grid gap-3">
                    {section.courses.map((course, index) => (
                        <CourseCard key={index} course={course} sectionColor={section.color} />
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Transform Your Career with Our
                            <span className="block text-blue-300" >
                                Professional Courses
                            </span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                            Choose from our comprehensive range of professional and university courses
                            designed to enhance your skills and advance your career in today's competitive market.
                        </p>
                        <div className="flex items-center justify-center space-x-8 text-sm">
                            <div className="flex items-center space-x-2">
                                <Award className="w-5 h-5 text-yellow-400" />
                                <span>Industry-Recognized Certificates</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-green-400" />
                                <span>Expert Instructors</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-5 h-5 text-blue-400" />
                                <span>Flexible Scheduling</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-full p-1 shadow-lg border border-gray-200">
                        <button
                            onClick={() => setActiveCategory('professional')}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === 'professional'
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            Professional Courses
                        </button>
                        <button
                            onClick={() => setActiveCategory('university')}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === 'university'
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'text-gray-600 hover:text-blue-600'
                                }`}
                        >
                            University Courses
                        </button>
                    </div>
                </div>

                {/* Course Sections */}
                <div className="grid gap-8 lg:gap-12">
                    {activeCategory === 'professional' && (
                        <div className="space-y-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Courses</h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Build practical skills with our hands-on professional courses, from basic computer skills to advanced specializations.
                                </p>
                            </div>
                            {professionalCourses.map((section, index) => (
                                <SectionCard key={index} section={section} />
                            ))}
                        </div>
                    )}

                    {activeCategory === 'university' && (
                        <div className="space-y-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">University Courses</h2>
                                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                    Pursue higher education with our flexible university programs, available through distance learning and online platforms.
                                </p>
                            </div>
                            {universityCourses.map((section, index) => (
                                <SectionCard key={index} section={section} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Call to Action */}
                <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Join thousands of students who have transformed their careers with our comprehensive courses.
                        Get personalized guidance and flexible learning options.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                            Get Free Consultation
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;