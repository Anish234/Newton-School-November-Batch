// Fahrenheit to Celsius
// easy
// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// Given a temperature F in Farenheit, your task is to convert it into Celsius using the following equation:-
// T(°c) = (T(°f) - 32)*5/9
// Input
// You don't have to worry about the input, you just have to complete the function fahrenheitToCelsius

// Constraints:-
// -10^3 <= F <= 10^3

// Note:- It is guaranteed that F - 32 will be a multiple of 9.
// Output
// Print an integer containing converted temperature in Fahrenheit.
// Example
// Sample Input 1:
// 77

// Sample Output 1:
// 25

// Sample Input 2:-
// -40

// Sample Output 2:-
// -40

static void farhrenheitToCelsius(int farhrenheit)
	{
	    System.out.print((farhrenheit-32)*5/9);
	}