import type { ColumnDef } from "@tanstack/react-table"

import { Checkbox } from "@/components/ui/checkbox"

export const selectColumn = <T,>(): ColumnDef<T> => ({
  id: "select",
  header: ({ table }) => (
    <Checkbox
      checked={
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && "indeterminate")
      }
      onChange={() =>
        table.toggleAllPageRowsSelected(!table.getIsAllPageRowsSelected())
      }
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      checked={row.getIsSelected()}
      onChange={() => row.toggleSelected(!row.getIsSelected())}
    />
  ),
  enableSorting: false,
  enableHiding: false,
})
