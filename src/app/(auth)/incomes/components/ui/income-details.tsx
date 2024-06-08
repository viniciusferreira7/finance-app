import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface IncomesDetailsProps { }

export function IncomeDetails(props: IncomesDetailsProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Identifier: 1845d454vd5s55s</DialogTitle>
        <DialogDescription>Income details</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Name</TableCell>
              <TableCell className="flex justify-end">Salary</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Category</TableCell>
              <TableCell className="flex justify-end">Job</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Value</TableCell>
              <TableCell className="flex justify-end">R$ 3500,00 </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div className="space-y-2 p-2">
          <p className="text-sm text-muted-foreground">Description</p>
          <p className="line-clamp-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quia blanditiis accusantium saepe debitis illum ab doloribus libero
            quae deserunt. Delectus ipsa accusantium ullam maxime rem voluptate
            at autem ipsum! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Excepturi quia blanditiis accusantium saepe debitis illum ab
            doloribus libero quae deserunt. Delectus ipsa accusantium ullam
            maxime rem voluptate at autem ipsum! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Excepturi quia blanditiis accusantium
            saepe debitis illum ab doloribus libero quae deserunt. Delectus ipsa
            accusantium ullam maxime rem voluptate at autem ipsum!
          </p>
        </div>

        <Table>
          <TableCaption>History</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Value</TableHead>
              <TableHead className="text-right">Category</TableHead>
              <TableHead className="text-right">Update at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>R$ 3500,00</TableCell>
              <TableCell className="text-right">Job</TableCell>
              <TableCell className="text-right">22/10/2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>R$ 2500,00</TableCell>
              <TableCell className="text-right">Job</TableCell>
              <TableCell className="text-right">22/08/2024</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
