import { Button } from "@/components/ui/button"

export default function BackButton(props:any) {
  return (
    <div>
      <div className="w-6 border-t mx-auto mt-8" />
      <Button asChild variant="secondary" className="flex items-center gap-1 mx-auto my-4">
        <a href="/">
          {props.children}
          返回首页
        </a>
      </Button>
    </div>
  )
}
