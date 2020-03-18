/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "./layout"
// @ts-ignore
import Hero from "../texts/hero"
// @ts-ignore
import Bottom from "../texts/bottom"
import Title from "./title"
import List from "./list"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
}

const Homepage = ({ posts }: PostsProps) => {
  const { basePath, blogPath } = useMinimalBlogConfig()

  return (
    <Layout>
      <section sx={{ mb: [6, 6], p: { fontSize: [1, 2, 3], mt: 6 } }}>
        <Hero />
      </section>

      <div sx={{ mb: [3, 4] }}>
        <Title text='Seattle Hospitality Emergency Fund'></Title>

        <p class='mt-4'>
          Team fundraiser by Jessica Tousignant and Candace Whitney Morris to
          help provide emergency relief to those workers whose hours have been
          curtailed because of this crisis and who are not being otherwise
          compensated.
        </p>

        <p class='mt-4'>
          <a
            class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            href='https://www.gofundme.com/f/seattle-hospitality-emergency-fund'
            target='_blank'
          >
            Donate Here
          </a>
        </p>
      </div>

      <div sx={{ mb: [3, 4] }}>
        <Title text='Support Seattle restaurants'></Title>

        <ul class='list-disc pl-6 mt-4'>
          <li>
            <a
              href='https://squareup.com/gift/PE1YXZ53M6WRW/order'
              target='_blank'
            >
              Brother Joe
            </a>{" "}
            <span class='italic'>(support by purchasing gift cards)</span>
          </li>
        </ul>
      </div>

      <div sx={{ mb: [3, 4] }}>
        <Title text='Support Seattle bar &amp; event staff'></Title>

        <ul class='list-disc pl-6 mt-4'>
          <li>
            <a
              href='https://www.gofundme.com/f/latona-staff-covid19-shutdown'
              target='_blank'
            >
              Latona Pub
            </a>
          </li>
          <li>
            <a
              href='https://checkout.square.site/buy/NFAPA6E5MR2MKWRJ7LATPRAY'
              target='_blank'
            >
              WildRose
            </a>{" "}
            <span class='italic'>(support by purchasing gift cards)</span>
          </li>
          <li>
            <a href='https://republicofcider.com/online-store' target='_blank'>
              Republic of Cider
            </a>{" "}
            <span class='italic'>(support by purchasing gift cards)</span>
          </li>
        </ul>
      </div>

      <div sx={{ mb: [3, 4] }}>
        <Title text='Support Seattle service businesses'></Title>

        <ul class='list-disc pl-6 mt-4'>
          <li>
            <a
              href='https://www.gofundme.com/f/help-cth-pet-sittersdog-walkers-during-covid19'
              target='_blank'
            >
              Close to Home Pet Services
            </a>
          </li>
          <li>
            <a
              href='https://www.gofundme.com/f/savor-seattle-pike-place-market-COVID19'
              target='_blank'
            >
              Food Delivery by Savor Seattle
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default Homepage
