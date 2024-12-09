#include<iostream>
using namespace std;

#define MAX_SIZE 4
int stack[MAX_SIZE];
int top = -1;

void push(int pushedElement){
    if(top == MAX_SIZE - 1){
        cout << "Stack Is Full!" << endl;
        return;
    }
    stack[++top] = pushedElement;
    cout << "Pushed Successfully: " << pushedElement << endl;
}

void pop(){
    // if stack is empty, then top will be -1
    if(top == -1){
        cout << "Stack Is Empty!" << endl;
        return;
    }
    int item = stack[top--];
    cout << "Popped Successfully: " << item << endl;
}

void display(){
    if(top == -1){
        cout << "Stack Is Empty!" << endl;
        return;
    }
    cout << "Current Stack: ";
    for(int i = 0; i <= top; i++){
        cout << stack[i] << " ";
    }
    cout << endl;
}

int main(){
    int choice, element;

    while(true){
        cout << "\nEnter Choice (1 = Push, 2 = Pop, 3 = Display, 4 = Exit): ";
        cin >> choice;

        switch(choice){
            case 1:
                cout << "Enter your element to push: ";
                cin >> element;
                push(element);
                break;

            case 2:
                pop();
                break;

            case 3:
                display();
                break;

            case 4:
                cout << "Exiting program." << endl;
                return 0;

            default:
                cout << "Invalid Choice!" << endl;
        }
    }

    return 0;
}
   
