import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/common/Header';
import ErrorBoundary from './ErrorBoundary';
import Error from '../components/common/Error';
import Footer from '../components/common/Footer';
import Loading from '../components/common/Loading';

const Root = () => {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <Header />
                <main className="main container">
                    <Suspense fallback={<Loading size="medium" />}>
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
        </>
    );
};

export default Root;
