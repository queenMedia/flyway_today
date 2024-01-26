import Layout from "./Layout"
import { 
  Hero,
  Profit,
  Access,
  Testimonials
} from "@organisms"
import { Footer } from "@sharing/organisms"
function Home() {

  return (
    <Layout>
      <Hero />
      <Profit />
      <Access />
      <Testimonials />
      <Footer />
    </Layout>
  )
}

export default Home
