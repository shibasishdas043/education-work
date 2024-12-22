#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *link;
};

struct node *delete_whole_linkdlist(struct node *head)
{

    struct node *temp = head;

    while (temp != NULL)
    {
        temp = temp->link;
        free(head);
        head = temp;
    }
    printf("Deleted !");
    return head;
}

int main()
{
    struct node *head = malloc(sizeof(struct node));
    head->data = 100;
    head->link = NULL;

    struct node *pointer = malloc(sizeof(struct node));
    pointer->data = 200;
    pointer->link = NULL;

    head->link = pointer;

    struct node *pointer1 = malloc(sizeof(struct node));
    pointer1->data = 300;
    pointer1->link = NULL;

    pointer->link = pointer1;

    head = delete_whole_linkdlist(head);

    struct node *display = head;
    while (display != NULL)
    {
        printf("%d ", display->data);
        display = display->link;
    }

    return 0;
}