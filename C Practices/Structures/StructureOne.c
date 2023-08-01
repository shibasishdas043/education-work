#include<stdio.h>
#include<string.h>
int main(){
    struct person
    {
        char name[59];
        float salary;
        int age;
    }first,second;
    strcpy(first.name,"Motherchod");
    first.salary = 25000.50;
    first.age = 22;
    printf("%s",first.name);
    second.age = 25;
    printf("\n%d",second.age);
    return 0;
}