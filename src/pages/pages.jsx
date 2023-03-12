import { Route, Routes } from "react-router-dom"

import { HomePage, MainPage, Error404Page } from "@pages"

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route exact path="main" element={<MainPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  )
}
