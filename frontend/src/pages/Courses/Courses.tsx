import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import CoursesHero from '../../components/Courses/CoursesHero'
import CourseCategoryNav from '../../components/Courses/CourseCategoryNav'
import CourseList from '../../components/Courses/CourseList'
import CoursesDiscovery from '../../components/Courses/CoursesDiscovery'
import { usePageMeta } from '../../hooks/usePageMeta'
import { categories } from '../../data/courses'

export default function Courses() {
  const { hash } = useLocation()
  const [query, setQuery] = useState('')
  // Arriving from another page: honour #it/#design/#architectural, otherwise start at the top.
  useEffect(() => {
    const el = hash ? document.getElementById(hash.slice(1)) : null
    if (el) el.scrollIntoView(); else window.scrollTo(0, 0)
  }, [hash])
  usePageMeta('Courses | INNOVEL Training & Placement', 'Explore INNOVEL courses across IT, Design and Architectural training. Compare course paths, tools, projects and career directions.')
  return (
    <div className="page-courses">
      <CoursesHero />
      <CourseCategoryNav />
      <section className="course-search" aria-label="Search courses">
        <div className="container">
          <label htmlFor="course-search-input">Find a course</label>
          <input id="course-search-input" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by course, tool or skill…" />
        </div>
      </section>
      {categories.map(x => <CourseList key={x.id} id={x.id} search={query} />)}
      <CoursesDiscovery />
    </div>
  )
}
