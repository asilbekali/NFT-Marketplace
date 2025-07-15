// app/not-found.tsx

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center max-w-xl p-6 bg-gray-900/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700"
      >
        <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>
        <p className="text-2xl font-semibold mb-2">Sahifa topilmadi</p>
        <p className="mb-6 text-gray-300">
          Kechirasiz, siz izlagan sahifa mavjud emas yoki o‘chirilgan.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full text-white font-medium"
        >
          <ArrowLeft size={18} />
          Bosh sahifaga qaytish
        </Link>
      </motion.div>
    </div>
  )
}
