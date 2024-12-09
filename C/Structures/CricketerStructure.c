#include<stdio.h>
#include<string.h>
int main(){
    typedef struct Cricketer
    {
        char name[20];
        int age;
        int numOfMatch;
        float averageRun;
    }Cricketr;

    Cricketr arr[3];

    for (int i = 0; i < 3; i++)
    {
        printf("Enter The Name Of The Cricketer\n");
        scanf("%[^\n]",arr[i].name);
        printf("Enter The Age Of The Cricketer\n");
        scanf("%d",&arr[i].age);
        printf("Enter The No. Of Matcthes\n");
        scanf("%d",&arr[i].numOfMatch);
        printf("Enter The No. Of Average Run\n");
        scanf("%f",&arr[i].averageRun);
    }

    printf("\n");
    for (int i = 0; i < 3; i++)
    {
        printf("Name : %s \n",arr[i].name);
        printf("Age : %d \n",arr[i].age);
        printf("No. Of Match :%d \n",arr[i].numOfMatch);
        printf("Average Run : %.2f \n",arr[i].averageRun);
    }
    return 0;
}