#include<stdio.h>
void Hello();
void GoodBye();

int main(){
    int h=1,g=2;
    int n;
    printf("Enter Value (Either 1 Or 2) = ");
    scanf("%d",&n);

    if (h==n)
    {
        Hello();
    }
    else
    {
        if (g==n)
        {
            GoodBye();
        }
        else{
            printf("You Entered Wrong Number !");
        }
    }
    return 0;
} 

void Hello(){
    printf("Hello !\n");
}
void GoodBye(){
    printf("Good Bye !\n");
}