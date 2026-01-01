import React from 'react';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen bg-[#030014]">
            {/* Sidebar - Fixed Position */}
            <Sidebar />

            {/* Main Content Area - Offset by Sidebar width */}
            <main className="flex-1 ml-20 md:ml-64 p-8 overflow-y-auto h-screen relative z-10">
                {/* Ambient Background Glows */}
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
                    <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 blur-[150px] rounded-full" />
                    <div className="absolute bottom-[-20%] left-[10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full" />
                </div>

                {children}
            </main>
        </div>
    );
}
