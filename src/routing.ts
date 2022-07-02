import React, { LazyExoticComponent } from 'react';
const DefPage = React.lazy(() =>
    import('./pages/MainPage').then((module) => ({
        default: module.MainPage,
    }))
);

const PageNotFound = React.lazy(() =>
    import('./pages/NotFound').then((module) => ({
        default: module.NotFound,
    }))
);

interface PageRouting {
    title: string;
    path: string;
    component: LazyExoticComponent<any>;
}

const PageNotFoundRouting: PageRouting = {
    title: 'Page Not Found',
    path: '*',
    component: PageNotFound,
};

export const Routing: PageRouting[] = [
    {
        title: 'Page Not Found',
        path: '/404',
        component: PageNotFound,
    },
    {
        title: 'everything',
        path: '/:slug',
        component: DefPage,
    },
    {
        title: 'everything',
        path: '/',
        component: DefPage,
    },
    PageNotFoundRouting,
];
