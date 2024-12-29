#include <stdio.h>
#include <stdlib.h>
#include<stdbool.h>

struct bst { // its a structure of a binary search tree and nothing else
    int data;
    struct bst *left;
    struct bst *right;
};

struct bst *make_New_Node(int data) {
    struct bst *newNode = malloc(sizeof(struct bst));

    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;

    return newNode;
}

struct bst *insert_data_to_newNode(struct bst *root, int data) {
    if (root == NULL) {
        root = make_New_Node(data);
        return root;
    }
    else if (data <= root -> data) {
        root -> left = insert_data_to_newNode(root -> left, data);
    }
    else if (data >= root -> data) {
        root -> right = insert_data_to_newNode(root -> right, data);
    }
}

bool traverse_The_Tree(struct bst *root, int data) {
    if(root == NULL) {
        return false;
    }
    else if(root -> data == data) {
        return true;
    }

    if(data <= root -> data) {
        return traverse_The_Tree(root -> left, data);
    }
    else if(data >= root -> data) {
        return traverse_The_Tree(root -> right, data);
    }
}

int main() {
    struct bst *root = NULL;

    root = insert_data_to_newNode(root, 18);
    root = insert_data_to_newNode(root, 20);
    root = insert_data_to_newNode(root, 22);
    root = insert_data_to_newNode(root, 24);
    root = insert_data_to_newNode(root, 26);
    root = insert_data_to_newNode(root, 28);
    root = insert_data_to_newNode(root, 30);

    int number;
    printf("Enter Number To Searh : ");
    scanf("%d",&number);
    
    if (traverse_The_Tree(root, number) == true) {
        printf("\nFound");
    }
    else {
        printf("\nNot Found");
    }
    

    return 0;
}