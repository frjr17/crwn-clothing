import { Fragment, } from "react"
import CategoryPreview from "../../components/category-preview"
import { useSelector } from "react-redux"
import { selectCategoriesMap } from "../../store/category/selectors"

export default function CategoriesPreview() {
    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((category) => {
                    const products = categoriesMap[category]
                    return (
                        <CategoryPreview key={category} title={category} products={products} />
                    )
                })

            }
        </Fragment>
    )
}

