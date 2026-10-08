import home from '../assets/hero-bg/course.jpg'
import dataScience from '../assets/hero-bg/Data_science.jpg'
import dataAnalytics from '../assets/hero-bg/data_analytics.jpg'
import fullStack from '../assets/hero-bg/fullstack.png'
import civilCad from '../assets/hero-bg/Civil_CAD.jpg'
import mechCad from '../assets/hero-bg/Mechanical_engineering_CAD.jpg'
import cloud from '../assets/hero-bg/Cloud_and_DevOps.jpg'
import uiux from '../assets/hero-bg/UI_UX_design.jpg'
import digitalMarketing from '../assets/hero-bg/Digital_marketing.jpg'
import graphic from '../assets/hero-bg/Graphic_design.jpg'
import programming from '../assets/hero-bg/Programming_foundations.jpg'

export const homeHeroImage = home

// Course slug -> full-section hero background image
export const courseHeroImages: Record<string, string> = {
  'data-science': dataScience,
  'data-analytics': dataAnalytics,
  'full-stack-development': fullStack,
  'civil-cad': civilCad,
  'mech-cad': mechCad,
  'cloud-devops': cloud,
  'ui-ux-design': uiux,
  'digital-marketing': digitalMarketing,
  'graphic-design': graphic,
  'programming-foundations': programming,
}
