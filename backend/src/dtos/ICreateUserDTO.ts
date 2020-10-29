export default interface ICreateUserDTO {
    name: string;
    cpf: string;
    avatar?: string;
    level?: string;
    email: string;
    password: string;
}
