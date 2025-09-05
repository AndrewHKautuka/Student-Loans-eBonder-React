"use client"

import { useState } from "react"

import { format, isValid } from "date-fns"
import { CalendarDaysIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function MultipleDatePicker({
  label,
  value,
  onChange,
  placeholder = "Select dates",
  dateFormat = "P",
  icon = <CalendarDaysIcon className="h-4 w-4" />,
}: {
  label?: string
  value: Date[] | undefined
  onChange: (date: Date[] | undefined) => void
  placeholder?: string
  dateFormat?: string
  icon?: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex w-full flex-col gap-3">
      {label && (
        <Label htmlFor="date" className="px-1">
          {label}
        </Label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full min-w-fit justify-between font-normal"
          >
            {value && value.length > 0 && value.every((date) => isValid(date))
              ? value.map((date) => format(date, dateFormat)).join(", ")
              : placeholder}
            {icon}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="multiple"
            selected={value}
            captionLayout="dropdown"
            onSelect={(dates) => {
              onChange(dates)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
