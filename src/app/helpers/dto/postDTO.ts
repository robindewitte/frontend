export class PostDTO{
    constructor(
        public username: string = "",
        public postMessage: string = "",
        public hashtag: string = "",
    ){
        
    }
}