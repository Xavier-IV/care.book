'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Search } from 'lucide-react'
import { useState } from 'react'
import { SearchModal } from './SearchModal'

export function ButtonGroup() {
  const pathname = usePathname()
  const router = useRouter()
  const [showSearchModal, setShowSearchModal] = useState(false)

  const handleSearch = (query: string) => {
    // Implement search logic here
    console.log('Searching for:', query)
    setShowSearchModal(false)
  }

  return (
    <div className="flex justify-between mb-4">
      {pathname !== '/' && (
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}
      <Button variant="outline" size="icon" onClick={() => setShowSearchModal(true)}>
        <Search className="h-4 w-4" />
      </Button>
      {showSearchModal && (
        <SearchModal onClose={() => setShowSearchModal(false)} onSearch={handleSearch} />
      )}
    </div>
  )
}

