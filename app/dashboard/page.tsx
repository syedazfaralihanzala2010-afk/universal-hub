'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, ArrowUpRight, Plus, Calendar } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white">Good Evening, User</h1>
                    <p className="text-neutral-400">Here's what's happening in your Universal Hub today.</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors">
                        <Calendar className="w-4 h-4" />
                        <span>Schedule</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20">
                        <Plus className="w-4 h-4" />
                        <span>New Meeting</span>
                    </button>
                </div>
            </header>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Upcoming Meetings', value: '3', icon: Clock, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                    { label: 'Active Chats', value: '12', icon: Users, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                    { label: 'Wallet Balance', value: '$4,250.00', icon: ArrowUpRight, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                    { label: 'Pending Requires', value: '5', icon: Calendar, color: 'text-amber-400', bg: 'bg-amber-500/10' }
                ].map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all group"
                    >
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-neutral-400">{stat.label}</p>
                                <h3 className="mt-2 text-3xl font-bold text-white tracking-tight">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity */}
                <section className="lg:col-span-2 p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm">
                    <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                                        JD
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Project Sync</h4>
                                        <p className="text-sm text-neutral-400">Recorded 2 hours ago • 45 mins</p>
                                    </div>
                                </div>
                                <button className="px-3 py-1.5 text-sm font-medium text-purple-300 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors">
                                    Watch Replay
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Quick Transfer (Wise Style) */}
                <section className="p-6 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/5 backdrop-blur-sm">
                    <h2 className="text-xl font-bold text-white mb-6">Quick Transfer</h2>
                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-neutral-400">You send</span>
                                <span className="text-sm font-medium text-white">USD</span>
                            </div>
                            <input
                                type="text"
                                defaultValue="1,000.00"
                                className="w-full bg-transparent text-2xl font-bold text-white outline-none"
                            />
                        </div>

                        <div className="flex justify-center -my-2 relative z-10">
                            <div className="p-2 rounded-full bg-[#030014] border border-white/10">
                                <ArrowUpRight className="w-4 h-4 text-neutral-400 rotate-45" />
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm text-neutral-400">Recipient gets</span>
                                <span className="text-sm font-medium text-white">EUR</span>
                            </div>
                            <div className="text-2xl font-bold text-emerald-400">
                                912.45
                            </div>
                        </div>

                        <button className="w-full py-3 mt-2 font-semibold text-black bg-white rounded-xl hover:bg-neutral-200 transition-colors">
                            Send Money
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}
