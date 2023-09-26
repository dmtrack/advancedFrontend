import './styles/index.scss';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;
