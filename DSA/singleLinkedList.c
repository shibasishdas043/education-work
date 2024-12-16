#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *link;
};

void addNode(struct node *head,int value){
    struct node *temp = (struct node *)malloc(sizeof(struct node));
    temp -> data = value;
    temp -> link = NULL;
    if (head == NULL)
    {
        printf("Its Empty !");
        return;
    }
    struct node *ptr = NULL;
    ptr = head;
    while (ptr != NULL  )
    {
        ptr = ptr -> link;
    }
    ptr -> link = temp;

}

void printCountNodes(struct node *head)
{
    int count;
    if (head == NULL)
    {
        printf("%d", "Node Is Empty");
        return;
    }
    struct node *ptr = NULL;
    ptr = head;

    while (ptr != NULL)
    {
        count++;
        ptr = ptr->link;
    }
    printf("The Node Count : %d \n",count);
}

void printData(struct node *head){
    if (head == NULL)
    {
        printf("%d", "Linked List Is Empty");
        return;
    }
    struct node  *ptr = NULL;
    ptr = head;
    while (ptr != NULL)
    {
        printf("Values : %d \n",ptr -> data);
        ptr = ptr -> link;
    }

}


int main(){

    struct node *head = malloc(sizeof(struct node));
    head -> data = 100;
    head -> link = NULL;

    struct node *current = malloc(sizeof(struct node));
    current -> data = 200;
    current -> link = NULL;
    head -> link = current;

    current = malloc(sizeof(struct node));
    current -> data = 300;
    current -> link = NULL;
    head -> link -> link = current;


    
    addNode(head,400);
    printCountNodes(head);
    printData(head);




return 0;
}

