#include <iostream>
#include <fstream>
#include <string>
using namespace std;
// ========================================= data =========================================

const int MAX = 50;

struct GRAPH {
  int n;
  int values[MAX][MAX];
};

// ========================================= function =========================================


// test
void show_graph(GRAPH g){
  for (int i = 0; i < g.n; i++)
  {
    for (int j = 0; j < g.n; j++)
    {
      cout << g.values[i][j] << " ";
    }
    cout << endl;
  }
}

// Kiem tra so chan
bool is_even_number(int num){
  return num%2==0;
}

/**
 * Kiem tra kha nang ton tai cua ma tran
 * @param arr[]: tap hop cac level cua cac vertex
 * @param n : so luong phan tu trong arr
 */
bool can_exists(int arr[], int n){
  // tong cac vertex co odd level
  int odd_level_vertex = 0;
  int i = 0;
  while(i<n){
    if(!is_even_number(arr[i]))
      odd_level_vertex++;
    i++;
  }
  return is_even_number(odd_level_vertex);
}

/**
 * Xuat mang bac cua cac dinh
 * 
 * @param graph : ma tran can xu ly
 */ 
int* get_level_array(GRAPH g){
  int* arr = new int[g.n]; // khoi tao mang co kich thuoc n

  int i = 0;
  while(i < g.n){
    int sum = 0; // sum horizontal
    int j = 0;
    while(j < g.n){
      sum += g.values[i][j++];
    }
    arr[i] = sum;
    i++;
  }

  return arr;
}

// tim dinh co bac lon nhat
int find_highest_level_vertex(int* level_array, int n){
  int hi = level_array[0];
  for (int i = 1; i < n; i++)
  {
    if(level_array[i]> hi)
      hi = level_array[i]; 
  }
  return hi + 1; // dem tu 0
}

// tim dinh co bac nho nhat
int find_lowest_level_vertex(int* level_array, int n){
  int lo = level_array[0];
  for (int i = 1; i < n; i++)
  {
    if(level_array[i] < lo)
      lo = level_array[i]; 
  }
  return lo + 1; // dem tu 0 
}

// Kiem tra co phai ma tran doi xung
bool is_symmetric_matrix(GRAPH g) {
  for (int i = 0; i < g.n; i++)
  {
    for (int j = 0; j < g.n; j++)
    {
      if(g.values[i][j] != g.values[j][i]){
        return false;
      }
    }
  }
  return true;
}


// label 
int* check_connected_graph(GRAPH g){
  
  int* labels = new int[g.n]; // generate array save label of vertex
  int base = 1; // save value of vertex 
  
  // fill array
  for (int i = 0; i < g.n; i++)
  {
    labels[i] = 0;
  }
  
  int max = 0;

  // draw graph
  for (int i = 0; i < g.n; i++)
  {
    // bool is_con_greater = false;
    for (int j = 0; j < g.n; j++)
    {
      if(g.values[i][j] == 1){
        if(labels[i] == 0)
          labels[i] = base;
        if(labels[j] == 0)
          labels[j] = base; 
        if(j>i){
          // is_con_greater = true;
          if(max < j)
            max = j;
        }
      }
    }
    // if(!is_con_greater && i<=max){
      // base++;
    // }
    if(i+1>max){
      base++;
    }
  }
  return labels; 
}


// ========================================= i/o =========================================

// read file
void read_file(string filename, GRAPH &l){
  ifstream file(filename);

  int x; // store value in point

  file >> l.n;

  int i = 0;
  while(i < l.n){
    int j = 0;
    while(j < l.n && file >> x) 
      l.values[i][j++] = x;
    i++;
  }
  
  file.close();  
}

// write file
void write_file(string filename, GRAPH g){
  cout << "writing ..."<<endl;
  ofstream file(filename);

  file << g.n << endl;

  int i = 0;
  while(i < g.n){
    int j = 0;
    while(j < g.n ) 
      file << g.values[i][j++]<< " ";
    file << "\n";
    i++;
  }
  int* levels = get_level_array(g);
  int lo = find_lowest_level_vertex(levels, g.n);
  int hi = find_highest_level_vertex(levels, g.n);
  file << "Dinh co bac nho nhat: "<< lo<<endl;
  file << "Dinh co bac cao nhat: "<< hi<<endl;
  file << "Ma tran "<< (is_symmetric_matrix(g)? "vo" : "co") << " huong"<<endl;
  file.close();
  cout<< " ---complete---" << endl;
}

// ========================================= main =========================================


int main() {
  string filename;
  filename = "data\\graph4.txt";


  GRAPH g;
  read_file(filename, g);
  show_graph(g);
  int* labels = new int[g.n];

  cout<<endl;
  labels = check_connected_graph(g);
  for (int i = 0; i < g.n; i++)
  {
    cout<<labels[i]<< " ";
  }
  cout<<endl;

  cout << "Co muon xuat file khong [Yes / default no]" << endl;
  char a;
  cin>> a;
  if (a == 'y' || a == 'Y'){
    filename = "data\\result1.txt";
    write_file(filename, g); 
  }
  return 0;
}