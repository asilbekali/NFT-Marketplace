"use client";

import React, { FC, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CreatorLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-64 relative"
            >
                <Image
                    src="/amazing.svg"
                    alt="Creator Banner"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-b-2xl shadow-lg"
                />

                <div className="absolute bottom-[-40px] left-6 w-28 h-28 rounded-xl overflow-hidden border-4 border-[#2B2B2B] shadow-xl bg-[#2B2B2B]">
                    <Image
                        src="/personaj.svg"
                        alt="Personaj"
                        width={112}
                        height={112}
                        className="object-cover"
                    />
                </div>
            </motion.div>

            <main className="max-w-5xl mx-auto p-6 pt-20">{children}</main>
        </div>
    );
};

export default CreatorLayout;
