import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Blog = lazy(() => import('pages/Blog'));
const Chart = lazy(() => import('pages/Chart'));

const Layout = lazy(() => import('components/Layout/MainLayout'));
const BlogLayout = lazy(() => import('components/Layout/BlogLayout'));

export default function Router() {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chart" element={<Chart />} />
        </Route>
        <Route element={<BlogLayout />}>
            <Route path="/blog" element={<Blog />} />
        </Route>
    </Routes>
  );
}
