// Nesting Of One Or Above Structure .
#include<stdio.h>
#include<string.h>
#include<stdbool.h>
int main(){
    typedef struct pokemon
    {
        int hp;
        int speed;
        int attack;
        char tier;
        char name[15];
    }pokemon;
    typedef struct legendrypokemon
    {
        pokemon normal;
        char ability[10];

    }legendrypokemon;
    typedef struct godpokemon
    {
        legendrypokemon legend;
        int specialattack;
    }godpokemon;

    godpokemon arceus;

    arceus.specialattack = 300;
    strcpy(arceus.legend.ability,"turn Into Stone");
    arceus.legend.normal.attack = 400;

    legendrypokemon  mewtwo;
    strcpy(mewtwo.ability,"Pressure");
    mewtwo.normal.attack = 100;
    mewtwo.normal.hp = 540;
    mewtwo.normal.speed = 200;
    strcpy(mewtwo.normal.name,"Mewtwo");
    mewtwo.normal.tier = 'C';
    return 0;
}