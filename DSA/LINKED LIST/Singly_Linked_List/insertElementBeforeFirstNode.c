#include<stdio.h>
#include<stdlib.h>

struct node {
    int data;
    struct node *link;
};

// void addNode(struct node *ptr, int data, int link){
//     int value = data;
//     int newLink = link;
//     struct node *temp = malloc(sizeof(struct node));
//     temp -> data = value;
//     temp -> link = newLink;
    
//     ptr -> link = temp;
// }

int main(){
    struct node *head = malloc(sizeof(struct node));
    head -> data = 100;
    head -> link = NULL;
    
    struct node *ptr = malloc(sizeof(struct node));
    ptr -> data = 200;
    ptr -> link = NULL;

    head -> link = ptr;
    
    struct node *temp = malloc(sizeof(struct node));
    temp -> data = 300;
    temp -> link = NULL;

    temp -> link = head;
    head = temp;

    // struct node *ptr = head;

    // addNode(ptr,200,NULL);
    // addNode(ptr,300,NULL);
    // addNode(ptr,400,NULL);
    // addNode(ptr,500,NULL);
    // addNode(ptr,600,NULL);
    // addNode(ptr,700,NULL);

    ptr = head;

    while (ptr != NULL)
    {
        printf("%d ", ptr->data);
        ptr = ptr->link;
    }





return 0;
}