import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { CalendarIcon, Loader2, SquarePlus } from "lucide-react"
import * as React from "react"
import { toast } from "sonner"

/* ================= SAFE DATE FORMATTER ================= */
function formatDate(value?: Date | string) {
    if (!value) return ""

    const date = typeof value === "string" ? new Date(value) : value
    if (isNaN(date.getTime())) return ""

    // Format like: Jan 19, 2026 06:00 PM
    return date.toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    })
}

/* ================= TYPES ================= */
export interface CalendarEvent {
    id: number
    title: string
    color: string
    label: string
    startTime: string
    endTime: string
    description: string
}

interface EditEventProps {
    event: CalendarEvent
    onEditEvent: (event: CalendarEvent) => void
}

/* ================= COMPONENT ================= */
const EditEvent: React.FC<EditEventProps> = ({ event, onEditEvent }) => {
    const [dialogOpen, setDialogOpen] = React.useState(false)
    const [submitForm, setSubmitForm] = React.useState(false)

    const [name, setName] = React.useState("")
    const [label, setLabel] = React.useState("")
    const [description, setDescription] = React.useState("")

    const [startDate, setStartDate] = React.useState<Date | undefined>()
    const [endDate, setEndDate] = React.useState<Date | undefined>()

    const [openStart, setOpenStart] = React.useState(false)
    const [openEnd, setOpenEnd] = React.useState(false)

    /* ============ LOAD EVENT DATA ============ */
    React.useEffect(() => {
        if (!dialogOpen) return

        setName(event.title ?? "")
        setLabel(event.label ?? "")
        setDescription(event.description ?? "")

        const start = new Date(event.startTime)
        const end = new Date(event.endTime)

        setStartDate(!isNaN(start.getTime()) ? start : undefined)
        setEndDate(!isNaN(end.getTime()) ? end : undefined)
    }, [dialogOpen, event])





    /* ================= SUBMIT ================= */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!label || !startDate || !endDate) {
            toast.error("Please fill all required fields")
            return
        }

        setSubmitForm(true)

        onEditEvent({
            id: event.id,
            title: name,
            label,
            description,
            startTime: startDate.toISOString(), // backend format
            endTime: endDate.toISOString(),
            color:
                label === "Personal"
                    ? "bg-green-500"
                    : label === "Business"
                        ? "bg-primary"
                        : label === "Family"
                            ? "bg-yellow-500"
                            : label === "Important"
                                ? "bg-purple-500"
                                : "bg-red-500",
        })

        setTimeout(() => {
            setSubmitForm(false)
            setDialogOpen(false)
            toast.success("Event updated successfully!")
        }, 500)
    }

    /* ================= JSX ================= */
    return (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
                <span className="cursor-pointer flex items-center gap-2 px-2 py-1 text-neutral-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-sm">
                    <SquarePlus className="w-4" />
                    Edit
                </span>
            </DialogTrigger>

            <DialogContent className="!max-w-[800px] p-0">
                <DialogHeader>
                    <div className="py-4 px-6 border-b">
                        <DialogTitle>Edit Event</DialogTitle>
                    </div>
                </DialogHeader>

                <div className="p-6">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-12 gap-6">

                            {/* TITLE */}
                            <div className="col-span-12">
                                <Label>Event Title</Label>
                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="h-[46px] px-5"
                                    required
                                />
                            </div>

                            {/* START DATE */}
                            <div className="col-span-12 md:col-span-6">
                                <Label>Start Date</Label>
                                <div className="relative">
                                    <Input
                                        readOnly
                                        value={formatDate(startDate)}
                                        placeholder="June 01, 2025"
                                        className="h-[46px] px-5 pe-10"
                                        onClick={() => setOpenStart(true)}
                                    />
                                    <Popover open={openStart} onOpenChange={setOpenStart}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="absolute top-1/2 right-2 -translate-y-1/2 size-6"
                                            >
                                                <CalendarIcon className="size-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0">
                                            <Calendar
                                                mode="single"
                                                selected={startDate}
                                                onSelect={(d) => {
                                                    if (!d) return
                                                    setStartDate(d)
                                                    setOpenStart(false)
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            {/* END DATE */}
                            <div className="col-span-12 md:col-span-6">
                                <Label>End Date</Label>
                                <div className="relative">
                                    <Input
                                        readOnly
                                        value={formatDate(endDate)}
                                        placeholder="June 01, 2025"
                                        className="h-[46px] px-5 pe-10"
                                        onClick={() => setOpenEnd(true)}
                                    />
                                    <Popover open={openEnd} onOpenChange={setOpenEnd}>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant="ghost"
                                                className="absolute top-1/2 right-2 -translate-y-1/2 size-6"
                                            >
                                                <CalendarIcon className="size-4" />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="p-0">
                                            <Calendar
                                                mode="single"
                                                selected={endDate}
                                                onSelect={(d) => {
                                                    if (!d) return
                                                    setEndDate(d)
                                                    setOpenEnd(false)
                                                }}
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            {/* EVENT TYPE */}
                            <div className="col-span-12">
                                <RadioGroup
                                    value={label}
                                    onValueChange={setLabel}
                                    className="flex flex-wrap gap-6"
                                >
                                    {["Personal", "Business", "Family", "Important", "Holiday"].map(
                                        (type) => (
                                            <div key={type} className="flex items-center gap-2">
                                                <RadioGroupItem value={type} />
                                                <Label>{type}</Label>
                                            </div>
                                        )
                                    )}
                                </RadioGroup>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="col-span-12">
                                <Label>Description</Label>
                                <Textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="h-[120px]"
                                />
                            </div>

                            {/* FOOTER */}
                            <div className="col-span-12">
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline" className='h-[50px] px-8 border-red-600 hover:bg-red-100 hover:bg-red-600 text-red-600'>Cancel</Button>
                                    </DialogClose>
                                    <Button type="submit" className='h-[50px] !px-8'>
                                        {
                                            submitForm ? (
                                                <>
                                                    <Loader2 className="animate-spin h-4.5 w-4.5" />
                                                    Saving...
                                                </>
                                            ) : (
                                                <>
                                                    Save changes
                                                </>
                                            )
                                        }
                                    </Button>
                                </DialogFooter>
                            </div>

                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default EditEvent;