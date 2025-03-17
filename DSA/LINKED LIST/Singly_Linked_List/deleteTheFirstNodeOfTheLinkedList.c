#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *link;
};

struct node *del_first_node(struct node *head){
    struct node *temp = head;

    head = head -> link;

    free(temp);
    temp -> link = NULL;

    return head;
}

int main()
{
    struct node *head = malloc(sizeof(struct node));
    head -> data = 100;
    head -> link = NULL;

    struct node *ptr = malloc(sizeof(struct node));
    ptr -> data = 200;
    ptr -> link = NULL;

    head -> link = ptr;

    struct node *ptr1 = malloc(sizeof(struct node));
    ptr1 -> data = 300;
    ptr1 -> link = NULL;

    ptr -> link = ptr1;

    struct node *display = head;

    while (display != NULL)
    {
        printf(" %d ", display -> data);
        display = display -> link;
    }

    head = del_first_node(head);

    struct node *display1 = head;

    printf("\n");

    while(display1 != NULL){
        printf(" %d ",display1 -> data);
        display1 = display1 -> link;
    }

    return 0;
}    