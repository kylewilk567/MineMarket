import Hero from '@components/home/Hero'
import Problem from '@components/home/Problem'
import Benefits from '@components/home/Benefits'
import Testimonials from '@components/home/Testimonials'
import Features from '@components/home/Features'
import FAQs from '@components/home/FAQs'
import Call from '@components/home/Call'


// TODO: Section tag vs Main vs Div
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Problem />
      <Benefits />
      <Testimonials />
      <Features />
      <FAQs />
      <Call />
    </div>
  )
}
