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
    return False;
  else:
    return True;

def powerSum(X, N):
  posCombosNum = 0;
  # if statement that returns at the start if cannot be reduced, return value should be one at recursion.
  maxNum = X ** (1/N);
  print(maxNum);
  if isDecimal(maxNum) == True:
    posCombosNum += 1;
  else:
    posCombosNum += powerSum(maxNum,N);

  # Take the root of the number, this will be the max value attainable
  print('possible combos: ', posCombosNum);
  return posCombosNum;



#testing
powerSum(100,2);