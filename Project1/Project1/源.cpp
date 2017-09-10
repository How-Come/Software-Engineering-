#include<iostream>
#include<stdlib.h>
#include<time.h>
#include<algorithm>
#include<stdio.h>
#include "fstream"
using namespace std;
bool judge(int line, int column, int a, int sudoku[9][9]);
int sudoku[9][9] = { 0 };
int N;
void produce_sudoku(int a, int b, int z);
int main()
{
	printf("Please input N:");
	cin >> N;
	srand((unsigned)time(NULL));
	sudoku[0][0] = 9;
	for (int i = 1; i<9; i++)
	{
		sudoku[0][i] = i;
	}
	random_shuffle(&(sudoku[0][1]), &(sudoku[0][8]));
	produce_sudoku(1, 0, 1);
	return 0;
}


void produce_sudoku(int i, int j, int z)
{
	if (j < 0)
	{
		i--;
		j = 0;
	}
	if (j>8)
	{
		i++;
		j = 0;
	}
	if (i == 9 && j == 0)
	{
		freopen("sudoku.txt", "w", stdout);
		for (int k = 0; k<9; k++)
		{
			for (int l = 0; l<9; l++)
			{
				printf("%d ", sudoku[k][l]);
			}
			putchar('\n');
		}
		putchar('\n');
		if (--N <= 0)
		{
			exit(0);
		}
	}
	else if (i < 9)
	{
		for (int kk = 1; kk<9; kk++) {
			int n = (z++) % 9 + 1;
			if (judge(i, j, n, sudoku))
			{
				sudoku[i][j] = n;
				produce_sudoku(i, j + 1, z);
				sudoku[i][j] = 0;
			}
		}
	}
}

bool judge(int line, int column, int a, int sudoku[9][9])
{
	int x, y;
	for (int i = 0; i<9; i++)
	{
		if (sudoku[line][i] == a)
		{
			return false;
		}
	}
	for (int i = 0; i<9; i++)
	{
		if (sudoku[i][column] == a)
		{
			return false;
		}
	}
	x = (line / 3) * 3;
	y = (column / 3) * 3;
	for (int i = x; i<x + 3; i++)
	{
		for (int j = y; j<y + 3; j++)
		{
			if (sudoku[i][j] == a)
			{
				return false;
			}
		}
	}
	return true;
}

