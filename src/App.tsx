import { Header } from './components/Header'

import ProductImageCadeira from './assets/images/product-image-cadeira.jpg'
import ProductImageHeadset from './assets/images/product-image-headset.jpg'
import ProductImageMonitor from './assets/images/product-image-monitor.jpg'
import ProductImagePatinho from './assets/images/product-image-patinho.jpg'
import ProductImageTeclado from './assets/images/product-image-teclado.jpg'
import { Minus, Plus } from '@phosphor-icons/react'

function App() {
  return (
    <aside className="bg-others-background h-screen flex flex-col font-inter">
      <div className="bg-neutral-surface h-full w-full max-w-[428px] self-end">
        <Header />
        <div className="flex flex-col p-8 border-t border-[#3F3F46]">
          <div className="flex gap-6">
            <div className="w-[104px] h-[104px]">
              <img src={ProductImageCadeira} alt="" className="rounded-lg" />
            </div>

            <div className="flex flex-col justify-between w-[236px]">
              <span className="text-neutral-secondary font-normal text-base">
                Cadeira Gamer RGB - Preta com Iluminação (Led)
              </span>
              <div className="flex gap-3 items-center justify-between">
                <span className="text-[#E4E4E7] font-bold text-base">
                  R$ 959,90
                </span>
                <div className="flex">
                  <button className="border border-[#3F3F46] rounded-lg h-10 w-10 flex items-center justify-center">
                    <Minus size={16} color="#A855F7" />
                  </button>
                  <span className="h-10 w-10 flex items-center justify-center text-neutral-100 text-base font-bold">
                    1
                  </span>
                  <button className="border border-[#3F3F46] rounded-lg h-10 w-10 flex items-center justify-center">
                    <Plus size={16} color="#A855F7" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default App
