import { useFormContext } from 'react-hook-form'

import * as Input from '@/components/ui/input'

export function CreatedAt() {
  const { register } = useFormContext()

  return (
    <Input.Root>
      <Input.Control placeholder="Created at" {...register('createdAt')} />
    </Input.Root>
  )
}
