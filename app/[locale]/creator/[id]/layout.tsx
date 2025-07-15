"use client";

import React, { FC, ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDiscord, FaGlobe, FaInstagram, FaTwitter } from "react-icons/fa";

const CreatorLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#2B2B2B] text-white">
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
                    priority
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

            <div className="max-w-5xl mx-auto px-6 pt-20 w-full">
                <div className="bg-[#3B3B3B] w-full rounded-xl mb-6 shadow-lg p-6">
                    <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                            <h1 className="text-3xl font-bold mb-4">
                                Animakid
                            </h1>

                            <div className="flex gap-8 text-center">
                                <div>
                                    <p className="text-xl font-semibold">
                                        250k+
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Volume
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">50+</p>
                                    <p className="text-sm text-gray-400">
                                        NFTs Sold
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xl font-semibold">
                                        3000+
                                    </p>
                                    <p className="text-sm text-gray-400">
                                        Followers
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-[20px] items-end">
                            <button className="bg-[#A259FF] text-white text-sm px-4 py-2 rounded-full hover:bg-[#913bff] transition">
                                0xc0E3...879C
                            </button>
                            <button className="border border-[#A259FF] text-[#A259FF] text-sm px-4 py-2 rounded-full hover:bg-[#A259FF] hover:text-white transition">
                                + Follow
                            </button>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm text-gray-400 mb-1">Bio</p>
                        <p>The Internet’s Friendliest Designer Kid.</p>
                    </div>

                    <div className="mt-4">
                        <p className="text-sm text-gray-400 mb-1">Links</p>
                        <div className="flex gap-4 text-xl text-gray-300">
                            <FaGlobe className="hover:text-white cursor-pointer transition" />
                            <FaDiscord className="hover:text-white cursor-pointer transition" />
                            <FaInstagram className="hover:text-white cursor-pointer transition" />
                            <FaTwitter className="hover:text-white cursor-pointer transition" />
                        </div>
                    </div>
                </div>

                <div className="flex gap-8 border-b border-gray-700 pb-2 text-gray-400 text-sm">
                    <div className="cursor-pointer text-white border-b-2 border-white pb-1">
                        Created{" "}
                        <span className="ml-1 text-xs bg-gray-700 px-2 py-0.5 rounded-full">
                            302
                        </span>
                    </div>
                    <div className="cursor-pointer hover:text-white transition">
                        Owned{" "}
                        <span className="ml-1 text-xs bg-gray-700 px-2 py-0.5 rounded-full">
                            67
                        </span>
                    </div>
                    <div className="cursor-pointer hover:text-white transition">
                        Collection{" "}
                        <span className="ml-1 text-xs bg-gray-700 px-2 py-0.5 rounded-full">
                            4
                        </span>
                    </div>
                </div>

                <main className="mt-6">{children}</main>
            </div>
        </div>
    );
};

export default CreatorLayout;
