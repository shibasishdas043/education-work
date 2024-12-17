#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *link;
};

int main(){
    struct node *head = malloc(sizeof(struct node));
    head -> data = 100;
    head -> link = NULL;

    struct node *ptr1 = malloc(sizeof(struct node));
    ptr1 -> data = 200;
    ptr1 -> link = NULL;

    head -> link = ptr1;

    struct node *ptr2 = malloc(sizeof(struct node));
    ptr2 -> data = 300;
    ptr2 -> link = NULL;

    ptr1 -> link = ptr2;

    struct node *display = head;

    while (display != NULL)
    {
        printf("%d \n",display -> data);
        display = display -> link; 
    }

    printf("\n");
    
    struct node *ptr3 = malloc(sizeof(struct node));
    ptr3 -> data = 400;
    ptr3 -> link = NULL;
    
    ptr3 -> link = ptr2;

    ptr1 -> link = ptr3;

    struct node *display1 = head;

    while (display1 != NULL)
    {
        printf("%d \n", display1 -> data);
        display1 = display1 -> link;
    }

    return 0;
    
}