#include<stdio.h>
#include<string.h>
#include<stdbool.h>
typedef union pokemon
{
    int hp;
    int attack;
    int speed;
    char tier;
    char name[15];
}pokemon;
int main(){
    pokemon pikachu;
    pikachu.hp = 60;
    pikachu.attack = 50;
    pikachu.speed = 90;
    pikachu.tier = 'A';
    strcpy(pikachu.name,"Pikachu");
    
    printf("%p\n",&pikachu.hp);
    printf("%p\n",&pikachu.attack);
    printf("%p\n",&pikachu.speed);
    printf("%p\n",&pikachu.tier);
    printf("%p\n",pikachu.name);
    

    return 0;
}