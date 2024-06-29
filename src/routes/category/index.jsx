import { useParams } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'
import ProductCard from '../../components/product-card'
import { CategoryContainer, CategoryTitle } from './category.styles.js'
import { useSelector } from 'react-redux'
import { selectCategoriesIsLoading, selectCategoriesMap, } from '../../store/category/selectors.js'
import Spinner from '../../components/spinner/index.jsx'


export default function Category() {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState(categoriesMap[category])
    const isLoading = useSelector(selectCategoriesIsLoading)
    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <CategoryTitle className='category-title'>{category.toUpperCase()}</CategoryTitle>

            {(isLoading) ? <Spinner /> :
                <CategoryContainer className='category-container'>
                    {
                        products && products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </CategoryContainer>
            }
        </Fragment>
    )
}