import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCourse, categories } from '../../data/courses'
import CourseHero from '../../components/CourseDetail/CourseHero'
import CourseFAQ, { hasFaqs } from '../../components/CourseDetail/CourseFAQ'
import CourseCta from '../../components/CourseDetail/CourseCta'
import CourseEnquiryCard from '../../components/CourseDetail/CourseEnquiryCard'
import CourseNotFound from '../../components/CourseDetail/CourseNotFound'
import {
  CourseOverview, CourseWhy, CourseToolsSkills, CourseJobs, CourseProjects, CourseSuccess, CourseTestimonials,
  hasWhy, hasToolsSkills, hasJobs, hasProjects, hasSuccess, hasTestimonials,
} from '../../components/CourseDetail/CourseContent'

function setMeta(title: string, description: string, path?: string) {
  document.title = title
  let m = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!m) { m = document.createElement('meta'); m.name = 'description'; document.head.appendChild(m) }
  m.content = description
  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.head.appendChild(document.createElement('link')) as HTMLLinkElement
  canonical.rel = 'canonical'
  canonical.href = `${window.location.origin}${path ?? window.location.pathname}`
  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]') ?? document.head.appendChild(document.createElement('meta')) as HTMLMetaElement
  ogTitle.setAttribute('property', 'og:title'); ogTitle.content = title
  const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]') ?? document.head.appendChild(document.createElement('meta')) as HTMLMetaElement
  ogDesc.setAttribute('property', 'og:description'); ogDesc.content = description
}

// One reusable template for every course: /courses/:slug picks the structured course data.
export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourse(slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])
  useEffect(() => {
    const prevTitle = document.title
    const prevDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content ?? ''
    if (course) {
      const cat = categories.find(x => x.id === course.category)!.short
      const first = (course.overview ?? course.shortDescription ?? '').split(/\n\s*\n/)[0]
      setMeta(`${course.name} | INNOVEL Training & Placement`,
        first || `Explore the ${course.name} course (${cat}) at INNOVEL Training | Placement.`, `/courses/${course.slug}`)
    } else setMeta('Course not found | INNOVEL Training & Placement', 'The course you are looking for could not be found.', '/courses')
    return () => setMeta(prevTitle, prevDesc)
  }, [course])

  if (!course) return <CourseNotFound />

  return (
    <div className="cx page-course-detail" data-cat={course.category}>
      <CourseHero course={course} />
      <CourseEnquiryCard course={course} />
      <CourseOverview course={course} />
      {hasWhy(course) && <CourseWhy course={course} />}
      {hasToolsSkills(course) && <CourseToolsSkills course={course} />}
      {hasJobs(course) && <CourseJobs course={course} />}
      {hasProjects(course) && <CourseProjects course={course} />}
      {hasSuccess(course) && <CourseSuccess course={course} />}
      {hasTestimonials(course) && <CourseTestimonials course={course} />}
      {hasFaqs(course) && <CourseFAQ course={course} />}
      <CourseCta course={course} />
    </div>
  )
}
