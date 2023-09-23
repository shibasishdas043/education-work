#include <iostream>
using namespace std;
int main(){
    for (int i = 0; i < 3; i++)
    {
        for (int j = i; j <=3; j++)
        {
           if (i + j == 10) 
           {
            break;
           }
           
        }
        cout<< i<<" "<<j<<endl;
        
        // cout<< " Hey"<< endl;
        // cout<< " Hey Hello"<< endl;
        // cout<< " Hey Kelane"<< endl;
        // continue;
        // cout<< " Hey Madarchod"<< endl;
        // cout<< " Hey Bockachoda"<< endl;
        // i++;
    }
    return 0;
}