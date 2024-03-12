import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const SearchPage = lazy(() => import("../../pages/searchPage/SearchPage"));
const ContactsPage = lazy(() =>
  import("../../pages/contactsPage/ContactsPage")
);
const AboutUsPage = lazy(() => import("../../pages/aboutUsPage/AboutUsPage"));
const CatalogPage = lazy(() => import("../../pages/catalogPage/CatalogPage"));
const ProductPage = lazy(() => import("../../pages/productPage/ProductPage"));
const ShoppingCart = lazy(() => import("../../pages/cartPage/ShoppingCart"));
const CollectionsPage = lazy(() =>
  import("../../pages/collectionsPage/CollectionsPage")
);
const Generator = lazy(() => import("../../pages/generator/Generator"));

export const routes = [
  { id: 0, path: "/", element: <HomePage /> },
  { id: 1, path: "Home/Search", element: <SearchPage /> },
  { id: 2, path: "Home/Contacts", element: <ContactsPage /> },
  { id: 3, path: "Home/AboutUs", element: <AboutUsPage /> },
  { id: 4, path: "Home/Catalog", element: <CatalogPage /> },
  { id: 5, path: "Home/Product", element: <ProductPage /> },
  { id: 6, path: "Home/Cart", element: <ShoppingCart /> },
  { id: 7, path: "Home/Collections", element: <CollectionsPage /> },
  { id: 8, path: "Home/Generator", element: <Generator /> },
];
