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
// pass by reference .
void change (pokemon* p){
    // (*p).hp = 70;
    p->hp = 70;
    // (*p).hp  And p->hp All Are Same .
    // (*p).attack = 40;
    p->attack = 40;
    // (*p).hp  And p->attack All Are Same .
    // (*p).speed = 90;
    p->speed = 90;
    // (*p).hp  And p->speed All Are Same .
    // (*p).tier = 'S';
    p->tier = 'S';
    // (*p).hp  And p->tier All Are Same .
    // strcpy((*p).name,"Pikachu");
    strcpy(p->name,"Pikachu");
    // (*p).hp  And p->name All Are Same .
}
int main(){
    pokemon pikachu;
    pikachu.hp = 60;
    pikachu.attack = 50;
    pikachu.speed = 90;
    pikachu.tier = 'A';
    strcpy(pikachu.name,"Pikachu");
    // int* x -> Address of Integer Value .
    // pokemon* x = &pikachu;
    // printf("%d\n",pikachu.hp);
    // (*x).hp = 70;
    // (*x).attack = 120;

    printf("%d\n",pikachu.hp);
    printf("%d\n",pikachu.attack);
    printf("%d\n",pikachu.speed);
    printf("%c\n",pikachu.tier);
    printf("%s\n",pikachu.name);

    change(&pikachu);

    printf("%d\n",pikachu.hp);
    printf("%d\n",pikachu.attack);
    printf("%d\n",pikachu.speed);
    printf("%c\n",pikachu.tier);
    printf("%s",pikachu.name);

    return 0;
}