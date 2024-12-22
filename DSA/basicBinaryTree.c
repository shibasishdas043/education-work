#include <stdio.h>
#include <stdlib.h>

struct node
{
    int value;
    struct node *left;
    struct node *right;
};

struct node *create_Node(int value)
{
    struct node *result = malloc(sizeof(struct node));

    if (result != NULL)
    {
        result->left = NULL;
        result->right = NULL;
        result->value = value;
    }
    return result;
}

void printTree(struct node *root) {
    if (root == NULL) {
        printf("Empty ! \n");
    }
    printf("Root Value = %d\n",root -> value);
    printf("Root Left Value = %d\n",root -> left);
    printf("Root Right Value = %d\n",root -> right);
    printf("\n");
    
}

int main()
{
    struct node *n1 = create_Node(10);
    struct node *n2 = create_Node(20);
    struct node *n3 = create_Node(30);
    struct node *n4 = create_Node(40);
    struct node *n5 = create_Node(50);
    struct node *n6 = create_Node(60);

    n1 -> left = n2; //Root
    n1 -> right = n3;
    n3 -> left = n4;
    n3 -> right = n5;
    n5 -> right = n6;
    n5 -> left = NULL;

    printTree(n1);
    

    return 0;
}