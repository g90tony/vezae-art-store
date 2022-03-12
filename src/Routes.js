import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./ui/pages/company/landing";
import AboutPage from "./ui/pages/company/about";
import ContactsPage from "./ui/pages/company/contacts";

import Error404Page from "./ui/pages/company/404";

import ShopAllCollectionsPage from "./ui/pages/shop/allCollections";
import ShopAllProductsPage from "./ui/pages/shop/allProducts";
import GalleryPage from "./ui/pages/company/gallery";

import ShopViewProductPage from "./ui/pages/shop/viewProduct";
import ShopViewCollectionPage from "./ui/pages/shop/viewCollection";
import ShopCheckoutPage from "./ui/pages/shop/checkout";

class parameterResolver {
  constructor() {
    this.parameters = {};
  }

  setParameters(parameters) {
    this.parameters = parameters;
  }

  getParameters() {
    return this.parameters;
  }
}

const parameterResolverObj = new parameterResolver();

export const routes = [
  {
    path: "**",
    exact: true,
    hasParams: false,
    loadData: (data) => parameterResolverObj.setParameters(data),
    component: <Error404Page />,
  },
  {
    path: "/",
    exact: true,
    hasParams: false,
    loadData: (data) => parameterResolverObj.setParameters(data),
    component: <LandingPage />,
  },
  {
    path: "/about-us",
    exact: false,
    hasParams: false,
    loadData: (data) => parameterResolverObj.setParameters(data),
    component: <AboutPage />,
  },
  {
    path: "/contact-us",
    exact: false,
    hasParams: false,
    loadData: (data) => parameterResolverObj.setParameters(data),

    component: <ContactsPage />,
  },
  {
    path: "/gallery",
    exact: false,
    hasParams: false,
    loadData: (data) => parameterResolverObj.setParameters(data),

    component: <GalleryPage />,
  },
  {
    path: "/shop/collections/:filter",
    exact: false,
    hasParams: false,
    loadData: (data) => parameterResolverObj.setParameters(data),

    component: <ShopAllCollectionsPage />,
  },
  {
    path: "/shop/pieces/:filter",
    exact: false,
    hasParams: true,
    loadData: (data) => parameterResolverObj.setParameters(data),
    component: <ShopAllProductsPage />,
  },
  {
    path: "/shop/collections/view/:id",
    exact: false,
    hasParams: true,
    loadData: (data) => parameterResolverObj.setParameters(data),
    component: <ShopViewCollectionPage />,
  },
  {
    path: "/shop/pieces/view/:id",
    exact: false,
    hasParams: true,
    loadData: (data) => parameterResolverObj.setParameters(data),
    component: <ShopViewProductPage />,
  },
  {
    path: "/shop/checkout",
    exact: false,
    hasParams: true,
    loadData: (data) => parameterResolverObj.setParameters(data),
    component: <ShopCheckoutPage />,
  },
];
export function RoutingTable(props) {
  const [routesTable, setRoutesTable] = React.useState([]);

  React.useEffect(() => {
    setRoutesTable(routes);

    return () => {
      setRoutesTable([]);
    };
  }, [routesTable]);

  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={routesTable.indexOf(route)}
            exact={route.exact}
            path={route.path}
            element={route.component}
          />
        );
      })}
    </Routes>
  );
}
