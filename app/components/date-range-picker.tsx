"use client"

import { useState } from "react"

import { format, isValid } from "date-fns"
import { CalendarRangeIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DateRangePicker({
  label,
  value,
  onChange,
  placeholder = "Select date range",
  dateFormat = "P",
  icon = <CalendarRangeIcon className="h-4 w-4" />,
}: {
  label?: string
  value: DateRange | undefined
  onChange: (date: DateRange | undefined) => void
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
            {value &&
            value.from &&
            value.to &&
            isValid(value.from) &&
            isValid(value.to)
              ? format(value.from, dateFormat) +
                " - " +
                format(value.to, dateFormat)
              : placeholder}
            {icon}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="range"
            selected={value}
            captionLayout="dropdown"
            onSelect={(dateRange) => {
              onChange(dateRange)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
