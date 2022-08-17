import type { AutocompleteItem } from '../Autocomplete';

interface FilterData {
  data: AutocompleteItem[];
  limit: number;
  value: string;
  filter(value: string, item: AutocompleteItem): boolean;
  filterLenMin: number;
}

export function filterData({ data, limit, value, filter, filterLenMin }: FilterData) {
  const result = [];
  if(value.length<filterLenMin){
    return result;
  }
  for (let i = 0; i < data.length; i += 1) {
    if (filter(value, data[i])) {
      result.push(data[i]);
    }
    
    if (result.length >= limit) {
      break;
    }
  }
    
  return result;
}
