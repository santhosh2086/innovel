import { useEffect } from 'react'
import { faqs, faqPageContent as c } from '../../data/faqs'
import { usePageMeta } from '../../hooks/usePageMeta'
import FAQAccordion from '../../components/FAQ/FAQAccordion'

export default function FAQPage() {
  usePageMeta(c.meta.title, 'Answers to common questions about INNOVEL courses, admissions, training, certification, placement support and enquiries.')
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="page-faq">
      <section className="fpm fpm--questions" aria-label="Frequently asked questions">
        <div className="container fpm__inner">
          {faqs.length ? (
            <FAQAccordion items={faqs} />
          ) : (
            <div className="fq__empty">
              <strong>No questions available.</strong>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
