import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useFilterStore } from '@/stores/useFilterStore'

export function SelectCategory() {
  const category = useFilterStore((state) => state.category)
  const setCategory = useFilterStore((state) => state.setCategory)

  const handleChangeCategory = (value: string) => {
    setCategory(value)
  }

  return (
    <Select
      value={category}
      onValueChange={handleChangeCategory}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Selecciona un anime' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Animes</SelectLabel>
          <SelectItem value='all'>Todos</SelectItem>
          <SelectItem value='Naruto'>Naruto</SelectItem>
          <SelectItem value='One Piece'>One Piece</SelectItem>
          <SelectItem value='Dragon Ball'>Dragon Ball</SelectItem>
          <SelectItem value='Demon Slayer'>Demon Slayer</SelectItem>
          <SelectItem value='Jujutsu Kaisen'>Jujutsu Kaisen</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
