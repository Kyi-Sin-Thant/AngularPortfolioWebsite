export class Tag{
    static readonly ANGULAR = new Tag('Angular','#e99bd3');
    static readonly TYPESCRIPT = new Tag('TypeScript','darkred');
    static readonly JAVA = new Tag('Java','orange');
    static readonly CSHARP = new Tag('C#','blue');
    static readonly ASPNET = new Tag('asp.net','purple');
    static readonly JAVASCRIPT= new Tag('JavaScript','yellow');
    static readonly VBNET = new Tag('Vb.Net','green');
    static readonly PHP = new Tag('Php','brown');
    static readonly REACT = new Tag('React','red');

   private constructor(private readonly key:string, public readonly color:string){

   }

   toString(){
    return this.key;
   }
}