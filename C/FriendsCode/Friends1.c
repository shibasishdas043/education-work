#include<stdio.h>
int main()
{
    float i;
    for(float y=1.5;y<=4.5;y++)
    {
        for(float x=5.5;x<=12.5;x+=0.5)
        {
            i=2+(y+0.5*x);
            printf("%.2f ",i);
        }
        printf("\n");
    }
    return 0;
}