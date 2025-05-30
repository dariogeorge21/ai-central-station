"use client"

import React from 'react'
import { aiTools, type AITool } from '@/data/exploreIndex'

interface ProductOverviewProps {
  toolId: string;
}

/**
 * ProductOverview - Placeholder component for the detailed view
 * This component has been cleaned up to accommodate new styling and design
 */
const ProductOverview = ({ toolId }: ProductOverviewProps) => {
  const tool = aiTools.find(t => t.id === toolId) as AITool

  if (!tool) return null

  return (
    <div className="product-overview-container">
      {/* Product details will be redesigned */}
    </div>
  )
}

export default ProductOverview 