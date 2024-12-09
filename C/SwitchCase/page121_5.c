#include<stdio.h>
int main(){
    int ch='a'+'b';
    switch (ch)
    {
    case 'a':
    case 'b':
    printf("Look at 10 ideas, 11th will occur to you\n");
    case 'A':
    printf("If you have good idea project it\n");
    case 'b'+'a':
    printf("Have ideas will fly\n");    
    }
    return 0;
}