import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../contexts/categories"
import CategoryPreview from "../../components/category-preview"

export default function CategoriesPreview() {
    const { categoriesMap } = useContext(CategoriesContext)

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

