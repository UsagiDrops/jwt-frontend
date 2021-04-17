import { RouterLink } from "@angular/router";
import { Role } from "./Role";

export class User {
    id: number
    email: String;
    roles: Role[];
    enabled: boolean;
}