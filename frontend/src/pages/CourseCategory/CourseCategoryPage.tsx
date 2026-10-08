import { useEffect } from 'react'
import { categoryPages } from '../../data/courseCategories'
import { courses, type CategoryId } from '../../data/courses'
import { usePageMeta } from '../../hooks/usePageMeta'
import CourseCategoryHero from '../../components/CourseCategory/CourseCategoryHero'
import CourseCategoryPath from '../../components/CourseCategory/CourseCategoryPath'
import CourseCategoryCourses from '../../components/CourseCategory/CourseCategoryCourses'
import CourseCategoryFocus from '../../components/CourseCategory/CourseCategoryFocus'
import CourseCategoryCareers from '../../components/CourseCategory/CourseCategoryCareers'
import CourseCategoryWhy from '../../components/CourseCategory/CourseCategoryWhy'
import CourseCategoryDiscovery from '../../components/CourseCategory/CourseCategoryDiscovery'
import CourseCategoryFAQ from '../../components/CourseCategory/CourseCategoryFAQ'
import CourseCategoryFinalCta from '../../components/CourseCategory/CourseCategoryFinalCta'

// Generic category landing page. Design/Architectural pages only need a config entry plus a thin wrapper.
export default function CourseCategoryPage({ id }: { id: CategoryId }) {
  const cfg = categoryPages[id]!
  const names = courses.filter(x => x.category === id).map(x => x.name)
  usePageMeta(cfg.meta.title, `${cfg.hero.eyebrow}: ${names.join(', ')}. Practical training with hands-on learning, projects and career preparation at INNOVEL.`)
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="cc page-category" data-cat={id}>
      <CourseCategoryHero cfg={cfg} />
      <CourseCategoryPath cfg={cfg} />
      <CourseCategoryCourses cfg={cfg} />
      <CourseCategoryFocus cfg={cfg} />
      <CourseCategoryCareers cfg={cfg} />
      <CourseCategoryWhy cfg={cfg} />
      {cfg.discovery && <CourseCategoryDiscovery cfg={cfg} />}
      <CourseCategoryFAQ cfg={cfg} />
      <CourseCategoryFinalCta cfg={cfg} />
    </div>
  )
}
