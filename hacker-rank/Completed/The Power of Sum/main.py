#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'powerSum' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER X
#  2. INTEGER N
#
def isDecimal(num):
  numFloat = int(num);
  if (numFloat - num) != 0:
    return True;
  else:
    return False;

def powerSum(X, N):
  posCombosNum = 0;
    # Takes the log of the number given the N input (squared, cubed, etc.), this will be the max value attainable
  maxNum = X ** (1/N);
  # list of numbers that can be raised to the N that can add up to the original X
  newList = [];

  print('maxNum: ', maxNum);
  print(isDecimal(maxNum));
  if isDecimal(maxNum) == True:
    posCombosNum = 1;
  else:
    for k in range(int(maxNum)):
      newList.append(k);
    print('newList:', newList);
    posCombosNum += powerSum(maxNum,N);


  print('possible combos: ', posCombosNum);
  return posCombosNum;



#testing
powerSum(100,2);