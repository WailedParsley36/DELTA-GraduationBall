import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Něco o 4.A',
  description:
    'Chceš se dozvědět více o třídě 4.A? Tak si rozklikni odkaz!',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Třída 4.A ze školy DELTA
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Jsme opravdu jedinečná skupina studentů, kteří během svého
              středoškolského studia ukázali odhodlání, kreativitu a přátelského
              ducha. Jsme skupina různorodých osobností, které spojuje nejen
              touha po vzdělání, ale také vzájemná podpora a nezapomenutelné
              zážitky.
            </p>
            <p>
              Každý z nás přispěl něčím zvláštním k atmosféře třídy - někdo svým
              smyslem pro humor, jiný skvělými akademickými výsledky nebo
              organizačními schopnostmi. Ať už šlo o společné projekty, školní
              výlety, nebo maturitní přípravy, vždy jsme drželi při sobě a
              vzájemně se motivovali.
            </p>
            <p>
              Teď, jako maturanti, stojíme na prahu nové etapy a těšíme se na
              další výzvy. Ale jedno je jisté - <b>4.A</b> zůstane navždy třída,
              na kterou budeme s láskou vzpomínat!
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://www.instagram.com/delta_4.a/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
