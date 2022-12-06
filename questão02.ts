export default interface IObserver {
    update(text: string): void;
}

interface iSubject {
    subscribe(observer: IObserver): void;
    unsubscribe(observer: IObserver): void;
    unsubscribeAll(): void;
    notifyAll(): void;  
    notify(observer: IObserver): void;
}

class Observer1 implements IObserver {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
    update(text: string): void {
        const words = text.split(" ");
        console.log(`Observer1 ${this.id} recebeu a mensagem: ${text} e tem ${words.length} palavras`);      
    }
}
class Observer2 implements IObserver {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
    update(text: string): void {
        const words = text.split(" ");
        const wordsWithEvenLength = words.filter(word => word.length % 2 === 0);
        console.log(`Observer2 ${this.id} recebeu a mensagem: ${text} e tem ${wordsWithEvenLength.length} palavras com quantidade par de caracteres`);     
    }
}
class Observer3 implements IObserver {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
    update(text: string): void {
        const words = text.split(" ");
        const wordsWithUpperCase = words.filter(word => word[0] === word[0].toUpperCase());
        console.log(`Observer3 ${this.id} recebeu a mensagem: ${text} e tem ${wordsWithUpperCase.length} palavras começadas com maiúsculas`);   
    }
}

class Subject implements iSubject {
    private observers: IObserver[];
    private text: string;
    constructor(text: string) {
        this.text = text;
        this.observers = [];
    }

    setText(text: string): void {
        this.text = text;
        this.notifyAll();
    }

    subscribe(observer: IObserver): void {
        this.observers.push(observer);
    }
    unsubscribe(observer: IObserver): void {
        this.observers.splice(this.observers.indexOf(observer), 1);
    }
    unsubscribeAll(): void {
        this.observers = [];
    }
    notifyAll(): void {
        this.observers.forEach(observer => observer.update(this.text));
    }
    notify(observer: IObserver): void { 
        observer.update(this.text);
    }
}


const obs1 = new Observer1(1);
const obs2 = new Observer2(2);
const obs3 = new Observer3(3);

const subject = new Subject("Bom dia pessoal");

subject.subscribe(obs1);
subject.subscribe(obs2);
subject.subscribe(obs3);


subject.notifyAll();
subject.setText("lorem ipsum dolor sit amet");
