'use client';

import React from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft, CreditCard } from 'lucide-react';

export default function FinancePage() {
    return (
        <div className="space-y-8">
            <header className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Financial Hub</h1>
                <button className="px-4 py-2 bg-emerald-600 rounded-lg text-white hover:bg-emerald-700 transition-colors font-medium">
                    Add Money
                </button>
            </header>

            {/* Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Card */}
                <div className="col-span-1 lg:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-32 bg-emerald-500/10 blur-[100px] rounded-full group-hover:bg-emerald-500/20 transition-all" />

                    <div className="relative z-10 flex flex-col justify-between h-full min-h-[200px]">
                        <div className="flex justify-between items-start">
                            <Wallet className="w-8 h-8 text-emerald-400" />
                            <span className="text-2xl font-mono text-white tracking-widest">**** 4242</span>
                        </div>
                        <div>
                            <p className="text-sm text-neutral-400">Total Balance</p>
                            <h2 className="text-4xl font-bold text-white mt-1">$12,450.50</h2>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                    <button className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-between text-left group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                                <ArrowDownLeft className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-white">Request</span>
                        </div>
                    </button>
                    <button className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-between text-left group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-white">Send</span>
                        </div>
                    </button>
                    <button className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center justify-between text-left group">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <span className="font-medium text-white">Cards</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Placeholder for Transactions Table */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                <h3 className="font-semibold text-white mb-4">Recent Transactions</h3>
                <div className="text-center py-8 text-neutral-500">
                    Transaction history will appear here.
                </div>
            </div>
        </div>
    );
}
