import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/homePage/HomePage"));
const SearchPage = lazy(() => import("../../pages/searchPage/SearchPage"));
const ContactsPage = lazy(() =>
  import("../../pages/contactsPage/ContactsPage")
);
const AboutUsPage = lazy(() => import("../../pages/aboutUsPage/AboutUsPage"));
const CatalogPage = lazy(() => import("../../pages/catalogPage/CatalogPage"));
const ProductPage = lazy(() => import("../../pages/productPage/ProductPage"));
const ShopingCart = lazy(() => import("../../pages/cartPage/ShopingCart"));
const CollectionsPage = lazy(() =>
  import("../../pages/collectionsPage/CollectionsPage")
);

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "Home/Search", element: <SearchPage /> },
  { path: "Home/Contacts", element: <ContactsPage /> },
  { path: "Home/AboutUs", element: <AboutUsPage /> },
  { path: "Home/Catalog", element: <CatalogPage /> },
  { path: "Home/Product", element: <ProductPage /> },
  { path: "Home/Cart", element: <ShopingCart /> },
  { path: "Home/Collections", element: <CollectionsPage /> },
];
