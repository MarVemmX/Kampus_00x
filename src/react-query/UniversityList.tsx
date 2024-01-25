import { Flex, HStack, Select, VStack } from "@chakra-ui/react";
import useUniversity from "./hooks/useUniversity";
import { useState } from "react";

interface Location {
  [key: string]:
    | {
        [id: string | number]: string;
      }
    | undefined;
}

interface UniversityListProps {
  onUniversityChange: (value: string) => void;
  onLocationChange: (value: string) => void;
}

const UniversityList: React.FC<UniversityListProps> = ({
  onUniversityChange,
  onLocationChange,
}) => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const { data } = useUniversity(0);

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const locationValue = event.target.value;
    setSelectedLocation(event.target.value);
    onUniversityChange(""); // Reset selected university when location changes
    onLocationChange(locationValue);
  };

  const handleUniversityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onUniversityChange(event.target.value);
  };

  const selectedLocationData = data.find(
    (location: Location) => Object.keys(location)[0] === selectedLocation
  );
  const universities: { [id: string]: string } = selectedLocationData
    ? //@ts-ignore
      selectedLocationData?.[selectedLocation as keyof Location]
    : {};

  return (
    <Flex flexDirection="column" mb={2}>
      <Select
        background="rgba(255, 119, 0, 0.12)"
        h={16}
        border="none"
        borderRadius="8px"
        focusBorderColor="rgba(255, 119, 0, 0.5 )"
        mb={4}
        onChange={handleLocationChange}
        value={selectedLocation}
        placeholder="State"
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
      <Select
        background="rgba(255, 119, 0, 0.12)"
        h={16}
        border="none"
        borderRadius="8px"
        focusBorderColor="rgba(255, 119, 0, 0.5 )"
        placeholder="University"
        onChange={handleUniversityChange}
      >
        {Object.entries(universities).map(([id, name]) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default UniversityList;
