import { lazy, Suspense, useMemo } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { permissions } from "../utils/constants"
import FallbackPage from "../views/FallbackPage"
import mainRoutes from "./mainRoutes"

const MainLayout = lazy(() => import("../layouts/MainLayout"))

const Router = () => {
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

  if (!navigateLink) return null

  return (
    <Routes>
      <Route
        path="/"
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
                <route.component />
              </Suspense>
            }
          >
            {route.children?.map((childRoute) => (
              <Route
                path={childRoute.path}
                key={childRoute.path}
                element={
                  <Suspense fallback={<FallbackPage />}>
                    <childRoute.component />
                  </Suspense>
                }
              />
            ))}
          </Route>
        ))}
        <Route path="*" element={<div>not found</div>} />
      </Route>
    </Routes>
  )
}

export default Router
