'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mic, MicOff, Video, VideoOff, PhoneOff,
    MessageSquare, Users, Share, MoreVertical,
    Smile, Settings, Maximize2
} from 'lucide-react';
import Link from 'next/link';

export default function MeetingRoom({ params }: { params: { id: string } }) {
    const [micOn, setMicOn] = useState(true);
    const [cameraOn, setCameraOn] = useState(true);

    return (
        <div className="h-screen bg-black overflow-hidden flex flex-col relative">
            {/* Top Bar - Auto hides */}
            <div className="absolute top-0 left-0 right-0 z-50 p-4 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                    <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/5">
                        {params.id}
                    </div>
                    <div className="px-2 py-1 rounded bg-red-500/20 text-red-500 text-xs font-bold animate-pulse">
                        REC
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-full hover:bg-white/10 text-white"><Settings className="w-5 h-5" /></button>
                    <button className="p-2 rounded-full hover:bg-white/10 text-white"><Maximize2 className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Main Video Grid */}
            <div className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                {/* User (Me) */}
                <motion.div
                    layout
                    className="relative rounded-2xl overflow-hidden bg-neutral-800 border border-white/10 group"
                >
                    <div className="absolute inset-0 bg-neutral-700 flex items-center justify-center">
                        <span className="text-4xl">👤</span> {/* Placeholder for Camera Stream */}
                    </div>
                    <div className="absolute bottom-4 left-4 text-white text-sm font-medium px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
                        You {micOn ? '' : '(Muted)'}
                    </div>
                    <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-1 h-8 bg-green-500 rounded-full animate-pulse" /> {/* Audio Viz */}
                    </div>
                </motion.div>

                {/* Other Participants (Mock) */}
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        layout
                        className="relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold text-white">
                                P{i}
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white text-sm font-medium px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
                            Participant {i}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Control Bar */}
            <div className="h-20 flex items-center justify-center gap-4 bg-neutral-900/50 backdrop-blur-xl border-t border-white/10 px-6 safe-area-pb">

                {/* Audio/Video Controls */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setMicOn(!micOn)}
                        className={`p-4 rounded-full transition-all ${micOn ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-red-500 text-white hover:bg-red-600'}`}
                    >
                        {micOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
                    </button>
                    <button
                        onClick={() => setCameraOn(!cameraOn)}
                        className={`p-4 rounded-full transition-all ${cameraOn ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-red-500 text-white hover:bg-red-600'}`}
                    >
                        {cameraOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
                    </button>
                </div>

                {/* Center Actions */}
                <div className="flex items-center gap-2 mx-4">
                    <button className="p-3 rounded-xl text-white hover:bg-white/10 flex flex-col items-center gap-1">
                        <Share className="w-5 h-5" />
                        <span className="text-[10px]">Share</span>
                    </button>
                    <button className="p-3 rounded-xl text-white hover:bg-white/10 flex flex-col items-center gap-1">
                        <Users className="w-5 h-5" />
                        <span className="text-[10px]">Participants</span>
                    </button>
                    <button className="p-3 rounded-xl text-white hover:bg-white/10 flex flex-col items-center gap-1">
                        <MessageSquare className="w-5 h-5" />
                        <span className="text-[10px]">Chat</span>
                    </button>
                    <button className="p-3 rounded-xl text-white hover:bg-white/10 flex flex-col items-center gap-1">
                        <Smile className="w-5 h-5" />
                        <span className="text-[10px]">Reactions</span>
                    </button>
                </div>

                {/* End Call */}
                <Link href="/dashboard/meetings">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all">
                        End Call
                    </button>
                </Link>
            </div>
        </div>
    );
}
