import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AvatarBox(props:any) {
  return (
    <Avatar className="w-5 h-5">
      <AvatarImage src={props.img} />
      <AvatarFallback className="bg-blue-500 text-white text-sm">{props.name}</AvatarFallback>
    </Avatar>
  )
}
