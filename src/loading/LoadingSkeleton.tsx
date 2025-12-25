// export default function LoadingSkeleton({ height = "h-24", text = "Loading..." }) {
//     return (
//         <div className={`rounded-lg bg-muted animate-pulse flex items-center justify-center ${height}`}>
//             <span className="text-sm text-muted-foreground">{text}</span>
//         </div>
//     );
// }



import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
