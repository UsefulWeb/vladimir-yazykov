import {
  AboutPage,
  ContactsPage,
  CoursesPage,
  DevelopmentPage,
  EducationPage,
  HomePage,
  MentoringPage,
  NotFoundPage,
  PrivacyPage,
  ProjectsPage,
  ResumePage,
  ResumeRolePage,
} from '@pages'
import { paths } from '@shared/config'
import { Layout } from '@widgets'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: paths.home, element: <HomePage /> },
        { path: paths.mentoring, element: <MentoringPage /> },
        { path: paths.development, element: <DevelopmentPage /> },
        { path: paths.education, element: <EducationPage /> },
        { path: paths.courses, element: <CoursesPage /> },
        { path: paths.about, element: <AboutPage /> },
        { path: paths.projects, element: <ProjectsPage /> },
        { path: paths.contacts, element: <ContactsPage /> },
        { path: paths.privacy, element: <PrivacyPage /> },
        { path: paths.resume, element: <ResumePage /> },
        { path: `${paths.resume}/:slug`, element: <ResumeRolePage /> },
        { path: '*', element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)
