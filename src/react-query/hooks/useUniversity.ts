import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import universityList from "../../data/universties"

interface University{
    [location: string]: {
        [id: string]: string;
      };
}


const useUniversity = (userId: number | undefined) => ({ data: universityList, isLoading: false, error: null
    
});
export default useUniversity;