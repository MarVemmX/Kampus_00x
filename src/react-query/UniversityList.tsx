import { HStack, Select, VStack } from "@chakra-ui/react";
import useUniversity from "./hooks/useUniversity";
import { useState } from "react";

interface Location {
  [key: string]: {
    [id: string]: string;
  };
}

const UniversityList = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const { data } = useUniversity(0);

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLocation(event.target.value);
  };

  const selectedLocationData = data.find(
    (location: Location) => Object.keys(location)[0] === selectedLocation
  );
  const universities: { [id: string]: string } = selectedLocationData
    ? selectedLocationData?.[selectedLocation as keyof Location]
    : {};

  return (
    <VStack>
      <Select
        w="85vw"
        px={2.5}
        onChange={handleLocationChange}
        value={selectedLocation}
        placeholder="Select Location"
        id="locations"
      >
        {data &&
          data?.map((locationData: Location, index: number) => {
            const location = Object.keys(locationData)[0];
            return (
              <option key={index} value={location}>
                {location}
              </option>
            );
          })}
      </Select>
      <Select w="85vw" px={2.5} placeholder="Select Campus">
        {Object.entries(universities).map(([id, name]) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </VStack>
  );
};

export default UniversityList;
