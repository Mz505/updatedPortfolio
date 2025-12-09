import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Github, Linkedin } from "lucide-react"

export default function CVPage() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Mashal-zerak-cv.pdf';
    link.download = 'Mashal-Zerak-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen w-full relative bg-transparent">
      {/* Copper Forge Background with Top Glow */}
      <div className="section-glow z-0" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 pt-20 sm:pt-32 pb-12">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-12 sm:mb-16">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 text-balance relative inline-block">
              MASHAL ZERAK
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full nav-underline" style={{animation: 'underlineGlow 2s ease-in-out infinite'}}></div>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-4">MERN Stack Developer and AI App Builder</p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="break-all">mashalzirak206@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://linkedin.com/in/mashal-zerak-b62947257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  linkedin.com/in/mashal-zerak-b62947257
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 flex-shrink-0" />
                <a
                  href="https://github.com/mz505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  github.com/mz505
                </a>
              </div>
            </div>
          </div>
          <Button 
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base w-full sm:w-auto lg:flex-shrink-0"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </header>

        {/* Professional Summary */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-6 shadow-2xl">
            <p className="text-white leading-relaxed">
              Computer Science graduate from NUML University with strong expertise in full-stack web development (MERN)
              and hands-on experience in software project development, data analysis, reporting, and event management.
              Skilled in designing user-centric applications and delivering structured solutions. Currently working as a
              Full Stack Web Developer and Data Analyst at Akramzada International MHPSS. Passionate about building
              scalable software systems and exploring AI-powered web applications as a career path.
            </p>
          </Card>
        </section>

        {/* Technical Skills */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-600 mb-2 sm:mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["C", "C++", "C#", "Java", "JavaScript", "PHP"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-600 mb-2 sm:mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "ASP.NET MVC", "Bootstrap", "TypeScript"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-600 mb-2 sm:mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "MySQL", "SQL Server"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-600 mb-2 sm:mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["GitHub", "Visual Studio", "VS Code", "Flask"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-amber-600 mb-2 sm:mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["English (Fluent)", "Pashto (Native)", "Urdu (Fluent)", "Persian (Fluent)"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            SOFT SKILLS
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Problem Solving",
              "Leadership",
              "Team Collaboration",
              "Adaptability",
              "Event Management",
              "Reporting & Documentation",
            ].map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-3 sm:px-4 py-1 text-xs sm:text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="relative">
            <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 bg-emerald-300"></div>
            <div className="relative pl-6 sm:pl-12">
              <div className="absolute -left-1 sm:-left-1 top-2 w-3 h-3 bg-emerald-300 rounded-full"></div>
              <div className="text-xs sm:text-sm text-white mb-2">06/2024 – Ongoing</div>
              <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Web Developer & IT Desk Manager</h3>
                <p className="text-cyan-400 mb-3 text-sm sm:text-base">Akramzada International MHPSS</p>
                <ul className="text-white space-y-2">
                  <li>• Developing and maintaining internal web systems using MERN stack and TypeScript.</li>
                  <li>• Managing IT infrastructure, troubleshooting, and user support.</li>
                  <li>• Conducting data analysis and preparing structured reporting dashboards.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Internships */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            INTERNSHIP
          </h2>
          <div className="relative">
            <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 bg-emerald-300"></div>
            <div className="relative pl-6 sm:pl-12">
              <div className="absolute -left-1 sm:-left-1 top-2 w-3 h-3 bg-emerald-300 rounded-full"></div>
              <div className="text-xs sm:text-sm text-white mb-2">2023</div>
              <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">ITCON Internship</h3>
                <ul className="text-white space-y-2 text-sm sm:text-base">
                  <li>• Gained exposure to enterprise-level software systems.</li>
                  <li>• Assisted in full-stack development projects and database management.</li>
                  <li>• Collaborated in testing and requirement documentation.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            EDUCATION
          </h2>
          <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">BS Computer Science</h3>
            <p className="text-cyan-400 mb-2 text-sm sm:text-base">NUML University, Islamabad</p>
            <p className="text-white text-sm sm:text-base">2021 – 2025</p>
          </Card>
        </section>

        {/* Projects */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            PROJECTS
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">School Management System (ASP.NET + MySQL)</h3>
              <p className="text-white text-sm sm:text-base">
                Developed a complete school management platform for student records, attendance, and grade tracking with
                secure database integration.
              </p>
            </Card>
            <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">
                NUML Afghan Student Council Platform (MERN Stack)
              </h3>
              <p className="text-white text-sm sm:text-base">
                Built an interactive web portal to manage events, announcements, and student interactions for NUML's
                Afghan Student Council.
              </p>
            </Card>
            <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">LocalShops — Community Marketplace (MERN Stack)</h3>
              <p className="text-white text-sm sm:text-base">
                Modern marketplace focused on local businesses: product browsing, smart cart, guest checkout, order tracking, and responsive UI. Live preview at localsshop.netlify.app.
              </p>
            </Card>
            <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">HRMS System (MERN Stack + TypeScript)</h3>
              <p className="text-white">
                Developed a Human Resource Management System for Akramzada International MHPSS, including employee
                management, attendance, and payroll automation.
              </p>
            </Card>
            <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">Pharmacy Management System (MERN Stack)</h3>
              <p className="text-white text-sm sm:text-base">
                Built a feature-rich pharmacy solution for inventory tracking, billing, and sales analytics.
              </p>
            </Card>
            <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">Explor‑Afghanistan (Mobile App)</h3>
              <p className="text-white text-sm sm:text-base">
                Tourism companion with hotel booking, transport reservation, AI recommendations, live maps, and real‑time weather. Live preview link available on portfolio.
              </p>
            </Card>

            <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">Hill Calories AI (React + TypeScript)</h3>
              <p className="text-white text-sm sm:text-base">
                AI‑powered meal analysis using image recognition to deliver instant nutrition breakdowns (calories, macros, micros), daily dashboard, charts, history, and sharing. Live at mealanalyzer.netlify.app; code at github.com/Mz505/Meal_Analyzer.
              </p>
            </Card>
            <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">Fursats Afghan — Job Portal (React + Supabase)</h3>
              <p className="text-white text-sm sm:text-base">
                Job portal connecting seekers, employers, and admins in Afghanistan. Single‑page app built with Vite + React + Tailwind + shadcn/ui. Data and auth powered by Supabase (Postgres, Auth, Storage, Row Level Security, Edge Functions) with PostgREST via @supabase/supabase‑js and React Query for caching. Features include dashboards, job search and filters, applications tracking, company verification, and Stripe‑powered subscription plans. Live demo: fursatsjobs.netlify.app.
              </p>
            </Card>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            ACHIEVEMENTS
          </h2>
          <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-2 gap-1 sm:gap-0">
                <span className="text-white font-medium text-sm sm:text-base">MunicipalIT Project Contribution</span>
                <span className="text-white text-sm sm:text-base">2023</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-2 gap-1 sm:gap-0">
                <span className="text-white font-medium text-sm sm:text-base">Event Management – NUML CS Society</span>
                <span className="text-white text-sm sm:text-base">2022–2024</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="text-white font-medium text-sm sm:text-base">Leadership Role – Afghan Student Council</span>
                <span className="text-white text-sm sm:text-base">2024</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Certifications */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-4 sm:mb-6 border-b border-emerald-300 pb-2">
            CERTIFICATIONS
          </h2>
          <Card className="bg-transparent backdrop-blur-sm border-gray-600/50 p-4 sm:p-6 shadow-lg">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-2 gap-1 sm:gap-0">
                <span className="text-white font-medium text-sm sm:text-base">Pink Lady Campaign Certificate</span>
                <span className="text-white text-sm sm:text-base">2023</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-600 pb-2 gap-1 sm:gap-0">
                <span className="text-white font-medium text-sm sm:text-base">NCSS Event Management Certificate</span>
                <span className="text-white text-sm sm:text-base">2023</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-0">
                <span className="text-white font-medium text-sm sm:text-base">Afghan Student Council EMBASSAY Verified Certificate</span>
                <span className="text-white text-sm sm:text-base">2024</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 sm:pt-12 border-t border-gray-700">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">MASHAL ZERAK</h3>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">MERN Stack Developer – Portfolio</p>
          <div className="flex justify-center gap-4 sm:gap-6">
            <a
              href="https://linkedin.com/in/mashal-zerak-b62947257"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://github.com/mz505" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:mashalzirak206@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
