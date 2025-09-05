import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Github, Linkedin } from "lucide-react"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-slate-800 to-purple-900">
      {/* <div className="max-w-4xl mx-auto px2- py-12"> */}
      <div className="max-w-7xl mx-auto px-4 py-12 pt-32 pb-12">
        {/* Header Section */}
        <header className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-6xl font-bold text-white mb-2 text-balance">MASHAL ZERAK</h1>
            <p className="text-xl text-gray-300 mb-4">MERN Stack Developer and AI App Builder</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>mashalzirak206@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>linkedin.com/in/mashal-zerak-b62947257</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4" />
                <span>github.com/mz505</span>
              </div>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-full">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </header>

        {/* Professional Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-2xl">
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-3">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["C", "C++", "C#", "Java", "JavaScript", "PHP"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-4 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-3">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "ASP.NET MVC", "Bootstrap", "TypeScript"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-4 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "MySQL", "SQL Server"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-4 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-3">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["GitHub", "Visual Studio", "VS Code", "Flask"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-4 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-600 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["English (Fluent)", "Pashto (Native)", "Urdu (Fluent)", "Persian (Fluent)"].map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-4 py-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
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
                className="bg-cyan-600 text-white hover:bg-cyan-700 rounded-full px-4 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
            PROFESSIONAL EXPERIENCE
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-300"></div>
            <div className="relative pl-12">
              <div className="absolute -left-1 top-2 w-3 h-3 bg-emerald-300 rounded-full"></div>
              <div className="text-sm text-white mb-2">06/2024 – Ongoing</div>
              <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Web Developer & IT Desk Manager</h3>
                <p className="text-cyan-400 mb-3">Akramzada International MHPSS</p>
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
            INTERNSHIP
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-emerald-300"></div>
            <div className="relative pl-12">
              <div className="absolute -left-1 top-2 w-3 h-3 bg-emerald-300 rounded-full"></div>
              <div className="text-sm text-white mb-2">2023</div>
              <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-white mb-2">ITCON Internship</h3>
                <ul className="text-white space-y-2">
                  <li>• Gained exposure to enterprise-level software systems.</li>
                  <li>• Assisted in full-stack development projects and database management.</li>
                  <li>• Collaborated in testing and requirement documentation.</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
            EDUCATION
          </h2>
          <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">BS Computer Science</h3>
            <p className="text-cyan-400 mb-2">NUML University, Islamabad</p>
            <p className="text-white">2021 – 2025</p>
          </Card>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
            PROJECTS
          </h2>
          <div className="space-y-6">
            <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">School Management System (ASP.NET + MySQL)</h3>
              <p className="text-white">
                Developed a complete school management platform for student records, attendance, and grade tracking with
                secure database integration.
              </p>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                NUML Afghan Student Council Platform (MERN Stack)
              </h3>
              <p className="text-white">
                Built an interactive web portal to manage events, announcements, and student interactions for NUML's
                Afghan Student Council.
              </p>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">E-Commerce Website (MERN Stack)</h3>
              <p className="text-white">
                Designed and implemented a scalable online shopping platform with product listings, cart system, and
                secure checkout.
              </p>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">HRMS System (MERN Stack + TypeScript)</h3>
              <p className="text-white">
                Developed a Human Resource Management System for Akramzada International MHPSS, including employee
                management, attendance, and payroll automation.
              </p>
            </Card>
            <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Pharmacy Management System (MERN Stack)</h3>
              <p className="text-white">
                Built a feature-rich pharmacy solution for inventory tracking, billing, and sales analytics.
              </p>
            </Card>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
            ACHIEVEMENTS
          </h2>
          <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-white font-medium">MunicipalIT Project Contribution</span>
                <span className="text-white">2023</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-white font-medium">Event Management – NUML CS Society</span>
                <span className="text-white">2022–2024</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Leadership Role – Afghan Student Council</span>
                <span className="text-white">2024</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Certifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-300 uppercase tracking-wide mb-6 border-b border-emerald-300 pb-2">
            CERTIFICATIONS
          </h2>
          <Card className="bg-black/40 backdrop-blur-sm border-gray-600/50 p-6 shadow-lg">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-white font-medium">Pink Lady Campaign Certificate</span>
                <span className="text-white">2023</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-white font-medium">NCSS Event Management Certificate</span>
                <span className="text-white">2023</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Afghan Student Council EBASSAY Verified Certificate</span>
                <span className="text-white">2024</span>
              </div>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 border-t border-gray-700">
          <h3 className="text-2xl font-bold text-gray-100 mb-2">MASHAL ZERAK</h3>
          <p className="text-gray-400 mb-6">MERN Stack Developer – Portfolio</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://linkedin.com/in/mashal-zerak-b62947257"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/mz505" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:mashalzirak206@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
