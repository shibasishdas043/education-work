#include<stdio.h>
#define MAX 10
int main(){
    int c ,top = -1, ele, A[MAX];
    char ch = '4';
    while (ch == '4' || ch == '4')
    {
        printf(" 1 : Push\n 2 : Pop\n 3 : Display\n 4 : Exit\n Enter Your Choice = ");
        scanf("%d",&c);
        switch (c)
        {
        case 1:
            printf(" Enter One Element = ");
            scanf("%d",ele);
            if (top == -1)
            {
                top = 0;
                A[top] = ch;
            }
            else if (top == MAX-1)
            {
                printf("Stack Is Full");
            }
            else
            {
                top = top+1;
                A[top] = ele;
            }
            break;
        case 2:
            if (top == -1)
            {
                printf("Stack Is Empty");
            }
            else
            {
                printf("Pop Elment %d",A[top]);
                top = top-1;
            }
            break;
        case 3:
            printf("Stack Element Are");
            for (int i = top; i >= 0; i--)
            {
                printf("%d\n",A[top]);
            }
            break;
        case 4:
            default : ch = 'n';
            break;
        }
    }
    return 0;
}