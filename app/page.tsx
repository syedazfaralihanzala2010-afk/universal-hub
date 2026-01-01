import React from 'react';
import Link from 'next/link';
import { Sparkles, Globe, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] overflow-x-hidden text-neutral-200 selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow delay-1000" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm border rounded-full border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-purple-200">
          <Sparkles className="w-4 h-4" />
          <span>The Future of Collaboration is Here</span>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-cyan-200 sm:text-7xl md:text-8xl">
          Universal Hub
        </h1>

        <p className="max-w-2xl mt-6 text-lg text-neutral-400 sm:text-xl md:text-2xl leading-relaxed">
          The only platform you'll ever need. <br className="hidden sm:block" />
          <span className="text-purple-400">Video</span>. <span className="text-cyan-400">Messaging</span>. <span className="text-emerald-400">Finance</span>.
        </p>

        <div className="flex flex-col gap-4 mt-10 sm:flex-row sm:justify-center">
          <button className="group relative px-8 py-4 font-semibold text-white transition-all bg-purple-600 rounded-xl hover:bg-purple-700 hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(112,66,248,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              Download App <Globe className="w-5 h-5" />
            </span>
          </button>

          <Link href="/dashboard" className="px-8 py-4 font-semibold transition-all border text-neutral-300 border-neutral-700 rounded-xl hover:bg-neutral-800 hover:text-white backdrop-blur-sm flex items-center justify-center">
            Open in Browser
          </Link>
        </div>

        {/* Feature Grid Preview */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-6 mt-20 md:grid-cols-3 text-left">
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Native performance on all devices.", color: "text-amber-400" },
            { icon: Shield, title: "Bank-Grade Security", desc: "End-to-end encryption for everything.", color: "text-emerald-400" },
            { icon: Globe, title: "Universal Access", desc: "Works on Windows, Mac, iOS, Android, Linux.", color: "text-cyan-400" }
          ].map((feature, idx) => (
            <div key={idx} className="p-6 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <feature.icon className={`w-10 h-10 mb-4 ${feature.color}`} />
              <h3 className="text-xl font-bold text-white">{feature.title}</h3>
              <p className="mt-2 text-neutral-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
