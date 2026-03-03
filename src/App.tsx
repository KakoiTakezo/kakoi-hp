import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Calendar,
  Mail,
  Linkedin,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const profile = {
    name: "栫 武蔵",
    nameEn: "Musashi Kakoi",
    age: 24,
    birthday: "2001年11月22日",
    origin: "奈良県",
    education: [
      "同志社大学 卒業",
      "同志社国際高校 卒業"
    ],
    career: {
      company: "株式会社DYM",
      department: "RPO事業部",
      role: "営業"
    }
  };

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif italic text-xl font-bold tracking-tight">{profile.nameEn}</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-500">
            <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
            <a href="#career" className="hover:text-stone-900 transition-colors">Career</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <section className="mb-32">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter mb-8 leading-none">
                {profile.name}
              </h1>
              <div className="flex flex-wrap gap-4 items-center text-stone-500 font-medium">
                <span className="px-4 py-2 rounded-full border border-stone-200 bg-white shadow-sm flex items-center gap-2">
                  <Briefcase size={16} />
                  {profile.career.company} {profile.career.role}
                </span>
                <span className="px-4 py-2 rounded-full border border-stone-200 bg-white shadow-sm flex items-center gap-2">
                  <MapPin size={16} />
                  {profile.origin}出身
                </span>
              </div>
            </motion.div>
          </section>

          {/* About & Education Split */}
          <section id="about" className="grid md:grid-cols-2 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-stone-400 font-bold mb-8 flex items-center gap-2">
                <User size={14} />
                Profile
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-stone-100">
                    <Calendar className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 font-medium">Age & Birthday</p>
                    <p className="text-xl font-medium">{profile.age}歳 ({profile.birthday}生まれ)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm border border-stone-100">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 font-medium">Origin</p>
                    <p className="text-xl font-medium">{profile.origin}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm uppercase tracking-widest text-stone-400 font-bold mb-8 flex items-center gap-2">
                <GraduationCap size={14} />
                Education
              </h2>
              <div className="space-y-4">
                {profile.education.map((edu, index) => (
                  <div key={index} className="group p-6 bg-white rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between">
                    <span className="text-xl font-medium">{edu}</span>
                    <ChevronRight className="text-stone-300 group-hover:text-emerald-500 transition-colors" />
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Career Section */}
          <section id="career" className="mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-stone-900 text-white rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h2 className="text-sm uppercase tracking-widest text-stone-500 font-bold mb-12 flex items-center gap-2">
                  <Briefcase size={14} />
                  Current Career
                </h2>
                <div className="max-w-2xl">
                  <h3 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                    {profile.career.company}にて<br />
                    <span className="text-emerald-400">{profile.career.department}</span>の営業として活動中。
                  </h3>
                  <p className="text-stone-400 text-lg leading-relaxed mb-8">
                    RPO（採用アウトソーシング）事業において、企業の採用課題を解決するための営業活動に従事しています。
                    クライアントのニーズに寄り添い、最適な採用戦略の提案を行っています。
                  </p>
                  <a 
                    href="https://dym.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white font-medium hover:text-emerald-400 transition-colors"
                  >
                    Visit DYM Website <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -ml-32 -mb-32" />
            </motion.div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <div className="text-center">
              <h2 className="text-sm uppercase tracking-widest text-stone-400 font-bold mb-12">Get in Touch</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a 
                  href="mailto:kakoi-ta@dym.jp" 
                  className="w-full md:w-auto px-8 py-4 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 font-medium"
                >
                  <Mail size={20} className="text-emerald-600" />
                  Email Me
                </a>
                <button 
                  className="w-full md:w-auto px-8 py-4 bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 font-medium opacity-50 cursor-not-allowed"
                >
                  <Linkedin size={20} className="text-emerald-600" />
                  LinkedIn (Coming Soon)
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-stone-400 text-sm">
          <p>© 2026 {profile.nameEn}. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
