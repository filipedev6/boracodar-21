import { X } from '@phosphor-icons/react'
import { ProductTypes } from '../App'

interface HeaderProps {
  products: ProductTypes[]
}

export function Header({ products }: HeaderProps) {
  return (
    <header className="flex justify-between py-6 px-8">
      <span className="text-neutral-secondary">
        Seu carrinho tem{' '}
        <strong className="text-neutral-primary">
          {products.length + ' itens'}
        </strong>
      </span>

      <button>
        <X size={24} color="#A1A1AA" />
      </button>
    </header>
  )
}
