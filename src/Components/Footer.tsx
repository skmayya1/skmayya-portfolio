import React from 'react'

const Footer = () => {
  return (
    <div className='pt-32 w-full h-full'>
      <div className="border-t-2 border-zinc-500 border-dashed flex items-center justify-between w-full p-8">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium text-zinc-700">III Year</p>
          <p className="text-2xl font-semibold">BTech</p>
        </div>
        <h1 className='text-zinc-200 text-[12vw] font-bold hover:text-zinc-300 transition-colors duration-300'>
          Skmayya
        </h1>
        <div className="flex flex-col gap-3 text-right">
          <p className="text-sm text-zinc-500">Get in touch</p>
          <a href="mailto:contact@skmayya.dev" className="text-lg hover:text-blue-500 transition-colors">
            skandamayya4@gmail.com
          </a>
          <p className="text-zinc-400">© 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Footer