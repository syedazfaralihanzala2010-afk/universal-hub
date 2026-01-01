'use client';

import React from 'react';
import { Video, Plus, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function MeetingsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-white">Meetings Room</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors shadow-lg shadow-purple-500/20">
                    <Plus className="w-4 h-4" />
                    <span>New Meeting</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Main Action Card */}
                <Link href={`/meeting/${Math.random().toString(36).substring(7)}`} className="contents">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex flex-col items-center justify-center text-center space-y-4 hover:border-purple-500/40 transition-all cursor-pointer group">
                        <div className="p-4 rounded-full bg-purple-500 group-hover:scale-110 transition-transform shadow-xl shadow-purple-500/30">
                            <Video className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">Start an Instant Meeting</h3>
                            <p className="text-sm text-neutral-400 mt-1">Generate a secure link and jump right in.</p>
                        </div>
                    </div>
                </Link>

                {/* Schedule Card */}
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center space-y-4 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="p-4 rounded-full bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                        <Calendar className="w-8 h-8" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">Schedule for Later</h3>
                        <p className="text-sm text-neutral-400 mt-1">Plan upcoming discussions with your team.</p>
                    </div>
                </div>
            </div>

            {/* Recent Meetings List (Placeholder) */}
            <div className="mt-8">
                <h2 className="text-lg font-semibold text-white mb-4">Recent Sessions</h2>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-center text-neutral-400 py-12">
                    No recent meetings found. Start one above!
                </div>
            </div>
        </div>
    );
}
