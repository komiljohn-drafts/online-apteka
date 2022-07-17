import { lazy, Suspense, useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { permissions } from '../utils/constants'
import FallbackPage from '../views/FallbackPage'
import mainRoutes from './mainRoutes'
import loginRoutes from './loginRoutes.js'
import { AnimatePresence, motion } from 'framer-motion'

const MainLayout = lazy(() => import('../layouts/MainLayout'))

const RouteTransition = ({ children, slide = 0, slideUp = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, x: slide, y: slideUp }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0.2, x: slide, y: slideUp }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

const AnimatedRoutes = ({ children, exitBeforeEnter = true, initial = false }) => {
  return (
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      {children}
    </AnimatePresence>
  )
}

const Router = () => {
  const isAuth = true

  const computedRoutes = useMemo(
    () =>
      mainRoutes
        .filter((route) => permissions.includes(route.permission))
        .map((route) => ({
          ...route,
          children: route.children?.filter((childRoute) => permissions.includes(childRoute.permission)),
        })),
    []
  )

  const navigateLink = useMemo(() => computedRoutes[0]?.path, [computedRoutes])

  if (!isAuth) {
    return (
      <Routes>
        {loginRoutes.map((route) => (
          <Route
            path={route.path}
            element={
              <Suspense fallback={<FallbackPage />}>
                <route.component />
              </Suspense>
            }
          />
        ))}
        <Route path='*' element={<Navigate to='/login' />} />
      </Routes>
    )
  }

  if (!navigateLink) return null

  return (
    <AnimatedRoutes exitBeforeEnter initial={false}>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<FallbackPage />}>
              <MainLayout />
            </Suspense>
          }
        >
          {navigateLink && <Route index element={<Navigate to={navigateLink} />} />}

          {computedRoutes.map((route) => (
            <Route
              path={route.path}
              key={route.path}
              element={
                <Suspense fallback={<FallbackPage />}>
                  <RouteTransition>
                    <route.component />
                  </RouteTransition>
                </Suspense>
              }
            >
              {route.children?.map((childRoute) => (
                <Route
                  path={childRoute.path}
                  key={childRoute.path}
                  element={
                    <Suspense fallback={<FallbackPage />}>
                      <RouteTransition>
                        <childRoute.component />
                      </RouteTransition>
                    </Suspense>
                  }
                />
              ))}
            </Route>
          ))}
          <Route path='*' element={<div>not found</div>} />
        </Route>
      </Routes>
    </AnimatedRoutes>
  )
}

export default Router
