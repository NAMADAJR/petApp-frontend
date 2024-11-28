import * as React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./Tooltip"

const ChartContainer = React.forwardRef(({ config, className, children, ...props }, ref) => (
  <div ref={ref} className={className} {...props}>
    {children}
  </div>
))
ChartContainer.displayName = "ChartContainer"

const ChartTooltip = ({ children, ...props }) => (
  <TooltipProvider>
    <Tooltip {...props}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
    </Tooltip>
  </TooltipProvider>
)

const ChartTooltipContent = React.forwardRef(({ className, ...props }, ref) => (
  <TooltipContent
    ref={ref}
    className={cn("border-none bg-background p-0 shadow-xl", className)}
    {...props}
  />
))
ChartTooltipContent.displayName = "ChartTooltipContent"

export { ChartContainer, ChartTooltip, ChartTooltipContent }

