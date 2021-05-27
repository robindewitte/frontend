export class RegisterDTO{
    constructor(
        public username: string = "",
        public emailAdress: string = "",
        public password: string = "",
        public passwordConfirm: string = "",
    ){}
    
}