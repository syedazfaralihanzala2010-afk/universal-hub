'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Video, MessageSquare, Wallet, LayoutGrid, Settings, LogOut, Hexagon } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Dashboard', icon: LayoutGrid, href: '/dashboard', color: 'text-purple-400' },
    { name: 'Meetings', icon: Video, href: '/dashboard/meetings', color: 'text-emerald-400' },
    { name: 'Teams Chat', icon: MessageSquare, href: '/dashboard/chat', color: 'text-cyan-400' },
    { name: 'Finances', icon: Wallet, href: '/dashboard/finance', color: 'text-amber-400' },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed left-0 top-0 h-screen w-20 md:w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 flex flex-col z-50 text-white"
        >
            {/* Logo Area */}
            <div className="flex items-center justify-center md:justify-start gap-3 p-6 border-b border-white/5">
                <div className="relative">
                    <Hexagon className="w-8 h-8 text-purple-500 fill-purple-500/20" />
                    <div className="absolute inset-0 animate-pulse bg-purple-500/40 blur-lg" />
                </div>
                <span className="hidden md:block text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-cyan-200">
                    UniversalHub
                </span>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-8 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link key={item.href} href={item.href}>
                            <div
                                className={`group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 relative overflow-hidden
                  ${isActive ? 'bg-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)]' : 'hover:bg-white/5'}
                `}
                            >
                                {/* Active Indicator Line */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-r-full"
                                    />
                                )}

                                <item.icon className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${isActive ? item.color : 'text-neutral-400 group-hover:text-white'}`} />
                                <span className={`hidden md:block text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                                    {item.name}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-white/5 space-y-2">
                <button className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 transition-all">
                    <Settings className="w-5 h-5" />
                    <span className="hidden md:block text-sm font-medium">Settings</span>
                </button>
                <button className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all">
                    <LogOut className="w-5 h-5" />
                    <span className="hidden md:block text-sm font-medium">Logout</span>
                </button>
            </div>
        </motion.aside>
    );
}
