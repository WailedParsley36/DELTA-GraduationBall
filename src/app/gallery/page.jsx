'use client'

import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import clsx from 'clsx'

export default function Gallery() {
  let buttons = [
    {
      title: 'Vše',
      selected: true,
    },
    {
      title: 'Příprava',
      selected: false,
    },
    {
      title: 'Šerpování',
      selected: false,
    },
    {
      title: 'Tancování',
      selected: false,
    },
    {
      title: 'Afterparty',
      selected: false,
    }
  ]

  return (
    <>
      <SimpleLayout
        title="Galerie - Maturitní ples 2025"
        intro="Prohlédněte si nezapomenutelné momenty z DELTA Maturitního plesu 2025 v naší fotogalerii. Najdete zde fotografie z příprav, slavnostního šerpování, tanečních vystoupení a afterparty. Zachytili jsme pro vás ty nejlepší okamžiky tohoto výjimečného večera, abyste si je mohli kdykoliv připomenout a sdílet s přáteli"
      >
        <div className="*:hover:text-teal-500 *:dark:hover:text-teal-400 flex flex-wrap items-center justify-center space-x-4 py-4 md:py-8">
          {buttons.map((item) => (
            <button
              type="button"
              className={clsx(
                'items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20',
                item.selected
                  ? 'text-teal-500 dark:text-teal-400 ring-white/20'
                  : 'hover:text-teal-500 hover:dark:text-teal-400'
              )}
            >
              {item.title}
              {item.selected ? (
                <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
              ) : (
                <></>
              )}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {/* <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
              alt=""
            />
          </div> */}
        </div>
      </SimpleLayout>
    </>
  )
}
