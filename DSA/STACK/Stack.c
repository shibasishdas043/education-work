#include<stdio.h>
#include<stdlib.h>

#define SIZE 10
int stack[SIZE];
int top = -1;

void push_To_Stack(int value) {
    if(top == SIZE-1) {
        return;
    }
    top++;
    stack[top] = value;
}

void delete_Stack_Values() {
    int pop_Value = stack[top];
    top--;
    printf("Deleted Value : %d \n",pop_Value);
}

void print_Values() {
    if (top == -1) {
        printf("Stack Is Empty !");
        return;
    }
    else {
        for (int i = 0; i <= top; i++) {
            printf("Stack Items : %d \n", stack[i]);
        }
    }
}

int main(){
    push_To_Stack(10);
    push_To_Stack(20);
    push_To_Stack(30);
    push_To_Stack(40);
    push_To_Stack(50);
    push_To_Stack(60);
    push_To_Stack(70);
    push_To_Stack(80);
    push_To_Stack(90);
    push_To_Stack(100);

    print_Values();
    printf("\n");
    delete_Stack_Values();
    printf("\n");
    print_Values();


    return 0;
}