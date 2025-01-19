import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md px-3 py-1 text-xs font-bold rounded-full border border-border2 dark:border-soft uppercase mr-2 mb-1",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80",
        primary: 
          "bg-white dark:bg-hoversoft text-primary  ",
        secondary:
          "bg-white dark:bg-hoversoft text-foreground",
        warning:
          "bg-yellow text-yellow-foreground  rounded-sm border-none px-2",
        destructive:
          "bg-destructive text-destructive-foreground",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
