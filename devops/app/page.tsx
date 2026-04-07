"use client";

import React, { useState } from "react";
import { Zap, GitBranch, RefreshCw, BarChart3, Database, ShieldCheck, ArrowRight, Play } from "lucide-react";

// --- Data ---
const pillars = [
  { icon: Zap, title: "Automation", desc: "Eliminate manual tasks with CI/CD and IaC." },
  { icon: GitBranch, title: "Collaboration", desc: "Unify Development and Operations teams." },
  { icon: RefreshCw, title: "Continuous Iteration", desc: "Deploy small changes frequently and safely." },
  { icon: BarChart3, title: "Monitoring", desc: "Gain real-time visibility into infrastructure health." },
];

const pipelineStages = ["Plan", "Code", "Build", "Test", "Release", "Deploy", "Operate", "Monitor"];

const tools = [
  { name: "Jenkins", logo: "🏗️" },
  { name: "Docker", logo: "🐋" },
  { name: "Kubernetes", logo: "☸️" },
  { name: "Terraform", logo: "🛠️" },
  { name: "AWS", logo: "☁️" },
  { name: "Prometheus", logo: "📊" },
];

// --- Sub-components ---
const StatCard = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center shadow-inner">
    <div className="text-4xl font-black text-indigo-600 tracking-tight">{value}</div>
    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">{label}</div>
  </div>
);

// --- Main Landing Page ---
export default function DevOpsLandingPage() {
  const [activeStage, setActiveStage] = useState<string>("Build");

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-700">
      
      {/* --- Header/Nav --- */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
              <Zap size={20} className="text-white" />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tight">
              echo<span className="text-indigo-600">DevOps</span>
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm font-bold text-slate-600">
            {['Pillars', 'Workflow', 'Tools'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-indigo-600 transition-colors">{link}</a>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all active:scale-95 shadow-lg shadow-slate-100">
            Get Demo <ArrowRight size={14} />
          </button>
        </nav>
      </header>

      {/* --- Hero Section --- */}
      <section className="py-24 md:py-32 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
              <ShieldCheck size={14} /> Bridging the gap: Dev 🤝 Ops
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter leading-[0.95]">
              Accelerate <span className="text-indigo-600">Innovation</span> with echoes of Automation.
            </h1>
            <p className="text-lg text-slate-600 font-medium max-w-2xl">
               echoDevOps unifies development, security, and operations teams to deliver software faster, safer, and more reliably. Say goodbye to silos, hello to efficiency.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-100 transition-all active:scale-[0.98]">
                Start Your Journey <Play size={18} fill="white" />
              </button>
              <button className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:col-span-5 grid grid-cols-2 gap-6 bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-50 border border-slate-100">
            <StatCard value="208x" label="Faster Deployment" />
            <StatCard value="106x" label="Faster Recovery" />
            <StatCard value="7x" label="Lower Failure Rate" />
            <StatCard value="24/7" label="System Monitoring" />
          </div>
        </div>
      </section>

      {/* --- Core Pillars Section --- */}
      <section id="pillars" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-3">
          <label className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">The Foundation</label>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">Core DevOps Pillars</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">echoDevOps is built on four essential principles that drive transformation.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4 hover:border-indigo-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <pillar.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 pt-2">{pillar.title}</h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CI/CD Pipeline Visual --- */}
      <section id="workflow" className="py-24 bg-slate-950 rounded-[3rem] my-12 mx-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-center mb-16 space-y-3">
            <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em]">The Lifecycle</label>
            <h2 className="text-4xl font-black text-white tracking-tight">Continuous Integration & Deployment (CI/CD)</h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">The heartbeat of modern DevOps. Automate the entire process from plan to monitor.</p>
          </div>
          <div className="flex items-center justify-center gap-3 bg-white/5 p-3 rounded-full border border-white/10 overflow-x-auto">
            {pipelineStages.map(stage => (
              <button 
                key={stage} 
                onClick={() => setActiveStage(stage)}
                className={`px-6 py-3 rounded-full text-xs font-bold transition-all whitespace-nowrap ${activeStage === stage ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/30" : "text-slate-400 hover:text-white hover:bg-white/10"}`}
              >
                {stage}
              </button>
            ))}
          </div>
          <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10 text-left animate-in fade-in zoom-in-95 duration-300">
              <p className="text-white text-lg font-bold">Details for: <span className="text-indigo-400">{activeStage}</span></p>
              <p className="text-slate-400 mt-2 font-medium">During the '{activeStage}' phase, automated echoes unify code and infrastructure. This example demonstrates how clicking the stage updates the local view using React state, mimicking an automated workflow step.</p>
          </div>
        </div>
      </section>

      {/* --- Tools & Call to Action --- */}
      <section id="tools" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          <div className="space-y-6">
              <label className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">Modern Tooling</label>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">Built for the Modern Stack</h2>
              <p className="text-slate-600 font-medium">echoDevOps integrates seamlessly with the industry's leading tools, including Docker, Kubernetes, and Terraform. Simplify your orchestration, containerization, and infrastructure management echoes.</p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                  {tools.map(tool => (
                      <div key={tool.name} className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl shadow-inner">
                          <span className="text-2xl">{tool.logo}</span>
                          <span className="text-xs font-bold text-slate-700">{tool.name}</span>
                      </div>
                  ))}
              </div>
          </div>
          <div className="bg-indigo-600 p-12 rounded-[2rem] text-white text-center shadow-2xl shadow-indigo-200">
              <Zap size={40} className="mx-auto mb-6 text-indigo-200" />
              <h3 className="text-3xl font-black tracking-tight leading-none">Ready to automate your workflows?</h3>
              <p className="text-indigo-100 mt-4 mb-8 font-medium">Join thousands of echoChat engineers who rely on echoDevOps for safe, efficient, and frequent releases.</p>
              <button className="bg-white hover:bg-indigo-50 text-indigo-600 px-8 py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95 whitespace-nowrap">Request Class Demo</button>
          </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-slate-100 py-12 mt-12 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            © 2026 echoDevOps System for Class Presentation. All Automated Echoes Reserved.
        </div>
      </footer>

    </div>
  );
}