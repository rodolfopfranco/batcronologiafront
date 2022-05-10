import { Issue } from "./issue.model";

export class BookChrono {
    id: number;
    orderNumber: number;
    datePublish: Date;
    name: string;
    description: string;
    urlCover: string;
    issues: Issue[];
}