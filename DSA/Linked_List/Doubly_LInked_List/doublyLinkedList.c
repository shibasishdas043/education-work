#include<stdio.h>
#include<stdlib.h>

struct node {
    int data;
    struct node *leftLink;
    struct node *rightLink;
};
struct node *head;

struct node *make_New_Node(int value) {
    struct node *make_Node = malloc(sizeof(struct node));
    make_Node->data = value;
    make_Node->leftLink = NULL;
    make_Node->rightLink = NULL;
    return make_Node;
}

void insert_At_Head(int value) {
    struct node *temp_Node = make_New_Node(value);
    if(head == NULL) {
        head = temp_Node;
        return;
    }
    head->leftLink = temp_Node;
    temp_Node->rightLink = head;
    head = temp_Node; 
    
}

void print_Node_Values() {
    struct node *temp_Pointer = head;
    while (temp_Pointer != NULL) {
        printf("Node Values : %d\n",temp_Pointer->data);
        temp_Pointer = temp_Pointer->rightLink;
    }
    printf("\n");
}

void reverse_Print() {
    struct node *temp_Pointer = head;
    if(temp_Pointer == NULL) {
        return;
    }
    while(temp_Pointer->rightLink != NULL) {
        temp_Pointer = temp_Pointer->rightLink; 
    }
    printf("Reversing \n");
    while(temp_Pointer != NULL) {
        printf("Reverse Values : %d\n",temp_Pointer->data);
        temp_Pointer = temp_Pointer->leftLink;
    }
    printf("\n");
}

int main(){
    head = NULL;

    insert_At_Head(2);
    print_Node_Values();
    reverse_Print();

    insert_At_Head(4);
    print_Node_Values();
    reverse_Print();

    insert_At_Head(6);
    print_Node_Values();
    reverse_Print();

    return 0;
}