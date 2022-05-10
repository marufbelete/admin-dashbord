import React, { Suspense, Fragment, lazy } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import AdminLayout from './layouts/AdminLayout';

import GuestGuard from './components/Auth/GuestGuard';
import AuthGuard from './components/Auth/AuthGuard';

import { BASE_URL } from './config/constant';

export const renderRoutes = (routes = []) => (
    <Suspense fallback={<Loader />}>
        <Switch>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Guard>
                                <Layout>{route.routes ? renderRoutes(route.routes) : <Component {...props} />}</Layout>
                            </Guard>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
);

const routes = [
    {
        exact: true,
        guard: GuestGuard,
        path: '/signin',
        component: lazy(() => import('./views/auth/signin/SignIn1'))
    },
    {
        exact: true,
        guard: GuestGuard,
        path: '/signup',
        component: lazy(() => import('./views/auth/signup/SignUp1'))
    },
    {
        path: '*',
        layout: AdminLayout,
        guard: AuthGuard,
        routes: [
            {
                exact: true,
                path: '/dashboard',
                component: lazy(() => import('./views/dashboard/DashDefault'))
            },

            {
                exact: true,
                path: '/allshipment',
                component: lazy(() => import('./views/shipment/Allshipment'))
            },
            {
                exact: true,
                path: '/customer',
                component: lazy(() => import('./views/shipment/Customer'))
            },
            {
                exact: true,
                path: '/shipmentdispatch',
                component: lazy(() => import('./views/shipment/Dispatch&Assignment'))
            },
            {
                exact: true,
                path: '/manualassignment',
                component: lazy(() => import('./views/shipment/Manualassignment'))
            },
            {
                exact: true,
                path: '/shipmentreturned',
                component: lazy(() => import('./views/shipment/Shipmentreturned'))
            },
            {
                exact: true,
                path: '/basic/typography',
                component: lazy(() => import('./views/ui-elements/basic/BasicTypography'))
            },

            {
                exact: true,
                path: '/adduser',
                component: lazy(() => import('./views/shipment/Adduser'))
            },
            {
                exact: true,
                path: '/tables/bootstrap',
                component: lazy(() => import('./views/tables/BootstrapTable'))
            },
            {
                exact: true,
                path: '/maps/google-map',
                component: lazy(() => import('./views/maps/GoogleMaps'))
            },

            {
                exact: true,
                path: '/manageuser',
                component: lazy(() => import('./views/shipment/Manageuser'))
            },
            {
                path: '*',
                exact: true,
                component: () => <Redirect to={BASE_URL} />
            }
        ]
    }
];

export default routes;
