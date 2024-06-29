import { Fragment, } from "react"
import CategoryPreview from "../../components/category-preview"
import { useSelector } from "react-redux"
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/category/selectors"
import Spinner from "../../components/spinner"

export default function CategoriesPreview() {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    if (isLoading) return <Spinner />

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

