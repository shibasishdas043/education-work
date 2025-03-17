#include<stdio.h>
#include<stdlib.h>

#define SIZE 6
int arr_Que[SIZE];
int front = -1;
int rear = -1;

void insert_To_Que(int value) {
    if(rear == SIZE-1) {
        printf("Que Is Overflow");
        return;
    }
    else if(rear == -1) {
        front = rear = 0;
    }
    else {
        rear++;
        arr_Que[rear] = value;
    }
}

void delete_Que() {
    if (front == -1) {
        printf("Que Is Underflow !");
        return;
    }
    else if(front == rear) {
        front = rear = -1;
    }
    else {
        int temp = arr_Que[front];
        front++;
        printf("Item Deleted : %d \n",temp);
    }
}

void print_Que() {
    int i = front;
    while(i <= rear) {
        printf("Que Values : %d \n",arr_Que[i]);
        i++;
    }
}


int main(){
    insert_To_Que(20);
    insert_To_Que(30);
    insert_To_Que(40);
    insert_To_Que(50);
    insert_To_Que(60);
    // delete_Que();
    print_Que();

    return 0;
}