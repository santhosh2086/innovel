import { Routes, Route, Navigate } from 'react-router-dom'
import { EnquiryProvider } from './components/EnquiryModal/EnquiryContext'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import CourseDetail from './pages/CourseDetail/CourseDetail'
import Placement from './pages/Placement/Placement'
import FAQPage from './pages/FAQ/FAQ'
import Contact from './pages/Contact/Contact'
import ITCourses from './pages/CourseCategory/ITCourses'
import DesignCourses from './pages/CourseCategory/DesignCourses'
import ArchitecturalCourses from './pages/CourseCategory/ArchitecturalCourses'
import Footer from './components/Footer/Footer'

// Unbuilt routes fall back to Home until their pages exist.
export default function App() {
  return (
    <EnquiryProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/it" element={<ITCourses />} />
          <Route path="/courses/design" element={<DesignCourses />} />
          <Route path="/courses/architectural" element={<ArchitecturalCourses />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </EnquiryProvider>
  )
}
