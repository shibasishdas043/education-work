#include <stdio.h>
#include <stdlib.h>

struct node
{
    int data;
    struct node *link;
};

void delete_last_node(struct node *head)
{
    if (head->link == NULL)
    {
        printf("The List Is Empty");
        free(head);
        head = NULL;
    }
    else
    {
        struct node *second_last_pointer = head;
        struct node *last_pointer = head;
        while (last_pointer->link != NULL)
        {
            second_last_pointer->link = last_pointer;
            last_pointer = last_pointer->link;
        }
        free(last_pointer);
        last_pointer = NULL;
    }
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

    delete_last_node(head);

    struct node *display = head;

    while (display != NULL)
    {
        printf(" %d ",display->data);
        display = display->link;
    }

    return 0;
}