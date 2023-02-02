import { lazy } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  isRouteErrorResponse,
  Link,
  Navigate,
  Outlet,
  Route,
  RouteObject,
  RouteProps,
  useMatches,
  useRouteError
} from 'react-router-dom'
import {
  BusinessOutlined,
  BusinessTwoTone,
  EngineeringOutlined,
  EngineeringTwoTone,
  HandymanOutlined,
  HandymanTwoTone,
  LocalPhoneOutlined,
  LocalPhoneTwoTone,
  OtherHousesOutlined,
  OtherHousesTwoTone
} from '@mui/icons-material'
import { GlobalLayoutComponent, ViewLayoutComponent } from '../layout'

import homeImageSrc from '../assets/images/home.png'
import serviceImageSrc from '../assets/images/service.png'
import projectImageSrc from '../assets/images/project.png'
import aboutUsImageSrc from '../assets/images/about.png'
import contactUsImageSrc from '../assets/images/contact.png'

const HomePage = lazy(() => import('../pages/home/Home'))
const ServicePage = lazy(() => import('../pages/service/Service'))
const ProjectPage = lazy(() => import('../pages/project/Project'))
const ContactPage = lazy(() => import('../pages/contact/Contact'))
const AboutPage = lazy(() => import('../pages/about/About'))

export const paths = {
  HOME: {
    element: <HomePage />,
    path: '/',
    handle: {
      icon: () => <OtherHousesOutlined />,
      filledIcon: () => <OtherHousesTwoTone />,
      crumb: () => 'Início',
      title: () => 'Início',
      imageSrc: () => homeImageSrc
    }
  },
  SERVICES: {
    element: <ServicePage />,
    path: '/services',
    handle: {
      icon: () => <EngineeringOutlined />,
      filledIcon: () => <EngineeringTwoTone />,
      crumb: () => 'Serviços',
      title: () => 'Nossos serviços',
      imageSrc: () => serviceImageSrc
    }
  },
  PROJECTS: {
    element: <ProjectPage />,
    path: '/projects',
    handle: {
      icon: () => <HandymanOutlined />,
      filledIcon: () => <HandymanTwoTone />,
      crumb: () => 'Projetos',
      title: () => 'Projetos realizados',
      imageSrc: () => projectImageSrc
    }
  },
  ABOUT_US: {
    element: <AboutPage />,
    path: '/about-us',
    handle: {
      icon: () => <BusinessOutlined />,
      filledIcon: () => <BusinessTwoTone />,
      crumb: () => 'Sobre nós',
      title: () => 'Sobre a Demolidora Solon',
      imageSrc: () => aboutUsImageSrc
    }
  },
  CONTACT_US: {
    element: <ContactPage />,
    path: '/contact',
    handle: {
      icon: () => <LocalPhoneOutlined />,
      filledIcon: () => <LocalPhoneTwoTone />,
      crumb: () => 'Contato',
      title: () => 'Entrar em contato',
      imageSrc: () => contactUsImageSrc
    }
  }
}

export const routes = () => {
  // const { path: _, ...PATH_HOME } = paths.HOME

  return createRoutesFromElements(
    <Route
      path='/'
      element={<GlobalLayoutComponent />}
      handle={paths.HOME.handle}
    >
      <Route {...paths.HOME} />
      <Route {...paths.SERVICES}>
        <Route index element={<ViewLayoutComponent />} />
        <Route path=':id' element={null} />
      </Route>
      <Route element={<ViewLayoutComponent />}>
        <Route {...paths.PROJECTS} />
        <Route {...paths.ABOUT_US} />
        <Route {...paths.CONTACT_US} />
      </Route>
      <Route path='*' element={<Navigate to='/' />} />
    </Route>
  )
}

export const router = createBrowserRouter(routes())

export * from './Router.types'
