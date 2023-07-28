#include<stdio.h>
int main(){
    int a=3,b=4,c;
    c=b-a;
    switch (c)
    {
    case 1||2:
        printf("God Give A Chance To Change Things\n");
        break;
    case a||b:
        printf("God Give Me A Chance To Run My Show\n");
        break;    
    }
    return 0;
}