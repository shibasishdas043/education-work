// Example: ws – Omits the leading white spaces present before the first field

#include<iostream>
using namespace std;

int main()

{
	char name[125];
	cout << "Enter your name" << endl;

	cin >> ws;

	cin.getline(name,125);

	cout << name << endl;
	
	return 0;
}
