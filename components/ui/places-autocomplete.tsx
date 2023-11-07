import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import React from 'react'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"


const PlacesAutocomplete = ({ setSelected }: { setSelected: (place: any) => void }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({requestOptions: {componentRestrictions: {country: 'nz'}}});

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setSelected({ lat, lng });
  };

  // console.log(data)
  return (
    <Command>
      <CommandInput
        placeholder="Type a command or search..."
        value={value}
        disabled={!ready}
        onValueChange={setValue}
      />
      <CommandList >
        <CommandGroup >
          {data.map(({ place_id, description }) => {
            return (
              <CommandItem onSelect={handleSelect} key={place_id}>
                {description}
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default PlacesAutocomplete;