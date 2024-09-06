'use client'

import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Jak si zarezervuji vstupenky?',
    answer: (
      <>
        Vstupenky si jde zarezervovat na naší domovské stránce přes odkaz na
        BoomEvents.org, nebo přes tento odkaz, který vás tam vezme rovnou:{' '}
        <Link href="https://www.boomevents.org/cs"><u>zde</u></Link>
      </>
    ),
  },
  {
    question: 'Jaký je rozdíl mezi VIP a normální vstupenkou?',
    answer: (
      <>
        VIP vstupenky s místem na sezení vám zaručí nejlepší místa v centru dění, zatímco obyčejná nemusí. Co se týče VIP vstupenky bez místa na sezení, tak VIP status vám nic navíc nepřinese, jen nám přispějete víc peněz na zlepšení plesu
      </>
    ),
  },
]

export default function FAQ() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl divide-y divide-white/10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Často kladené otázky
        </h1>
        <dl className="mt-10 space-y-6 divide-y divide-white/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-300">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}
