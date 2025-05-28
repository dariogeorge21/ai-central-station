"use client"

import React from 'react'
import { AITool } from '@/data/exploreIndex'

interface ProductCardProps {
  tool: AITool;
  onSelect: () => void;
}

/**
 * ProductCard - Placeholder component for future card design
 * This component has been cleaned up to accommodate new styling and design
 */
const ProductCard = ({ tool, onSelect }: ProductCardProps) => {
  return (
    <div className="product-card-container">
      {/* Card content will be redesigned */}
    </div>
  )
}

export default ProductCard 