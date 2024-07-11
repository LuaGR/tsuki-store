import { useId } from 'react'
import Search from './Search'
import { SelectCategory } from './SelectCategory'

export function Filters({ filters, setFilters }) {
  const minPriceFilterId = useId()

  const handleChangeCategory = (category) => {
    setFilters((prevState) => ({
      ...prevState,
      category
    }))
  }
  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  return (
    <section className='relative grid grid-cols-2 auto-rows-max gap-4 gap-y-6 md:flex justify-evenly items-center md:items-stretch '>
      <div className='w-full md:w-auto flex justify-center'>
        <SelectCategory handleChangeCategory={handleChangeCategory} />
      </div>

      <div className='flex justify-center items-center gap-2 w-full md:w-auto'>
        <label
          htmlFor={minPriceFilterId}
          className='text-sm whitespace-nowrap'>
          Min. Price:
        </label>
        <input
          type='range'
          min='0'
          max='1000'
          step={50}
          id={minPriceFilterId}
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div className='w-full md:w-auto col-span-2 flex justify-center'>
        <Search />
      </div>
    </section>
  )
}
