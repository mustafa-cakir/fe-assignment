import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import ErrorBoundary from './ErrorBoundary';
import Error from '../components/common/Error';
import Footer from '../components/Footer';
import Loading from '../components/common/Loading';
import routes from './Routes';

const Root = () => {
    return (
        <div className="App">
            <BrowserRouter basename="fe-assignment">
                <Header />
                <main className="main">
                    <Suspense fallback={<Loading size="initial" />}>
                        <Switch>
                            {routes.map(({ path, Component }) => {
                                return (
                                    <Route
                                        key={path}
                                        exact
                                        path={path}
                                        render={() => (
                                            <ErrorBoundary>
                                                <Component />
                                            </ErrorBoundary>
                                        )}
                                    />
                                );
                            })}
                            <Route
                                render={() => (
                                    <Error statusCode={404} message="Page Not Found." subtitle="That's all we know" />
                                )}
                            />
                        </Switch>
                    </Suspense>
                </main>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Root;
