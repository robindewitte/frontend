export class LoginDTO{
   //region fields
   private username: String;
   private password: String;
   //endregion

   //region constructors
   public LoginDTO(){

   }
   //endregion

   //region getters/setter

    public getUsername(): String{
       return this.username;
    }

    public setUsername(username: String): void{
       this.username = username;
    }

    public getPassword():String {
       return this.password;
    }

    public setPassword(password: string): void{
       this.password = password;
    }

   //endregion

}