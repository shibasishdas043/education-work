// CPP Program to demonstrate the & and * Operators
#include <iostream>
using namespace std;

int main()
{
	int a = 6;
	int* b;
	int c;
	// & Operator
	b = &a;

	// * Operator
	c = *b;
	cout << " a = " << a << endl;
	cout << " b = " << b << endl;
	cout << " c = " << c << endl;

	return 0;
}
