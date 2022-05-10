import { Issue } from "./issue.model";

export class BookBr{
    id: number;
    nome: string;
    editora: string;
    data: Date;
    urlCover: string;
    issues: Issue[];
}