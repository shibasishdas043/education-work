#include<stdio.h>
#include<string.h>
#include<stdbool.h>
int main(){
    typedef struct Date
    {
        int day;
        int month;
        int year;
    }Date;

    Date a,b;

    a.day = 5;
    a.month = 10;
    a.year = 2023;

    b.day = 25;
    b.month = 3;
    b.year = 2022;

   bool flag = true;
   if(a.day != b.day)
   {
    flag = false;
   }
   if(a.month != b.month)
   {
    flag = false;
   }
   if(a.year != a.year)
   {
    flag = false;
   }

   if(flag == true)
   {
    printf("The Dates Are Same");
   }
   else
   {
    printf("The Dates Are Different");
   }

   Date c;
   c = a;
   bool flag = true;
   if(a.day != c.day)
   {
    flag = false;
   }
   if(a.month != c.month)
   {
    flag = false;
   }
   if(a.year != c.year)
   {
    flag = false;
   }

   if(flag == true)
   {
    printf("The Dates Are Same");
   }
   else
   {
    printf("The Dates Are Different");
   }
    return 0;
}