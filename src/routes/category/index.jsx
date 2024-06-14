import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories'
import { Fragment, useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/product-card'
import { CategoryContainer, CategoryTitle } from './category.styles.js'


export default function Category() {
    const { category } = useParams()
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])
    return (
        <Fragment>

            <CategoryTitle className='category-title'>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer className='category-container'>
                {
                    products && products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </CategoryContainer>
        </Fragment>
    )
}