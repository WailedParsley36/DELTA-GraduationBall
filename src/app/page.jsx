import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import { formatDate } from '@/lib/formatDate'
import { getAllArticles } from '@/lib/getAllArticles'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function shareIcon(props) {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
      <path
        d="M15.7708 16.4594C15.0269 16.4594 14.334 16.6757 13.7498 17.0476L7.85307 12.9307C7.94773 12.6003 7.99949 12.2517 7.99949 11.8909C7.99949 11.53 7.94773 11.1814 7.85307 10.851L13.5906 6.84529C14.2062 7.28257 14.9581 7.54056 15.7708 7.54056C17.853 7.54056 19.541 5.85253 19.541 3.7703C19.541 1.68808 17.8531 0 15.7708 0C13.6886 0 12.0006 1.68802 12.0006 3.77025C12.0006 4.04525 12.0308 4.31308 12.0867 4.57133L6.20351 8.67879C5.62923 8.32509 4.95323 8.12064 4.22924 8.12064C2.14701 8.12064 0.458984 9.80866 0.458984 11.8909C0.458984 13.9731 2.14696 15.6611 4.22924 15.6611C4.95318 15.6611 5.62923 15.4567 6.20351 15.103L12.1321 19.2422C12.0469 19.557 12.0006 19.8879 12.0006 20.2297C12.0006 22.312 13.6886 24 15.7708 24C17.8531 24 19.5411 22.312 19.5411 20.2297C19.5411 18.1475 17.8531 16.4594 15.7708 16.4594Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function starIcon(props) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path
        d="M12.73 2.51001L14.49 6.03001C14.73 6.52002 15.37 6.99001 15.91 7.08001L19.1 7.61001C21.14 7.95001 21.62 9.43001 20.15 10.89L17.67 13.37C17.25 13.79 17.02 14.6 17.15 15.18L17.86 18.25C18.42 20.68 17.13 21.62 14.98 20.35L11.99 18.58C11.45 18.26 10.56 18.26 10.01 18.58L7.01997 20.35C4.87997 21.62 3.57997 20.67 4.13997 18.25L4.84997 15.18C4.97997 14.6 4.74997 13.79 4.32997 13.37L1.84997 10.89C0.38997 9.43001 0.85997 7.95001 2.89997 7.61001L6.08997 7.08001C6.61997 6.99001 7.25997 6.52002 7.49997 6.03001L9.25997 2.51001C10.22 0.600015 11.78 0.600015 12.73 2.51001Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function TicketIcon(props) {
  return (
    <svg
      width="35"
      height="28"
      viewBox="0 0 35 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M29.4375 14.8125C29.4375 13.1312 30.4606 11.6873 31.9178 11.07C32.7441 10.7199 33.5 10.0225 33.5 9.125V9.125C33.5 2.625 31.875 1 25.375 1H9.125C2.625 1 1 2.625 1 9.125V9.125C1 9.57373 1.36744 9.92903 1.8073 10.0178C3.66348 10.3925 5.0625 12.0339 5.0625 14C5.0625 15.9661 3.66348 17.6075 1.8073 17.9822C1.36744 18.071 1 18.4263 1 18.875V18.875C1 25.375 2.625 27 9.125 27H25.375C28.9282 27 31.0246 26.5144 32.1952 25.0124C34.3615 22.2326 29.4375 18.3367 29.4375 14.8125V14.8125Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
      <path
        d="M14 1L14 27"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="5 5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function LinkIcon(props) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="4"
      fill="none"
      {...props}
    >
      <path
        className="stroke-zinc-300 dark:fill-zinc-100/10"
        d="M55.4,32V53.58a1.81,1.81,0,0,1-1.82,1.82H10.42A1.81,1.81,0,0,1,8.6,53.58V10.42A1.81,1.81,0,0,1,10.42,8.6H32"
      />
      <polyline
        className="stroke-zinc-300 dark:fill-zinc-100/10"
        points="40.32 8.6 55.4 8.6 55.4 24.18"
      />
      <line
        className="stroke-zinc-300 dark:fill-zinc-100/10"
        x1="19.32"
        y1="45.72"
        x2="54.61"
        y2="8.91"
      />
    </svg>
  )
}

function MapPointIcon(props) {
  return (
    <svg
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      viewBox="0 0 166.418 166.418"
      fill="#71717a"
      {...props}
    >
      <path
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M83.209,166.418c-7.121,0-13.11-4.387-15.258-11.176l-3.572-11.285
           c-5.089-16.083-13.75-31.047-25.742-44.478c-9.853-11.036-15.236-25.269-15.156-40.078c0.086-15.993,6.312-30.945,17.53-42.102
           C52.229,6.144,67.215,0,83.209,0c32.934,0,59.728,26.794,59.728,59.729c0,15.138-5.676,29.576-15.982,40.657
           c-11.19,12.03-19.574,26.691-24.917,43.575l-3.57,11.281C96.319,162.031,90.33,166.418,83.209,166.418z M83.209,5
           C52.685,5,28.645,28.908,28.481,59.429c-0.073,13.568,4.858,26.61,13.886,36.721c12.465,13.961,21.475,29.538,26.779,46.3
           l3.572,11.285c1.793,5.665,6.595,7.684,10.492,7.684c3.896,0,8.698-2.019,10.491-7.684l3.57-11.281
           c5.568-17.597,14.324-32.896,26.023-45.474c9.443-10.151,14.644-23.381,14.644-37.251C137.937,29.551,113.387,5,83.209,5z
           M83.209,91.996c-18.188,0-32.984-14.797-32.984-32.984c0-18.188,14.797-32.985,32.984-32.985c18.188,0,32.985,14.797,32.985,32.985
           C116.194,77.199,101.397,91.996,83.209,91.996z M83.209,31.026c-15.431,0-27.984,12.554-27.984,27.985
           c0,15.431,12.554,27.984,27.984,27.984c15.431,0,27.985-12.554,27.985-27.984C111.194,43.58,98.64,31.026,83.209,31.026z"
      />
    </svg>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      fill="#71717a"
      version="1.1"
      id="Capa_1"
      width="800px"
      height="800px"
      viewBox="0 0 612 612"
      {...props}
    >
      <g>
        <g>
          <path
            d="M612,463.781c0-70.342-49.018-129.199-114.75-144.379c-10.763-2.482-21.951-3.84-33.469-3.84
			c-3.218,0-6.397,0.139-9.562,0.34c-71.829,4.58-129.725,60.291-137.69,131.145c-0.617,5.494-0.966,11.073-0.966,16.734
			c0,10.662,1.152,21.052,3.289,31.078C333.139,561.792,392.584,612,463.781,612C545.641,612,612,545.641,612,463.781z
			 M463.781,561.797c-54.133,0-98.016-43.883-98.016-98.016s43.883-98.016,98.016-98.016s98.016,43.883,98.016,98.016
			S517.914,561.797,463.781,561.797z"
          />
          <polygon
            points="482.906,396.844 449.438,396.844 449.438,449.438 396.844,449.438 396.844,482.906 482.906,482.906 
			482.906,449.438 482.906,449.438 		"
          />
          <path
            d="M109.969,0c-9.228,0-16.734,7.507-16.734,16.734v38.25v40.641c0,9.228,7.506,16.734,16.734,16.734h14.344
			c9.228,0,16.734-7.507,16.734-16.734V54.984v-38.25C141.047,7.507,133.541,0,124.312,0H109.969z"
          />
          <path
            d="M372.938,0c-9.228,0-16.734,7.507-16.734,16.734v38.25v40.641c0,9.228,7.507,16.734,16.734,16.734h14.344
			c9.228,0,16.734-7.507,16.734-16.734V54.984v-38.25C404.016,7.507,396.509,0,387.281,0H372.938z"
          />
          <path
            d="M38.25,494.859h236.672c-2.333-11.6-3.572-23.586-3.572-35.859c0-4.021,0.177-7.999,0.435-11.953H71.719
			c-15.845,0-28.688-12.843-28.688-28.688v-229.5h411.188v88.707c3.165-0.163,6.354-0.253,9.562-0.253
			c11.437,0,22.61,1.109,33.469,3.141V93.234c0-21.124-17.126-38.25-38.25-38.25h-31.078v40.641c0,22.41-18.23,40.641-40.641,40.641
			h-14.344c-22.41,0-40.641-18.231-40.641-40.641V54.984H164.953v40.641c0,22.41-18.231,40.641-40.641,40.641h-14.344
			c-22.41,0-40.641-18.231-40.641-40.641V54.984H38.25C17.126,54.984,0,72.111,0,93.234v363.375
			C0,477.733,17.126,494.859,38.25,494.859z"
          />
          <circle cx="134.774" cy="260.578" r="37.954" />
          <circle cx="248.625" cy="260.578" r="37.954" />
          <circle cx="362.477" cy="260.578" r="37.954" />
          <circle cx="248.625" cy="375.328" r="37.953" />
          <circle cx="134.774" cy="375.328" r="37.953" />
        </g>
      </g>
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Přečíst více</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function PlaceMap() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MapPointIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Místo konání</span>
      </h2>
      <ol className="mt-3 space-y-4">
        <p className="float-right mb-3 mt-2 inline text-sm text-zinc-600 dark:text-zinc-400">
          Gorkého 2573, 530 02 Pardubice V-Zelené Předměstí, Czechia
        </p>
        <iframe
          width="100%"
          height="350"
          className="rounded-xl shadow-xl"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=D%C5%AFm%20kultury%20Dukla,%20Gork%C3%A9ho%202573,%20530%2002%20Pardubice%20V-Zelen%C3%A9%20P%C5%99edm%C4%9Bst%C3%AD+(D%C5%AFm%20kultury%20Dukla)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </ol>
    </div>
  )
}

function DateAndTime() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <div className="block w-full">
          <CalendarIcon className="float-left h-6 w-6 flex-none" />
          <span className="float-left ml-3">Datum konání</span>
          <p className="float-right inline text-sm text-zinc-600 dark:text-zinc-400">
            22.5 2025
          </p>
        </div>
      </h2>
    </div>
  )
}

function TicketPrices() {
  let prices = [
    // {
    //   title: 'VIP',
    //   icon: starIcon,
    //   description: 'S místem na sezení',
    //   price: 450,
    //   url: 'https://www.boomevents.org/cs',
    // },
    {
      title: 'Normální',
      description: 'S místem na sezení',
      price: 399,
      divider: true,
      url: 'https://www.boomevents.org/cs',
    },
    // {
    //   title: 'VIP',
    //   icon: starIcon,
    //   description: 'Bez místa na sezení',
    //   price: 350,
    //   url: 'https://www.boomevents.org/cs',
    // },
    {
      title: 'Normální',
      description: 'Bez místa na sezení',
      price: 299,
      url: 'https://www.boomevents.org/cs',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <TicketIcon className="float-left h-6 w-6 flex-none" />
        <span className="ml-3">Vstupenky</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {prices.map((role, roleIndex) => (
          <>
            <li className='group'>
              <Link
                href={role.url}
                className="group flex cursor-pointer gap-4 p-5 py-2 hover:bg-zinc-200/50 hover:dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
              >
                {role.icon ? (
                  <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-800/50 transition-transform group-hover:scale-110 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    {role.icon()}
                  </div>
                ) : (
                  <></>
                )}
                <dl className="flex flex-auto flex-wrap gap-x-2">
                  <dt className="sr-only">Typ lístku</dt>
                  <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {role.title}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {role.description}
                  </dd>
                </dl>
                <dd className="text-big m-auto text-center text-zinc-800 dark:text-zinc-200">
                  {role.price} Kč
                </dd>
              </Link>
            </li>
            {role.divider ? (
              <hr className="mx-auto my-8 h-px w-5/6 justify-center border-0 bg-gray-300 text-center align-middle dark:bg-gray-600/50" />
            ) : (
              <></>
            )}
          </>
        ))}
      </ol>
      <Button
        href={'https://www.boomevents.org/cs'}
        variant="primary"
        className="group mt-6 w-full"
      >
        Objednat vstupenky
        <LinkIcon className="float-right h-5 w-5 flex-none" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            DELTA - Maturitní ples 22.2.2025
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Přijďte oslavit konec studia na DELTA Maturitním plese 2025 v
            luxusním prostředí domu kultury Dukla. Tento prestižní ples nabídne
            slavnostní šerpování, hudbu, tanec a bohatou tombolu. Vytvořte
            nezapomenutelné vzpomínky s rodinou a přáteli. Rezervujte si
            vstupenky na nezapomenutelný večer plný elegance a zábavy.
            <br />
            <br />
            DELTA Maturitní ples je ideální příležitost pro všechny, kteří
            chtějí stylově zakončit maturitní rok.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://www.delta-skola.cz"
              aria-label="Follow on DELTA website"
              icon={(props) => (
                <p {...props} style={{ marginRight: '10px' }}>
                  <u>DELTA</u>
                </p>
              )}
            />
            <SocialLink
              href="https://www.instagram.com/delta_4.a/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <DateAndTime />
            <PlaceMap />
            <Newsletter />
          </div>
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Chcete se zúčastnit?
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Neváhejte a zarezervujte si své místo na DELTA Maturitním plese
              2025 již dnes! Přidejte se k nám na této výjimečné události, kde
              společně oslavíme konec maturitního ročníku. Čeká vás večer plný
              elegance, tance, a skvělých zážitků s přáteli a rodinou.
              <br />
              <br />
              Klikněte na tlačítko níže pro rezervaci vstupenek, nebo nás
              kontaktujte na
              {'  '}
              <strong className="whitespace-nowrap">
                maturak@deltaskola.cz
              </strong>
              {'  '}
              pro více informací.
              <br />
              <br />
              <em>
                Počet míst je omezený, tak si nezapomeňte zajistit svou
                vstupenku včas!
              </em>
            </p>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <TicketPrices />
          </div>
          <div className="w-full self-center">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              A kdo že to vlastně pořádá?
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Za organizací stojí třída <b>4.A</b>, parta kreativních a
              motivovaných studentů, kteří se rozhodli zorganizovat
              nezapomenutelnou oslavu svého závěrečného ročníku. S podporou
              našich učitelů a vedení školy jsme pečlivě připravili každý
              detail, aby večer byl plný elegance, zábavy a nezapomenutelných
              okamžiků.
              <br />
              <br />
              Naším cílem je nejen oslavit konec středoškolského studia, ale
              také vytvořit událost, na kterou budou vzpomínat nejen maturanti,
              ale i jejich rodiny a přátelé.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
