"use client"

import { useState } from "react"

import { format, isValid } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({
  label,
  value,
  minDate,
  maxDate,
  onChange,
  placeholder = "Select date",
  dateFormat = "P",
  icon = <CalendarIcon className="h-4 w-4" />,
  required = false,
}: {
  label?: string
  value: Date | undefined
  minDate?: Date
  maxDate?: Date
  onChange: (date: Date | undefined) => void
  placeholder?: string
  dateFormat?: string
  icon?: React.ReactNode
  required?: boolean
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
            {value && isValid(value) ? format(value, dateFormat) : placeholder}
            {icon}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            captionLayout="dropdown"
            disabled={(date) => {
              if (minDate && date < minDate) return true
              if (maxDate && date > maxDate) return true
              return false
            }}
            onSelect={(date: Date | undefined) => {
              onChange(date)
              setOpen(false)
            }}
            required={required}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
