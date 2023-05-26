import { Tag } from '@phosphor-icons/react'
import { Header } from './components/Header'
import { ProductCard } from './components/ProductCard'

import { useState } from 'react'

const data = [
  {
    id: 1,
    name: 'Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD',
    price: 1000,
    preview: '/images/product-image-cadeira.jpg',
  },
  {
    id: 2,
    name: 'Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD',
    price: 1599.9,
    preview: '/images/product-image-cadeira.jpg',
  },
  {
    id: 3,
    name: 'Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD',
    price: 2599.9,
    preview: '/images/product-image-cadeira.jpg',
  },
  {
    id: 4,
    name: 'Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD',
    price: 4999.9,
    preview: '/images/product-image-cadeira.jpg',
  },
]

export type ProductTypes = {
  id: number
  name: string
  price: number
  preview: string
}

function App() {
  const [products, setProducts] = useState<ProductTypes[]>(data)

  const sumPricesOfProducts = products.reduce(
    (acc, product) => product.price + acc,
    0,
  )

  function onProductsMultiplyBy2(id: number) {
    const ProductPriceUpdated = (old: typeof products) => {
      return old.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            price: product.price * 2,
          }
        }
        return product
      })
    }
    setProducts((old) => ProductPriceUpdated(old))
  }

  function onProductsDivideby2(id: number) {
    const ProductPriceUpdated = (old: typeof products) => {
      return old.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            price: product.price / 2,
          }
        }
        return product
      })
    }
    setProducts((old) => ProductPriceUpdated(old))
  }

  return (
    <div className="bg-others-background h-screen flex flex-col font-inter">
      <aside className="bg-neutral-surface h-screen w-full max-w-[428px] fixed right-0 top-0 flex flex-col">
        <Header products={products} />
        <div className="flex flex-col flex-1 gap-12 p-6 border-t border-[#3F3F46] overflow-y-auto">
          {products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                key={product.id}
                name={product.name}
                preview={product.preview}
                price={product.price}
                onProductsMultiplyBy2={onProductsMultiplyBy2}
                onProductsDivideby2={onProductsDivideby2}
              />
            )
          })}
        </div>
        <div className="flex flex-col justify-between bg-neutral-surface h-56 w-full border-t border-neutral-stroke p-8">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="font-normal text-xl text-neutral-secondary">
                Total:
              </span>

              <span className="text-xl font-bold text-neutral-primary">
                {Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(sumPricesOfProducts)}
              </span>
            </div>
            <a
              href=""
              className="flex items-center self-end text-brand-color text-base font-normal gap-2 hover:text-brand-color-light transition-colors"
            >
              <Tag size={24} />
              Adicionar cupom
            </a>
          </div>
          <button className="bg-brand-color rounded-lg text-lg font-medium text-neutral-primary h-16 hover:bg-brand-color-light transition-all">
            Finalizar compra
          </button>
        </div>
      </aside>
    </div>
  )
}

export default App
