import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

interface ProductCardProps {
  id: number
  name: string
  price: number
  preview: string
  onProductsMultiplyBy2: (id: number) => void
  onProductsDivideby2: (id: number) => void
}

export function ProductCard({
  id,
  name,
  price,
  preview,
  onProductsMultiplyBy2,
  onProductsDivideby2,
}: ProductCardProps) {
  const [productsQuantity, setProductsQuantity] = useState(1)

  function handleUpdateValueBy2() {
    setProductsQuantity((prev) => prev + 1)
    onProductsMultiplyBy2(id)
  }

  function handleDivideValueBy2() {
    setProductsQuantity((prev) => prev - 1)
    onProductsDivideby2(id)
  }

  return (
    <div className="flex gap-6">
      <div className="w-[104px] h-[104px]">
        <img src={preview} alt="" className="rounded-lg" />
      </div>

      <div className="flex flex-col justify-between w-[236px]">
        <span className="text-neutral-secondary font-normal text-base">
          {name.substring(0, 45).concat('...')}
        </span>
        <div className="flex gap-3 items-center justify-between">
          <span className="text-[#E4E4E7] font-bold text-base truncate">
            {Intl.NumberFormat('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)}
          </span>
          <div className="flex">
            <button
              onClick={handleDivideValueBy2}
              className="border-[.0938rem] border-[#3F3F46] rounded-lg h-10 w-10 flex items-center justify-center focus:border-[#A855F7] disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={productsQuantity === 1}
            >
              <Minus size={16} color="#A855F7" />
            </button>
            <span className="h-10 w-10 flex items-center justify-center text-neutral-100 text-base font-bold">
              {productsQuantity}
            </span>
            <button
              onClick={handleUpdateValueBy2}
              className="border-[.0938rem] border-[#3F3F46] rounded-lg h-10 w-10 flex items-center justify-center focus:border-[#A855F7]"
            >
              <Plus size={16} color="#A855F7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
