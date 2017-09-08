export class Quiz {
    question: string;
    options: string [];
    answer: string;   
    // selected?: string;
    selected: string;

     constructor(qSource: Quiz) {
        Object.assign(this, qSource);
    }; 
}