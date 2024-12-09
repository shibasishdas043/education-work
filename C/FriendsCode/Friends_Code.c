#include<stdio.h>
#include<string.h>
typedef struct student
{
    char name[20];
    int roll;
    char department[20];
    char course[20];
} student;

void check(student s1,student s2)
{
    char* stu1=s1.department;
    char* stu2= s2.department;

    /*   METHOD 1 (BY USINNG POINTER) */ 

    while(*stu1 == *stu2)     
    {
        if(*stu1=='\0' || *stu2=='\0')
        {
            break;
        }
        stu1++;
        stu2++;
    }
    if(*stu1=='\0' && *stu2=='\0')
    {
        printf("Department are same....");
    }
    else 
    printf("Department are not same...");
    
}
int main()
{
    student s1,s2;
    s1.roll=01;
    strcpy(s1.name,"Ram");
    strcpy(s1.department,"CSEee");
    strcpy(s1.course,"AI");

    s2.roll=02;
    strcpy(s2.name,"Shyam");
    strcpy(s2.department,"CSEee");
    strcpy(s2.course,"Cyber");

    check(s1,s2);
    return 0;
}