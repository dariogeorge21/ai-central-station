import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tech-text",
          variant === "default" &&
            "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
          variant === "destructive" &&
            "bg-red-600 text-white hover:bg-red-700",
          variant === "outline" &&
            "border border-gray-700/50 bg-gray-800/30 hover:bg-gray-700/50 text-gray-200 backdrop-blur-sm",
          variant === "secondary" &&
            "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30",
          variant === "ghost" &&
            "hover:bg-gray-800/50 text-gray-300 hover:text-white",
          variant === "link" &&
            "text-blue-400 underline-offset-4 hover:underline",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 rounded-md px-3",
          size === "lg" && "h-11 rounded-md px-8",
          size === "icon" && "h-10 w-10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button } 