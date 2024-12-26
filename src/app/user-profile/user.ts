export class User{
    private name: string;
    private email: string;
    private age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
        
    }

    //getters
    public getName(): string {
        return this.name;
    }
    
    public getEmail(): string {
        return this.email;
    }

    public getAge(): number {
        return this.age;
    }

    //setters
    public setName(name: string): void {
        this.name = name;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
    
    public setAge(age: number): void {
        if(age>0){
            this.age = age;
        }
        else{
            throw new Error("Age must be greater than 0");
        }
    }
}
