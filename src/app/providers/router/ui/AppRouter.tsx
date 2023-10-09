import { routeConfig } from '@/shared/config/routeConfig/routeConfig';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => {
                    <Route key={path} element={element} path={path} />;
                })}
            </Routes>
        </Suspense>
    );
};
