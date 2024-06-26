import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview";
import Category from "../category";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/category/actions";
import { useDispatch } from "react-redux";

export default function Shop() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategoriesStart())
    }, [dispatch])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    )
}

