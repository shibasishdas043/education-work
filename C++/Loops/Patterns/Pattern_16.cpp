/* 
   A
   A B
   A B C
   A B C D

*/
#include<iostream>
using namespace std;
int main(){
   int n;
   cout<<"Enter Your Number : ";
   cin>>n;
   int row;
   row = 1;
   while (row <= n)
   {
      int col;
      col = 1;
      
      while (col <= row)// Dry Run Yourself .(Must)
      {
         char ch = 'A' + col - 1; // Dry Run Yourself .(Must)
         cout<< ch << " "; 
         col++;

      }
      cout<<endl;
      row++;
   }
   
   return 0;
}