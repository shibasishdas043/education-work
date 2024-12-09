#include<stdio.h>
void Namaste();
void Bonjour();

int main(){
    int n;
    printf("[Write 1=(If You Are Indian) And Write 2=(If You Are French)] = ");
    scanf("%d",&n);
    if (n==1)
    {
        Namaste();
    }
    else
    {
        if (n==2)
        {
            Bonjour();
        }
        else
        {
            printf("You Entered Wrong Number !");
        }
    }
    return 0;
}

void Namaste(){
    printf("Namaste !");
}
void Bonjour(){
    printf("Bonjour !");
}