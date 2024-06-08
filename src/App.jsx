import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { CatalogPage } from "./Pages/CatalogPage/CatalogPage";
import { FavoritesPage } from "./Pages/FavoritesPage/FavoritesPage";
import { ModalDetailsPage } from "./components/modal/ModalDetailsPage";
import { CamperFeatures } from "./components/CamperFeatures/CamperFeatures";
import { CamperReviews } from "./components/CamperReviews/CamperReviews";
import { Layout } from "./components/Layout/Layout";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />}>
          <Route path="/catalog/:camperId" element={<ModalDetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Route>
        <Route path="/favorite" element={<FavoritesPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;