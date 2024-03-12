import { IRequestForm } from "./IRequestForm";
import { ISpecialist } from "./ISpecialist";

export type IAppStore = {
    specialists: ISpecialist[]
    getSpecialists: () => void;
    getNews: () => void;
    handleSubscribe: (email:String) => void;
    handleBookAppointmentAsync: (form:IRequestForm) => Promise<number> 
};