'use client';

import React from 'react';
import { MessageSquare, Hash, Search } from 'lucide-react';

export default function ChatPage() {
    return (
        <div className="h-[calc(100vh-100px)] flex gap-6">
            {/* Channels Sidebar */}
            <div className="w-full md:w-72 bg-white/5 border border-white/10 rounded-2xl flex flex-col overflow-hidden">
                <div className="p-4 border-b border-white/10">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Search chats..."
                            className="w-full bg-black/20 text-white pl-10 pr-4 py-2 rounded-lg text-sm border border-transparent focus:border-purple-500/50 outline-none"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    <div className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase">Channels</div>
                    {['general', 'engineering', 'design', 'random'].map(channel => (
                        <button key={channel} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-left">
                            <Hash className="w-4 h-4" />
                            <span>{channel}</span>
                        </button>
                    ))}

                    <div className="px-3 py-2 mt-4 text-xs font-semibold text-neutral-500 uppercase">Direct Messages</div>
                    {['Alice Admin', 'Bob Builder', 'Charlie Chef'].map((user, i) => (
                        <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-left">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                            <span>{user}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Chat Area (Placeholder) */}
            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-center p-8">
                <div className="max-w-md">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageSquare className="w-8 h-8 text-neutral-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">Select a Conversation</h2>
                    <p className="text-neutral-400 mt-2">Choose a channel or direct message from the sidebar to start chatting globally.</p>
                </div>
            </div>
        </div>
    );
}
