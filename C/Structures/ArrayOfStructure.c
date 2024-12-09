#include<stdio.h>
#include<string.h>
int main(){
    typedef struct pokemon{
        int hp;
        int speed;
        int attack;
        char tier;
        char name[15];
    }pokemon;

    pokemon arr[3]; //arr[0] , arr[1] , ... arr[9]

    arr[0].attack = 50;
    arr[0].hp = 100;
    arr[0].speed = 30;
    arr[0].tier = 'A';
    strcpy(arr[0].name,"Motherchod");

    arr[1].attack = 60;
    arr[1].hp = 110;
    arr[1].speed = 40;
    arr[1].tier = 'B';
    strcpy(arr[1].name,"Kelane");

    arr[2].attack = 56;
    arr[2].hp = 120;
    arr[2].speed = 70;
    arr[2].tier = 'C';
    strcpy(arr[2].name,"MeraChoda");

    for (int i = 0; i < 3; i++)
    {
        printf("%d\n",arr[i].attack);
        printf("%d\n",arr[i].hp);
        printf("%d\n",arr[i].speed);
        printf("%c\n",arr[i].tier);
        printf("%s",arr[i].name);
    }
    
    return 0;
}