---
title: "1: Two Sum"
date: 2021-04-01T19:39:42-04:00
draft: false
---

### Problem


Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Solution

```
def twoSum(self, nums: List[int], target: int) -> List[int]:
    m = {}
    a = 0
    
    for i in range(len(nums)):
        num = nums[i]
        
        if target - num in m:
            return [m[target - num], i]
        m[num] = i
    

```