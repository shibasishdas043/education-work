#include<stdio.h>
#include<string.h>
typedef struct pokemon
{
    int hp;
    int attack;
    int speed;
    char tier;
    char name[15];
}pokemon;
int main(){
    
    // pokemon pikachu = {60,70,100,'A',"Pikachu"}; // this amd bottom are ok
    // It's Necessary To  order wise written .
    pokemon pikachu = {60,70,100};
    pikachu.tier = 'A';
    strcpy(pikachu.name,"Pikachu");

    printf("%d\n",pikachu.hp);
    printf("%d\n",pikachu.attack);
    printf("%d\n",pikachu.speed);
    printf("%c\n",pikachu.tier);
    printf("%s\n",pikachu.name);

    return 0;
}