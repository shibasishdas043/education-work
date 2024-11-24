#include<iostream>
#include<stdbool.h>
using namespace std;
#include<string.h>

bool palindromeString(int start,string &streeng){
    if (start >= (sizeof(string)/2))
    {
        return;
    }
    if (start != (sizeof(string)-start-1))
    {
        return false;
    }
    palindromeString(start+1);

}
int main(){
    string streeng;
    cout<<"Enter Your Word To Check Palindrome = ";
    cin>>streeng;
    int size = sizeof(streeng);
    cout<<size;
    palindromeString(0,streeng);
    return 0;
}