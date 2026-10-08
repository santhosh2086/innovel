import Hero from '../../components/Hero/Hero'
import AboutSection from '../../components/About/AboutSection'
import VisionMissionSection from '../../components/VisionMission/VisionMissionSection'
import CoursesSection from '../../components/Courses/CoursesSection'
import PlacementHighlights from '../../components/Placement/PlacementHighlights'
import TestimonialsSection from '../../components/Testimonials/TestimonialsSection'
import GoogleReviewsSection from '../../components/GoogleReviews/GoogleReviewsSection'
import ContactCombined from '../../components/Contact/ContactCombined'
import FAQSection from '../../components/FAQ/FAQSection'
import { usePageMeta } from '../../hooks/usePageMeta'

export default function Home() {
  usePageMeta('INNOVEL Training | IT, Design & Architectural Courses', 'Practical IT, Design and Architectural training at INNOVEL with hands-on projects, course guidance, placement-oriented preparation and enquiry support.')
  return (
    <div className="page-home">
      <Hero />
      <AboutSection />
      <VisionMissionSection />
      <CoursesSection />
      <PlacementHighlights />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <FAQSection />
      <ContactCombined />
    </div>
  )
}
