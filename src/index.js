import React, { Suspense } from 'react'; // Thêm import Suspense
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from './routers/routers';
import { Loading } from './components/Loading';
import { Layout } from 'antd';
import GlobalStyles from './components/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <BrowserRouter>
                <Layout>
                    <Suspense fallback={<Loading />}>
                        <Routes>
                            {routers.map((router, index) => {
                                const Page = router.component;
                                return (
                                    <Route
                                        key={index}
                                        path={router.path}
                                        element={<Page />}
                                    >
                                        {router.children &&
                                            router.children.map(
                                                (child, childIndex) => {
                                                    const ChildPage =
                                                        child.component;
                                                    return (
                                                        <Route
                                                            key={childIndex}
                                                            path={child.path}
                                                            element={
                                                                <ChildPage />
                                                            }
                                                        />
                                                    );
                                                },
                                            )}
                                    </Route>
                                );
                            })}
                        </Routes>
                    </Suspense>
                </Layout>
            </BrowserRouter>
        </GlobalStyles>
    </React.StrictMode>,
);
reportWebVitals();
