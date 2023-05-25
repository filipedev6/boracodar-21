import { X } from '@phosphor-icons/react'

export function Header() {
  return (
    <header className="flex justify-between py-6 px-8">
      <span className="text-neutral-secondary">
        Seu carrinho tem{' '}
        <strong className="text-neutral-primary">5 itens</strong>
      </span>

      <button>
        <X size={24} color="#A1A1AA" />
      </button>
    </header>
  )
}
